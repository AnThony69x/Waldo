import clsx from 'clsx';
import { ReactNode } from 'react';

interface ChatBubbleProps {
  children: ReactNode;
  sender: 'user' | 'character';
}

export const ChatBubble = ({ children, sender }: ChatBubbleProps) => {
  const isUser = sender === 'user';
  
  return (
    <div
      className={clsx(
        'px-5 py-3.5 text-[15px] leading-relaxed break-words max-w-full font-light',
        isUser 
          ? 'bg-zinc-800 text-zinc-100 rounded-3xl rounded-br-sm shadow-sm' 
          : 'bg-transparent text-zinc-300'
      )}
    >
      {children}
    </div>
  );
};
