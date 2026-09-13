'use client';

import { useEffect, useState } from 'react';

export default function WhatsAppRedirect() {
  const [isTikTok, setIsTikTok] = useState(false);
  const whatsappUrl = "https://wa.me/5549988491334?text=oi%20poli%20preciso%20da%20sua%20ajuda";

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    // TikTok in-app browser detection
    if (userAgent.includes('bytedance') || userAgent.includes('tiktok')) {
      setIsTikTok(true);
    } else {
      // If not TikTok, try to redirect immediately
      window.location.href = whatsappUrl;
    }
  }, [whatsappUrl]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full border border-gray-100">
        <h1 className="text-2xl font-serif text-[#1A1124] mb-4">
          Redirecionando para o WhatsApp...
        </h1>
        
        {isTikTok ? (
          <div className="mt-6 text-gray-700">
            <p className="mb-4">
              Parece que você está navegando pelo TikTok. Para garantir que o WhatsApp abra corretamente:
            </p>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6 text-left">
              <ol className="list-decimal list-inside space-y-2 font-medium">
                <li>Clique nos <strong>três pontinhos (...)</strong> no canto superior direito</li>
                <li>Selecione <strong>Abrir no navegador</strong> (Chrome, Safari, etc.)</li>
              </ol>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Ou se preferir, tente clicar no botão abaixo:
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-4 rounded-sm font-medium transition-colors duration-300 text-center shadow-sm"
            >
              TENTAR ABRIR WHATSAPP
            </a>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-gray-600 mb-6">
              Se você não for redirecionado automaticamente, clique no botão abaixo:
            </p>
            <a 
              href={whatsappUrl} 
              className="inline-block bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-3 rounded-sm font-medium transition-colors duration-300 shadow-sm"
            >
              Ir para o WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
