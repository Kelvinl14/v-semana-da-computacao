
import Layout from "../components/Layout/Layout";
import { MinicursosData } from "../data/scheduleData";

const Minicursos = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Minicursos
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MinicursosData.map((minicurso, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-event-lightblue text-event-blue px-3 py-1 rounded-full text-xs font-medium">
                      {minicurso.day} • {minicurso.time}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                      {minicurso.location}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{minicurso.title}</h3>
                  <p className="text-gray-600 mb-6">{minicurso.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center text-gray-600 font-semibold">
                        {minicurso.instructor.split(' ')[0][0]}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{minicurso.instructor}</p>
                        <p className="text-sm text-gray-500">Instrutor</p>
                      </div>
                    </div>
                    
                    <span className="text-event-blue font-medium">Prático</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Minicursos;
