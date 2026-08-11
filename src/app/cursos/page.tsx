// app/cursos/page.tsx
export const metadata = {
  title: 'Cursos | Irina Tarot Store',
  description: 'Despierta tu potencial con nuestros cursos de autoconocimiento y magia.',
};

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-snug mb-6 text-gray-900">
          Cursos de Conciencia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          {/* Espaço reservado para você inserir o conteúdo da sua pasta de /referencias */}
          Aprende técnicas poderosas para conectarte con el universo y elevar tu nivel espiritual.
        </p>
        
        {/* Grid de produtos/serviços entrará aqui */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="h-64 border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">
             Placeholder Serviço 1
           </div>
        </div>
      </div>
    </div>
  );
}
