// app/lecturas/page.tsx
import ProductGrid from '@/components/ProductGrid';
import { productsData } from '@/data/products';

export const metadata = {
  title: 'Lecturas de Tarot | Irina Tarot Store',
  description: 'Descubre tu destino con nuestras lecturas de tarot en vivo.',
};

export default function LecturasPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1124] pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-gray-100 pb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1124] mb-4">
            Lectura de Tarot
          </h1>
          <p className="text-gray-500 max-w-3xl leading-relaxed">
            Conexión auténtica y transformadora con tus seres queridos desde el otro plano. <br />
            Recibe señales reales de su presencia en una experiencia humana y sanadora.
          </p>
        </div>
        
        <ProductGrid products={productsData} />
      </div>
    </div>
  );
}
