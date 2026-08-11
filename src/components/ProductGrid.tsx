'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  description?: string;
  soldOut?: boolean;
  href?: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {products.map((product) => (
        <div key={product.id} className="group relative flex flex-col cursor-pointer">
          {/* Image Container */}
          <div className="relative w-full aspect-[3/4] mb-4 bg-gray-100 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            {product.soldOut && (
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#1A1124] text-white text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider">
                  Agotado
                </span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <h3 className="text-[#1A1124] text-sm md:text-base font-medium leading-snug mb-2 group-hover:text-gold-dark transition-colors">
            {product.title}
          </h3>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600 text-sm">
              {product.price}
            </p>
            <p className="text-[#9D8C6D] text-xs font-medium">
              o 10x de €{(parseFloat(product.price.replace(/[^\d.,]/g, '').replace(',', '.')) / 10).toFixed(2)}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}
