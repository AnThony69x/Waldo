import api from './api.config';
import { ChatRequest, Message } from '@/types/chat.types';

export const ChatService = {
  sendMessage: async (request: ChatRequest): Promise<Message> => {
    // Petición real al backend FastAPI
    const response = await api.post('/chat/', request);
    return response.data;
  },
};
