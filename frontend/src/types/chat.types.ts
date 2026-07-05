export interface Message {
  id: string;
  conversationId: string;
  sender: 'user' | 'character';
  content: string;
  emotion?: string;
  audioUrl?: string;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  userId: string;
  characterId: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatRequest {
  conversationId?: string;
  characterId: string;
  content: string;
}
