'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#FAFAFA] border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[70vh] py-16 lg:py-0">
          {/* Coluna de Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-10 lg:pr-12">
            <span className="text-gold-dark font-semibold tracking-wider uppercase text-sm mb-4">
              Consultas & Jogo de Búzios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1124] leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 font-light">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/whatsapp" className="bg-[#1A1124] hover:bg-black text-white px-8 py-4 rounded-sm font-medium transition-colors duration-300 w-full sm:w-auto text-center uppercase tracking-widest text-sm">
                {t('hero.ctaPrimary')}
              </Link>
              <Link href="/whatsapp" className="border border-[#1A1124] text-[#1A1124] hover:bg-gray-50 px-8 py-4 rounded-sm font-medium transition-colors duration-300 w-full sm:w-auto text-center uppercase tracking-widest text-sm">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
          
          {/* Coluna de Imagem (Banner) */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative h-[400px] lg:h-[70vh]">
            <div className="absolute inset-0 lg:-mr-8 overflow-hidden rounded-lg lg:rounded-none lg:rounded-bl-[100px]">
              <Image 
                src="/imagens/poli-sobral-hero.jpg" 
                alt="Poli Sobral realizando leitura de Tarot"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

