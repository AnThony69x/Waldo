import { useState } from 'react';
import { useChatStore } from '@/store/useChatStore';
import { ChatService } from '@/services/chat.service';
import { toast } from 'sonner';

export const useChat = () => {
  const { messages, addMessage, currentCharacter, activeConversation } = useChatStore();
  const [isSending, setIsSending] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim() || !currentCharacter) return;

    // Optimistic update for the user message
    const tempUserId = `temp-${Date.now()}`;
    addMessage({
      id: tempUserId,
      conversationId: activeConversation?.id || 'default',
      sender: 'user',
      content,
      createdAt: new Date(),
    });

    setIsSending(true);
    try {
      // API Call
      const response = await ChatService.sendMessage({
        conversationId: activeConversation?.id,
        characterId: currentCharacter.id,
        content,
      });
      // Add the AI's response
      addMessage(response);
    } catch (error) {
      console.error('Failed to send message', error);
      toast.error('No se pudo enviar el mensaje a Waldo. Verifica tu conexión.');
    } finally {
      setIsSending(false);
    }
  };

  return {
    messages,
    isSending,
    sendMessage,
  };
};
