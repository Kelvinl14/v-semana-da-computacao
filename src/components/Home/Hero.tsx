
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="inline-block bg-event-lightblue text-event-blue px-4 py-1 rounded-full text-sm font-medium">
            12 a 14 de Junho - IFMA campus Caxias
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">V Semana de Ciência</span>
          <br />
          <span className="text-gray-900">da Computação</span>
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 px-4">
          Junte-se a especialistas e entusiastas para uma semana de
          descobertas, aprendizados e networking no maior evento de
          computação de IFMA campus Caxias.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/inscricao"
            className="bg-event-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors font-medium text-lg"
          >
            Inscreva-se Agora
          </Link>
          <Link
            to="/programacao"
            className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md transition-colors border font-medium text-lg"
          >
            Ver Programação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
