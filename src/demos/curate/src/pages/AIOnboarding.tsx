import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, ArrowRight, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

export function AIOnboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        title: 'Construtor de Curriculo com IA',
        subtitle: 'Entrevistando voce para criar o rascunho ideal.',
        generate: 'Gerar Curriculo',
        thinking: 'IA esta pensando...',
        placeholder: 'Digite sua resposta aqui...',
        step: 'Etapa',
        initial:
          'Oi! Sou sua assistente de carreira com IA. Vou ajudar voce a criar um curriculo profissional com algumas perguntas. Para comecar, qual seu nome completo e cargo atual?',
        followUps: [
          'Otimo inicio. Agora escreva um resumo profissional curto com seus pontos fortes e objetivo de carreira.',
          'Perfeito. Conte sobre sua experiencia mais recente: empresa, cargo e principais responsabilidades.',
          'Excelente. Agora compartilhe sua formacao e certificacoes relevantes.',
          'Bom progresso. Liste suas 5 principais habilidades tecnicas ou profissionais.',
          'Perfeito. Ja temos informacoes suficientes para um bom primeiro rascunho. Clique em "Gerar Curriculo" para continuar.',
        ],
      }
    : {
        title: 'AI Resume Builder',
        subtitle: 'Interviewing you to create the perfect draft.',
        generate: 'Generate Resume',
        thinking: 'AI is thinking...',
        placeholder: 'Type your answer here...',
        step: 'Step',
        initial:
          "Hi! I'm your AI career assistant. I'll help you build a professional resume by asking a few questions. To start, what's your full name and current professional title?",
        followUps: [
          'Great start. Now write a short professional summary with your core strengths and career objective.',
          'Perfect. Tell me about your most recent experience: company, role, and key responsibilities.',
          'Nice. Now share your education background and any certifications worth highlighting.',
          'Great progress. List your top 5 technical or professional skills.',
          "Awesome. We already have enough information for a strong first draft. Click 'Generate Resume' to continue.",
        ],
      };

  const [messages, setMessages] = React.useState<Message[]>([{ role: 'assistant', content: text.initial }]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    const nextStep = Math.min(step + 1, text.followUps.length);
    const response = text.followUps[Math.min(step, text.followUps.length - 1)];

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setStep(nextStep);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-lg shadow-zinc-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-900">{text.title}</h1>
            <p className="text-sm text-zinc-500">{text.subtitle}</p>
          </div>
        </div>
        {step >= 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <Button onClick={() => navigate(curate('builder/new?ai=true'))} className="bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-lg shadow-emerald-100">
              {text.generate}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden border-zinc-200/60 shadow-xl shadow-zinc-100">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn('flex items-start space-x-3 max-w-[80%]', msg.role === 'user' ? 'ml-auto flex-row-reverse space-x-reverse' : '')}
              >
                <div className={cn('h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0', msg.role === 'assistant' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600')}>
                  {msg.role === 'assistant' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div className={cn('rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm', msg.role === 'assistant' ? 'bg-white border border-zinc-100 text-zinc-800 rounded-tl-none' : 'bg-zinc-900 text-white rounded-tr-none')}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2 text-zinc-400 text-xs italic ml-11">
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>{text.thinking}</span>
            </motion.div>
          )}
        </div>

        <div className="p-4 border-t border-zinc-100 bg-zinc-50/50">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={text.placeholder}
              className="w-full bg-white border border-zinc-200 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all shadow-sm"
              disabled={isTyping || step >= 5}
            />
            <button type="submit" disabled={!input.trim() || isTyping || step >= 5} className="absolute right-2 p-2 text-zinc-400 hover:text-zinc-900 disabled:opacity-30 transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </form>
          <p className="mt-2 text-[10px] text-center text-zinc-400 uppercase tracking-widest font-bold">
            {text.step} {Math.min(step + 1, 5)} of 5
          </p>
        </div>
      </Card>
    </div>
  );
}
