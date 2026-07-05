"use client";

import { useEffect, useRef } from 'react';
import { Message } from '@/types/chat.types';
import { ChatMessage } from './ChatMessage';
import { MessageSquareDashed } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatWindowProps {
  messages: Message[];
  characterAvatar?: string;
  isTyping?: boolean;
}

export const ChatWindow = ({ messages, characterAvatar, isTyping }: ChatWindowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 lg:px-12 py-8 space-y-8 scroll-smooth custom-scrollbar">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-zinc-400 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center shadow-lg"
          >
            <MessageSquareDashed size={32} className="text-zinc-400" strokeWidth={1.5} />
          </motion.div>
          <p className="text-sm font-medium tracking-wider uppercase">Inicia la conversación</p>
        </div>
      ) : (
        messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} characterAvatar={characterAvatar} />
        ))
      )}
      
      {isTyping && (
        <div className="flex w-full justify-start mt-4">
          <div className="px-5 py-3 flex gap-2 items-center ml-14">
            <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};
