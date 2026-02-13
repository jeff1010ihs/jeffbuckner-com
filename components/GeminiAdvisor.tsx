
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, MessageSquare } from 'lucide-react';
import { getLeadershipInsight } from '../services/geminiService';
import { ChatMessage } from '../types';

export const GeminiAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welcome. I am here to provide insights on character-driven leadership and spiritual formation. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getLeadershipInsight(input);
    
    const modelMessage: ChatMessage = {
      role: 'model',
      text: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <section id="advisor" className="py-24 bg-brand-navy text-white overflow-hidden relative border-t border-brand-rust/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 mb-6 border border-white/10">
              <Sparkles className="w-3 h-3 text-brand-rust" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-300">AI Site Chat</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Seek Direct Wisdom</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Interact with our AI Site Chat for immediate insights on leadership, spiritual maturity, and character building. Based on the philosophy of intentional growth.
            </p>
            <div className="flex items-center space-x-6 text-slate-700">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">Active Guidance</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-none h-[600px] flex flex-col shadow-2xl relative border-t-4 border-brand-rust">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-navy">AI Site Chat</h3>
                  <p className="text-[10px] text-brand-rust font-bold uppercase">Character Advisor</p>
                </div>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 ${
                    msg.role === 'user' 
                      ? 'bg-slate-100 text-slate-900 rounded-none border-r-4 border-brand-navy' 
                      : 'bg-slate-50 text-slate-700 rounded-none italic font-serif border-l-4 border-brand-rust/10'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <p className="text-[8px] uppercase font-bold tracking-widest mt-2 opacity-40">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-50 p-4 border-l-4 border-brand-navy flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-navy" />
                    <span className="text-[10px] uppercase font-bold text-brand-navy tracking-widest">Processing Wisdom...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for leadership insight..."
                  className="w-full bg-slate-50 border-none px-6 py-4 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none transition-all placeholder:text-slate-400 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-3 bg-brand-navy text-white hover:bg-brand-rust disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 text-center uppercase font-bold tracking-[0.2em]">
                Character development is a lifetime commitment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-rust rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-rust rounded-full"></div>
      </div>
    </section>
  );
};
