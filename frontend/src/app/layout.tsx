import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "PersonaAI - Waldo",
  description: "Plataforma de personajes con Inteligencia Artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={clsx(inter.className, "bg-zinc-950 text-zinc-100 antialiased h-screen overflow-hidden selection:bg-zinc-800")}>
        {children}
        <Toaster theme="dark" position="top-center" toastOptions={{ className: 'border-zinc-800 bg-zinc-900 text-zinc-100' }} />
      </body>
    </html>
  );
}
