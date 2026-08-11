import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/products';

export default function RitualesSection() {
  const rituales = productsData.filter(p => p.id.startsWith('ritual-'));
  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header da Seção */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
            Rituales de Magia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Activa tu energía y transforma tu realidad con rituales diseñados para atraer prosperidad, abrir caminos y potenciar tu sabiduría.
          </p>
        </div>

        {/* Grid de 8 Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rituales.map((ritual) => (
            <article key={ritual.id} className="group flex flex-col">
              <Link href={`/producto/${ritual.id}`} className="block overflow-hidden relative aspect-[3/4] mb-4 bg-gray-50">
                {/* Fallback caso a imagem quebre antes do upload da pasta */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm z-0">
                  [Imagem: {ritual.image}]
                </div>
                <Image
                  src={ritual.image}
                  alt={ritual.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  unoptimized
                />
                {/* Overlay Hover Suave */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-20" />
              </Link>
              
              <div className="flex flex-col flex-grow">
                <Link href={`/producto/${ritual.id}`}>
                  <h3 className="text-lg font-serif text-gray-900 mb-1 group-hover:text-[#C5A059] transition-colors">
                    {ritual.title}
                  </h3>
                </Link>
                <div className="flex flex-col mb-4">
                  <span className="text-gray-600">{ritual.price}</span>
                  <span className="text-[#C5A059] text-sm font-medium mt-1">
                    o 10x de €{(parseFloat(ritual.price.replace(/[^\d.,]/g, '').replace(',', '.')) / 10).toFixed(2)}
                  </span>
                </div>
                
                <Link 
                  href={`/producto/${ritual.id}`} 
                  className="mt-auto w-full py-3 px-4 bg-gray-900 text-white text-sm font-medium text-center hover:bg-[#C5A059] transition-colors duration-300"
                >
                  Ver Detalles
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
