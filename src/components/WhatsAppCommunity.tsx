import { MessageCircle, Sparkles } from 'lucide-react';

export default function WhatsAppCommunity() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#1A1124] to-[#2D1B42] text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center justify-center p-3 bg-[#25D366]/20 text-[#25D366] rounded-full mb-6">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
            Comunidade Gratuita
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Participe do nosso grupo exclusivo no WhatsApp e receba <strong className="text-white">cartas gratuitas todos os dias</strong>. 
            Comece suas manhãs com orientações espirituais, mensagens do tarot e uma energia incrível!
          </p>

          <a 
            href="https://chat.whatsapp.com/EqNkLN0PlUG5S7DneHKOJI?s=cl&p=i&mlu=4&ilr=4" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-sm font-medium transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)] w-full md:w-auto uppercase tracking-widest text-sm"
          >
            <Sparkles className="w-5 h-5" />
            PARTICIPAR DA COMUNIDADE
          </a>
        </div>
      </div>
    </section>
  );
}
