'use client';

import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { Product } from '@/components/ProductGrid';

export default function ProductActions({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart({ 
      id: product.id, 
      name: product.title, 
      price: product.price, 
      image: product.image, 
      quantity: 1 
    });
    alert('Producto añadido al carrito');
  };

  const handleBuyNow = () => {
    addToCart({ 
      id: product.id, 
      name: product.title, 
      price: product.price, 
      image: product.image, 
      quantity: 1 
    });
    router.push('/checkout');
  };

  return (
    <div className="flex flex-col gap-3 mt-8">
      <button 
        onClick={handleBuyNow}
        className="w-full bg-[#0A0A0C] text-white text-center py-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Comprar ahora
      </button>
      <button 
        onClick={handleAddToCart}
        className="w-full bg-white text-[#0A0A0C] border border-[#0A0A0C] text-center py-4 rounded-md font-medium hover:bg-gray-50 transition-colors"
      >
        Añadir al carrito
      </button>
    </div>
  );
}
