// app/rituales/page.tsx
import ProductGrid from '@/components/ProductGrid';
import { productsData } from '@/data/products';

export const metadata = {
  title: 'Rituales | Irina Tarot Store',
  description: 'Conoce nuestros rituales mágicos y transforma tus energías.',
};

export default function RitualesPage() {
  const ritualesData = productsData.filter(product => product.id.startsWith('ritual-'));

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-snug mb-6 text-gray-900">
          Rituales Místicos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          {/* Espaço reservado para você inserir o conteúdo da sua pasta de /referencias */}
          Descubre prácticas ancestrales para atraer la abundancia, amor y protección.
        </p>
        
        {/* Grid de produtos/serviços entrará aqui */}
        <ProductGrid products={ritualesData} />
      </div>
    </div>
  );
}
