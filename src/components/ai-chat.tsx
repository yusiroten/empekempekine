"use client";

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send, Bot, User, X, Loader2 } from 'lucide-react';
import { answerCustomerInquiries } from '@/app/actions';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";


type Message = {
  id: number;
  role: 'user' | 'assistant';
  text: string;
};

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 1, role: 'assistant', text: "Halo! Saya asisten AI Empek-Empek Ine. Ada yang bisa saya bantu?" }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: inputValue,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await answerCustomerInquiries({ query: inputValue });
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        text: response.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Maaf, terjadi kesalahan saat menghubungi asisten AI.",
        });
        const errorMessage: Message = {
            id: Date.now() + 1,
            role: 'assistant',
            text: "Maaf, saya sedang mengalami gangguan. Silakan coba lagi nanti.",
        }
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl z-50 flex items-center justify-center transition-transform transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka obrolan AI"
      >
        {isOpen ? <X className="h-8 w-8 text-primary-foreground" /> : <MessageSquare className="h-8 w-8 text-primary-foreground" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Card className="w-[350px] h-[500px] shadow-2xl rounded-2xl flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between border-b">
                <div className="flex items-center gap-3">
                    <Bot className="h-7 w-7 text-primary" />
                    <CardTitle className="font-headline text-xl text-primary">Asisten AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-end gap-2 ${
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.role === 'assistant' && <AvatarFor role="assistant" />}
                        <div
                          className={`max-w-[80%] rounded-xl px-4 py-2 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          <p className="text-sm font-body">{message.text}</p>
                        </div>
                        {message.role === 'user' && <AvatarFor role="user" />}
                      </div>
                    ))}
                    {isLoading && (
                       <div className="flex items-end gap-2 justify-start">
                         <AvatarFor role="assistant" />
                         <div className="max-w-[80%] rounded-xl px-4 py-2 bg-secondary text-secondary-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                         </div>
                       </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Tanya sesuatu..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    <span className="sr-only">Kirim</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AvatarFor({role}: {role: 'user' | 'assistant'}) {
    if(role === 'assistant') {
        return (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
            </div>
        )
    }
    return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
            <User className="h-5 w-5" />
        </div>
    )
}