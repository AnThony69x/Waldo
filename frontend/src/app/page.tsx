"use client";

import { useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { useChatStore } from "@/store/useChatStore";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { ChatInputForm } from "@/components/chat/ChatInputForm";
import { Settings, Maximize2 } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import Image from "next/image";

export default function ChatPage() {
  const { messages, sendMessage, isSending } = useChat();
  const { setCurrentCharacter, currentCharacter } = useChatStore();

  useEffect(() => {
    setCurrentCharacter({
      id: "waldo-1",
      name: "Waldo",
      description: "Asistente sarcástico y muy inteligente.",
      avatar: "/avatars/waldo.png",
      isActive: true,
    });
  }, [setCurrentCharacter]);

  return (
    <main className="flex h-full w-full bg-zinc-950">
      
      {/* 35% - Avatar Zone (Hidden on mobile) */}
      <aside className="hidden lg:flex lg:w-[35%] relative flex-col items-center justify-center overflow-hidden bg-zinc-900/50">
        {/* Glow background effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-zinc-500 rounded-full blur-[140px]" />
        </div>
        
        {/* Top Controls */}
        <div className="absolute top-0 left-0 p-6 z-20">
          <IconButton icon={Maximize2} variant="ghost" aria-label="Expandir" className="text-zinc-600 hover:text-zinc-300" />
        </div>

        {/* Avatar Presentation */}
        {currentCharacter && (
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-80 h-80 mb-10">
               <Image 
                 src={currentCharacter.avatar!} 
                 alt={currentCharacter.name} 
                 fill 
                 sizes="(max-width: 1024px) 100vw, 400px"
                 className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-transform duration-1000 ease-out hover:scale-105" 
                 priority
               />
            </div>
            <h1 className="text-4xl font-light tracking-tight text-white mb-2">{currentCharacter.name}</h1>
            <p className="text-xs text-zinc-500 font-semibold tracking-[0.2em] uppercase">AI Companion</p>
          </div>
        )}
      </aside>

      {/* 65% - Chat Area */}
      <section className="flex flex-col h-full w-full lg:w-[65%] border-l border-zinc-900 bg-zinc-950 relative z-10 shadow-2xl">
        {/* Minimalist Header */}
        <header className="h-[72px] flex items-center justify-between px-6 lg:px-10 bg-zinc-950/80 backdrop-blur-md z-20 sticky top-0">
          <div className="flex items-center gap-3">
             {currentCharacter && (
               <div className="lg:hidden relative w-8 h-8 rounded-full overflow-hidden border border-zinc-800">
                 <Image src={currentCharacter.avatar!} alt={currentCharacter.name} fill sizes="32px" className="object-cover" priority />
               </div>
             )}
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <h2 className="font-semibold text-xs text-zinc-400 tracking-[0.2em] uppercase">{currentCharacter?.name || 'Cargando...'}</h2>
          </div>
          <IconButton icon={Settings} variant="ghost" aria-label="Ajustes" className="text-zinc-500 hover:text-zinc-300" />
        </header>

        {/* Chat Window */}
        <ChatWindow 
          messages={messages} 
          characterAvatar={currentCharacter?.avatar}
          isTyping={isSending}
        />

        {/* Input Area */}
        <div className="px-4 lg:px-10 pb-8 pt-4 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent z-20">
          <div className="max-w-4xl mx-auto">
            <ChatInputForm onSendMessage={sendMessage} isLoading={isSending} />
          </div>
        </div>
      </section>

    </main>
  );
}
