import { create } from 'zustand';
import { Message, Conversation } from '@/types/chat.types';
import { Character } from '@/types/character.types';

interface ChatState {
  messages: Message[];
  activeConversation: Conversation | null;
  currentCharacter: Character | null;
  isLoading: boolean;
  addMessage: (message: Message) => void;
  setMessages: (messages: Message[]) => void;
  setActiveConversation: (conversation: Conversation | null) => void;
  setCurrentCharacter: (character: Character | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  activeConversation: null,
  currentCharacter: null,
  isLoading: false,
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  setMessages: (messages) => set({ messages }),
  setActiveConversation: (conversation) => set({ activeConversation: conversation }),
  setCurrentCharacter: (character) => set({ currentCharacter: character }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
