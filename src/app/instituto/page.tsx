// app/instituto/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Instituto | Irina Tarot Store',
  description: 'Conoce el Instituto de Conciencia y nuestra misión de transformación.',
};

export default function InstitutoPage() {
  const sections = [
    {
      title: 'Irina Cuesta',
      subtitle: 'SOBRE MÍ',
      text: 'Con más de 17 años de experiencia en el mundo del tarot y la sanación energética, Irina Cuesta es una terapeuta intuitiva e interventora estratégica certificada desde 2021, cuya metodología única fusiona tarot, numerología emocional y coaching espiritual para ofrecer guía y claridad a sus consultantes.',
      image: '/imagens/irina-perfil.webp',
      imageLeft: true
    },
    {
      title: 'Trayectoria',
      subtitle: 'DESCUBRIMIENTO',
      text: 'Desde muy temprana edad Irina sintió una profunda afinidad por las cartas. A los 16 años descubrió un mazo de tarot familiar y sintió el llamado de ayudar a otros a través de sus mensajes. Con dedicación, formó su camino hasta profesionalizarse como coach estratégica y tarotista, con un enfoque centrado en la sanación emocional y la expansión de conciencia.',
      image: '/imagens/produto-tarot.webp',
      imageLeft: false
    },
    {
      title: 'Dedicación',
      subtitle: 'PASIÓN Y',
      text: 'Realiza lecturas de tarot personalizadas para explorar amor, propósito, bloqueos kármicos y energías familiares. Ofrece sesiones de sanación mental y emocional, combinando herramientas como rituales abre caminos, numerología y uso de cristales y gemas. Imparte formaciones como la Formación Nivel 1 de Tarot, integrando autoconocimiento con técnicas espirituales modernas.',
      image: '/imagens/produto-ritual.webp',
      imageLeft: true
    },
    {
      title: 'Comunidad y Alcance',
      subtitle: 'IMPACTO',
      text: 'Con una comunidad digital fuerte, Irina ha alcanzado millones de seguidores en TikTok e Instagram, compartiendo predicciones, horóscopos y contenido espiritual con un estilo cercano y auténtico. También ha sido ponente en eventos como MAGIC Internacional, hablando sobre numerología y simbología del tarot.',
      image: '/imagens/produto-curso.webp',
      imageLeft: false
    },
    {
      title: 'Mi Misión',
      subtitle: 'TRANSFORMACIÓN',
      text: 'Irina busca empoderar a quienes la consultan, ayudándoles a tomar decisiones conscientes desde un espacio emocionalmente sano. Su objetivo: que sus clientes vivan con mayor claridad, propósito y paz interior.',
      image: '/imagens/irina-perfil.webp',
      imageLeft: true
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1124]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col gap-24 lg:gap-32">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                !section.imageLeft ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Imagem */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm shadow-sm">
                  <Image 
                    src={section.image} 
                    alt={section.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Texto */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-gray-400 text-xs tracking-[0.2em] font-semibold uppercase mb-3">
                  {section.subtitle}
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1124] mb-6">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed font-light text-base lg:text-lg">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
