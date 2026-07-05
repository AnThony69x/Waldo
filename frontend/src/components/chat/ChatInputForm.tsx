"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowUp, Loader2 } from 'lucide-react';
import { IconButton } from '@/components/ui/IconButton';

const chatSchema = z.object({
  message: z.string().min(1, 'Vacío').trim(),
});

type ChatFormValues = z.infer<typeof chatSchema>;

interface ChatInputFormProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export const ChatInputForm = ({ onSendMessage, isLoading }: ChatInputFormProps) => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm<ChatFormValues>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: '' }
  });

  const onSubmit = (data: ChatFormValues) => {
    onSendMessage(data.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-end gap-2 bg-zinc-900/80 backdrop-blur-2xl p-2 rounded-3xl border border-zinc-800 shadow-2xl focus-within:border-zinc-700 transition-colors duration-300">
      <div className="flex-1 px-4">
        <textarea
          {...register('message')}
          id="chat-message-input"
          aria-label="Escribe tu mensaje a Waldo"
          placeholder="Habla con Waldo..."
          className="w-full max-h-40 min-h-[48px] bg-transparent resize-none outline-none text-zinc-100 placeholder-zinc-500 py-3.5 text-[15px] font-light custom-scrollbar"
          rows={1}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight}px`;
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }
          }}
        />
      </div>
      <div className="shrink-0 mb-1 mr-1">
        <IconButton
          type="submit"
          icon={isLoading ? Loader2 : ArrowUp}
          disabled={!isValid || isLoading}
          variant="primary"
          aria-label="Enviar"
          className={isLoading ? 'animate-spin' : ''}
        />
      </div>
    </form>
  );
};
