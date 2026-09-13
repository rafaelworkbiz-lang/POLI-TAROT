'use client';

import { Product } from '@/components/ProductGrid';

export default function ProductActions({ product }: { product: Product }) {



  return (
    <div className="flex flex-col gap-3 mt-8">
      <a 
        href={product.href}
        className="w-full block bg-[#0A0A0C] text-white text-center py-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Comprar ahora
      </a>
    </div>
  );
}
