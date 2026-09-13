import Image from 'next/image';
import Link from 'next/link';

export default function RitualesSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 tracking-tight">
            Consultas e Jogos de Búzios
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Descubra o que as energias e os oráculos têm a revelar sobre o seu momento. 
            Através dos Jogos de Búzios, analisamos todas as áreas da sua vida com precisão e verdade. 
            Encontre a direção certa e as respostas que você tanto busca.
          </p>
        </div>

        <div className="w-full max-w-4xl bg-gray-50 rounded-lg p-8 md:p-12 text-center border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-serif text-[#1A1124] mb-4">
            Como funciona a consulta?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A consulta é realizada de forma profunda e conectada, analisando a sua energia e trazendo 
            direcionamentos claros. Não importa qual seja o seu desafio, o oráculo revela a verdade e os melhores caminhos a seguir.
          </p>
          
          <Link 
            href="/whatsapp" 
            className="inline-block bg-[#1A1124] hover:bg-black text-white px-10 py-5 rounded-sm font-medium transition-colors duration-300 text-center uppercase tracking-widest text-sm shadow-md hover:shadow-lg"
          >
            AGENDAR MINHA CONSULTA AGORA
          </Link>
        </div>
      </div>
    </section>
  );
}

