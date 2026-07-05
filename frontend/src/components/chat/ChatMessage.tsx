import { Message } from '@/types/chat.types';
import { Avatar } from '@/components/ui/Avatar';
import { ChatBubble } from '@/components/ui/ChatBubble';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
  characterAvatar?: string;
}

export const ChatMessage = ({ message, characterAvatar = '/avatars/waldo.png' }: ChatMessageProps) => {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={clsx('flex w-full gap-4 group', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && (
        <div className="shrink-0 mt-1">
          <Avatar src={characterAvatar} alt="Waldo" size="md" className="ring-1 ring-zinc-800/50 shadow-lg" />
        </div>
      )}
      
      <div className={clsx('flex flex-col', isUser ? 'items-end max-w-[85%] md:max-w-[70%]' : 'items-start max-w-[95%] md:max-w-[85%]')}>
        <ChatBubble sender={message.sender}>
          {message.content}
        </ChatBubble>
      </div>

      {isUser && (
        <div className="shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center border border-zinc-700/50 shadow-md">
            <User size={18} className="text-zinc-400" />
          </div>
        </div>
      )}
    </motion.div>
  );
};
