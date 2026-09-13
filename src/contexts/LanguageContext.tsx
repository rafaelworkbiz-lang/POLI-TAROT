'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { pt } from '@/i18n/dictionaries/pt';

type Language = 'pt';
type Dictionary = typeof pt;

interface LanguageContextProps {
  language: Language;
  t: (key: string) => string;
}

const dictionaries = {
  pt
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const language: Language = 'pt';
  
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = dictionaries[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        return path;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
