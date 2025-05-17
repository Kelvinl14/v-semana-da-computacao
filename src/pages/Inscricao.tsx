import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "sonner";
import SelectableEventBlocks from "../components/Registration/SelectableEventBlocks";

const Inscricao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    participacao: [] as string[],
    selectedEvents: [] as string[]
  });
  
  const [showEventsFor, setShowEventsFor] = useState<string[]>([]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return { ...prev, participacao: [...prev.participacao, value] };
      } else {
        return { 
          ...prev, 
          participacao: prev.participacao.filter(item => item !== value),
        };
      }
    });
    
    // Update which event blocks to show
    setShowEventsFor(prev => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(item => item !== value);
      }
    });
  };
  
  const handleEventSelection = (eventType: string, selectedItems: string[]) => {
    setFormData(prev => ({
      ...prev,
      selectedEvents: [
        ...prev.selectedEvents.filter(event => {
          // Keep events from other categories
          const eventTypePrefix = event.split(":")[0];
          return eventTypePrefix !== eventType;
        }),
        ...selectedItems.map(item => `${eventType}:${item}`)
      ]
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const hasRequiredFields = formData.nome && formData.email && formData.celular && formData.participacao.length > 0;
    const hasSelectedEvents = formData.selectedEvents.length > 0;
    
    if (hasRequiredFields && hasSelectedEvents) {
      toast.success("Inscrição realizada com sucesso!", {
        duration: 4000,
        description: "Você receberá um e-mail de confirmação em breve.",
        action: {
          label: "Fechar",
          onClick: () => toast.dismiss()
        }
      });
      setFormData({
        nome: "",
        email: "",
        celular: "",
        participacao: [],
        selectedEvents: []
      });
      setShowEventsFor([]);
    } else {
      toast.error("Por favor, preencha todos os campos obrigatórios e selecione pelo menos um evento", {
        duration: 4000,
        description: "Certifique-se de que todos os campos obrigatórios estão preenchidos e que você selecionou pelo menos um evento.",
        action: {
          label: "Fechar",
          onClick: () => toast.dismiss()
        }
        });
    }
  };
  
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Inscrição para a Semana da Computação
          </h1>
          
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block mb-2 text-gray-700 font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-event-blue focus:border-transparent"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-event-blue focus:border-transparent"
                  placeholder="exemplo@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="celular" className="block mb-2 text-gray-700 font-medium">
                  Celular
                </label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-event-blue focus:border-transparent"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              
              <div>
                <p className="block mb-3 text-gray-700 font-medium">
                  Escolha sua participação:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="palestra"
                      name="participacao"
                      value="Palestra"
                      checked={formData.participacao.includes("Palestra")}
                      onChange={handleCheckboxChange}
                      className="h-5 w-5 text-event-blue"
                    />
                    <label htmlFor="palestra" className="ml-2">
                      Palestra
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="minicurso"
                      name="participacao"
                      value="Minicurso"
                      checked={formData.participacao.includes("Minicurso")}
                      onChange={handleCheckboxChange}
                      className="h-5 w-5 text-event-blue"
                    />
                    <label htmlFor="minicurso" className="ml-2">
                      Minicurso
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="torneio"
                      name="participacao"
                      value="Torneio de Jogos"
                      checked={formData.participacao.includes("Torneio de Jogos")}
                      onChange={handleCheckboxChange}
                      className="h-5 w-5 text-event-blue"
                    />
                    <label htmlFor="torneio" className="ml-2">
                      Torneio de Jogos
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Selectable event blocks */}
              {showEventsFor.includes("Palestra") && (
                <SelectableEventBlocks 
                  eventType="Palestra" 
                  onChange={(selected) => handleEventSelection("Palestra", selected)}
                />
              )}
              
              {showEventsFor.includes("Minicurso") && (
                <SelectableEventBlocks 
                  eventType="Minicurso" 
                  onChange={(selected) => handleEventSelection("Minicurso", selected)}
                />
              )}
              
              {showEventsFor.includes("Torneio de Jogos") && (
                <SelectableEventBlocks 
                  eventType="Torneio de Jogos" 
                  onChange={(selected) => handleEventSelection("Torneio de Jogos", selected)}
                />
              )}
              
              <div>
                <button
                  type="submit"
                  className="bg-event-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors w-full font-medium"
                >
                  Enviar inscrição
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inscricao;
