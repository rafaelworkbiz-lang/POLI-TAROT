'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function SocialProof() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Testimonials (Asymmetrical) */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pl-8 border-l border-gold-dark/30 relative"
          >
            <Quote className="absolute -left-[20px] top-0 text-gold-dark/40 w-10 h-10 bg-white rounded-full p-1 border border-gray-100 shadow-sm" />
            <p className="font-serif italic text-xl md:text-2xl text-[#1A1124] leading-relaxed mb-4">
              "Uma experiência que dividiu minha vida em um antes e um depois. A precisão do Jogo de Búzios não tem comparação, vi minha realidade se transformar."
            </p>
            <span className="text-gold-dark tracking-widest uppercase text-xs font-semibold">
              — Camila R., Consulta Espiritual
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pl-8 border-l border-gold-dark/30 relative ml-0 md:ml-12"
          >
            <Quote className="absolute -left-[20px] top-0 text-gold-dark/40 w-10 h-10 bg-white rounded-full p-1 border border-gray-100 shadow-sm" />
            <p className="font-serif italic text-lg md:text-xl text-[#1A1124]/80 leading-relaxed mb-4">
              "A leitura desbloqueou barreiras que eu levava anos tentando superar. Encontrei clareza e direção para o meu caminho."
            </p>
            <span className="text-gold-dark tracking-widest uppercase text-xs font-semibold">
              — Javier M., Jogo de Búzios
            </span>
          </motion.div>
        </div>

        {/* Right Side: Authority & Negative Space */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Aesthetic Background Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gold-dark/5 to-transparent rounded-full blur-[80px] -z-10" />
          
          <div className="relative w-full max-w-sm aspect-[4/5] bg-white border border-gray-200 rounded-sm overflow-hidden flex items-end justify-center pb-0 group shadow-lg">
            {/* Image Placeholder with Negative Space usage */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent z-10" />
            
            <Image 
              src="/imagens/poli-sobral-perfil.jpg" 
              alt="Poli Sobral" 
              fill 
              className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-1000" 
            />
            
            <div className="relative z-20 text-center pb-8 w-full">
              <h3 className="font-serif text-3xl text-[#1A1124] mb-1">Poli Sobral</h3>
              <p className="text-gold-dark uppercase tracking-widest text-xs font-semibold">Fundadora & Guia Espiritual</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

