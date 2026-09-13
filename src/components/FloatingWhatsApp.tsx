'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8, type: "spring" }}
    >
      <div className="bg-white border border-gray-200 text-[#1A1124] text-xs px-4 py-2 rounded-t-xl rounded-bl-xl rounded-br-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity font-medium">
        Tem dúvidas? Me chame!
      </div>
      
      <a 
        href="/whatsapp" 
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="text-white w-7 h-7" />
        
        {/* Ping Animation */}
        <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
      </a>
    </motion.div>
  );
}
