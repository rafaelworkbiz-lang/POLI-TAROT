import Image from 'next/image';
import Link from 'next/link';
import { getProductById, productsData } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductActions from '@/components/ProductActions';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Related products (exclude current one, get up to 3)
  const relatedProducts = productsData.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Seção Principal do Produto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Imagem do Produto */}
          <div className="relative aspect-square bg-gray-100 rounded-sm overflow-hidden">
            <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" unoptimized />
          </div>

          {/* Detalhes e Compra */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-snug text-[#1A1124]">
              {product.title}
            </h1>
            <div className="mb-6">
              <p className="text-2xl text-[#9D8C6D] font-medium">
                {product.price}
              </p>
              <p className="text-gray-500 font-medium text-lg mt-1">
                o 10x de €{(parseFloat(product.price.replace(/[^\d.,]/g, '').replace(',', '.')) / 10).toFixed(2)}
              </p>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              {product.description || 'Una experiencia transformadora y exclusiva diseñada para brindarte claridad, sanación y conexión. Reserva ahora tu lugar.'}
            </p>
            
            {/* Ações de Compra */}
            <ProductActions product={product} />
          </div>
        </div>

        {/* Seção de Produtos Relacionados */}
        <section className="border-t border-gray-100 pt-16">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center text-[#1A1124]">
            También te podría interesar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/producto/${item.id}`} className="group">
                <div className="aspect-[3/4] bg-gray-100 rounded-sm mb-4 overflow-hidden relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1A1124] group-hover:text-[#9D8C6D] transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <div className="flex flex-col">
                  <p className="text-gray-600 font-light">
                    {item.price}
                  </p>
                  <p className="text-[#9D8C6D] text-sm font-medium mt-1">
                    o 10x de €{(parseFloat(item.price.replace(/[^\d.,]/g, '').replace(',', '.')) / 10).toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
