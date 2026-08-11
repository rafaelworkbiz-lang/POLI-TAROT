import { Product } from '@/components/ProductGrid';

export const productsData: Product[] = [

  {
    id: 'ritual-3-preguntas',
    title: '3 Preguntas',
    price: '€12.00 EUR',
    description: 'Resuelve tus dudas más urgentes con 3 preguntas directas. Ideal para respuestas rápidas y precisas.',
    image: '/imagens/tarot_3_preguntas.png',
    href: '/producto/ritual-3-preguntas'
  },
  {
    id: 'ritual-6-preguntas',
    title: 'Rayos X: 6 Preguntas',
    price: '€16.00 EUR',
    description: 'Profundiza en tu situación con 6 preguntas. Una lectura más detallada para entender todos los ángulos.',
    image: '/imagens/tarot_6_preguntas.png',
    href: '/producto/ritual-6-preguntas'
  },
  {
    id: 'ritual-completa',
    title: 'Lectura Completa Sin Límite',
    price: '€36.00 EUR',
    description: 'Amor, Dinero y mucho más. Mapa completo ya incluido en la entrega (Mapa de los próximos 5 meses). Una guía total para tu camino.',
    image: '/imagens/tarot_lectura_completa.png',
    href: '/producto/ritual-completa'
  },


];

export const getProductById = (id: string) => {
  return productsData.find(product => product.id === id);
};
