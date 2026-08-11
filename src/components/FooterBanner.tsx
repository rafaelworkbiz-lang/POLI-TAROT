'use client';

import Link from 'next/link';

export default function FooterBanner() {
  return (
    <footer className="w-full bg-[#1A1A24] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-4">RESERVA YA MISMO</h2>
        <p className="text-sm md:text-base text-gray-400 mb-12 text-center">
          Accede a rituales exclusivos, promociones especiales y tips mágicos
        </p>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8 gap-6 md:gap-0">
          <button className="bg-[#5A31F4] hover:bg-[#4a26d1] text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 text-sm">
            <span>♡</span> Seguir en shop
          </button>
          
          <div className="flex items-center gap-6 text-gray-400">
            <Link href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors" aria-label="Youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.1 8.4 2 10.2 2 12s.1 3.6.5 4.9a3 3 0 0 0 2.1 2.1C6 19.5 12 19.5 12 19.5s6 0 7.4-.5a3 3 0 0 0 2.1-2.1c.4-1.3.5-3.1.5-4.9s-.1-3.6-.5-4.9a3 3 0 0 0-2.1-2.1C18 4.5 12 4.5 12 4.5s-6 0-7.4.5a3 3 0 0 0-2.1 2.1z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {/* TikTok Icon placeholder using a span */}
              <span className="font-bold text-lg leading-none">tik</span>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-6 md:gap-0">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span>© 2026, Irina Tarot store</span>
            <span>·</span>
            <Link href="#" className="hover:text-gray-300">Política de privacidad</Link>
            <span>·</span>
            <Link href="#" className="hover:text-gray-300">Términos del servicio</Link>
            <span>·</span>
            <Link href="#" className="hover:text-gray-300">Información de contacto</Link>
          </div>
          
          {/* Payment Methods */}
          <div className="flex gap-2 opacity-80">
            {/* Visa */}
            <svg viewBox="0 0 38 24" className="w-9 h-6" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="24" rx="3" fill="#1434CB" />
              <text x="50%" y="55%" fill="#fff" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" textAnchor="middle" dominantBaseline="middle">VISA</text>
            </svg>
            {/* Mastercard */}
            <svg viewBox="0 0 38 24" className="w-9 h-6" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="24" rx="3" fill="#252526" stroke="#444" strokeWidth="1"/>
              <circle cx="15" cy="12" r="6.5" fill="#EB001B" fillOpacity="0.9"/>
              <circle cx="23" cy="12" r="6.5" fill="#F79E1B" fillOpacity="0.9"/>
            </svg>
            {/* Amex */}
            <svg viewBox="0 0 38 24" className="w-9 h-6" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="24" rx="3" fill="#007BC1" />
              <text x="50%" y="55%" fill="#fff" fontSize="9" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">AMEX</text>
            </svg>
            {/* Apple Pay */}
            <svg viewBox="0 0 38 24" className="w-9 h-6" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="24" rx="3" fill="#000" stroke="#444" strokeWidth="1"/>
              <text x="50%" y="55%" fill="#fff" fontSize="9" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">Pay</text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
