"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.inicio'), href: '/' },
    { name: t('nav.consultas'), href: '/whatsapp' },
    { name: t('nav.buzios'), href: '/whatsapp' },
    { name: t('nav.contato'), href: '/whatsapp' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative flex items-center h-16">
              <span className="font-serif text-2xl font-bold text-[#1A1124] tracking-wider">
                Poli <span className="text-[#9D8C6D] font-light italic">Sobral</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#9D8C6D] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="relative border-l border-gray-200 pl-6 flex items-center">
               <Link href="/whatsapp" className="bg-[#1A1124] hover:bg-black text-white px-6 py-2 rounded-sm font-medium transition-colors text-sm uppercase tracking-widest">
                  Agendar Consulta
               </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#9D8C6D] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#9D8C6D] rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

