import { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "sonner";
// ultima atualização: 17/05/2025 14:00 inicio
import supabase from "../lib/supabaseClient";
import emailjs from "@emailjs/browser"
// ultima atualização: 17/05/2025 14:00 fim 
import SelectableEventBlocks from "../components/Registration/SelectableEventBlocks";


// ultima atualização: 17/05/2025 14:00 inicio
// Definindo os dados iniciais do formulário
const initialFormData = {
  nome: "",
  email: "",
  celular: "",
  participacao: [] as string[],
  selectedEvents: [] as string[]
};

// Função para Mascara de e-mail
const maskEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(value)) {
    e.target.setCustomValidity("Por favor, insira um e-mail válido.");
  } else {
    e.target.setCustomValidity("");
  }
}

// Funçao para Mascara de celular
const maskPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/\D/g, "");
  if (value.length > 10) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
  } else if (value.length > 6) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
  } else if (value.length > 2) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}`;
  } else {
    e.target.value = value;
  }
};

// formatar Eventos por tipo
const formatarEventosPorTipo = (eventos: string[]) => {
  const grupos: { [key: string]: string[] } = {};

  eventos.forEach(evento => {
    const [tipo, nome] = evento.split(":");
    if (!grupos[tipo]) grupos[tipo] = [];
    grupos[tipo].push(nome);
  });

  const emojiPorTipo: { [key: string]: string } = {
    Palestra: "📢",
    Minicurso: "📚",
    "Torneio de Jogos": "🎮"
  };

  return Object.entries(grupos)
    .map(([tipo, nomes]) => {
      const emoji = emojiPorTipo[tipo] || "";
      return `${emoji} ${tipo}:\n- ${nomes.join("\n- ")}`;
    })
    .join("\n\n");
};

//Função para enviar e-mail de confirmação
const enviarEmailConfirmacao = async (formData: typeof initialFormData) => {
  const eventosFormatados = formatarEventosPorTipo(formData.selectedEvents);
  try {
    await emailjs.send('service_mj0ktrd', 'template_5axlnym', {
      nome: formData.nome,
      email: formData.email,
      celular: formData.celular,
      participacoes: formData.participacao.join(", "),
      eventos: eventosFormatados,
    }, 'cMS2_3dOhHpHGWyGT');
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
};
// ultima atualização: 17/05/2025 14:00 fim
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

  // ultima atualização: 17/05/2025 15:00 inicio
  // Função para lidar com a seleção de eventos
  const handleEventSelection = useCallback((eventType: string, selectedItems: string[]) => {
  setFormData(prev => ({
    ...prev,
    selectedEvents: [
      ...prev.selectedEvents.filter(event => {
        const eventTypePrefix = event.split(":")[0];
        return eventTypePrefix !== eventType;
      }),
      ...selectedItems.map(item => `${eventType}:${item}`)
    ]
  }));
}, []);
  // ultima atualização: 17/05/2025 15:00 fim


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasRequiredFields = formData.nome && formData.email && formData.celular && formData.participacao.length > 0;
    const hasSelectedEvents = formData.selectedEvents.length > 0;

    if (hasRequiredFields && hasSelectedEvents) {
      // ultima atualização: 17/05/2025 14:00 inicio
      // Save to Supabase
      const { error } = await supabase.from("inscricoes").insert([
        {
          nome: formData.nome,
          email: formData.email,
          celular: formData.celular,
          participacao: formData.participacao,
          eventos: formData.selectedEvents,
        },
      ]);
      if (error) {
        toast.error("Erro ao realizar inscrição. Tente novamente mais tarde.", {
          duration: 4000,
          description: "Houve um erro ao processar sua inscrição. Por favor, tente novamente mais tarde.",
          action: {
            label: "Fechar",
            onClick: () => toast.dismiss()
          }
        });
        return;
      }
      // Enviar e-mail de confirmação
      await enviarEmailConfirmacao(formData);
      // ultima atualização: 17/05/2025 14:00 fim
      // Exibir mensagem de sucesso
      toast.success("Inscrição realizada com sucesso!", {
        duration: 4000,
        description: "Você receberá um e-mail de confirmação em breve.",
        action: {
          label: "Fechar",
          onClick: () => toast.dismiss()
        }
      });
      // Reset form
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

  // ultima atualização: 17/05/2025 15:00 inicio
  // Funções para lidar com a seleção de eventos
  const handlePalestraChange = useCallback((selected: string[]) => {
    handleEventSelection("Palestra", selected);
  }, [handleEventSelection]);

  const handleMinicursoChange = useCallback((selected: string[]) => {
    handleEventSelection("Minicurso", selected);
  }, [handleEventSelection]);

  const handleTorneioChange = useCallback((selected: string[]) => {
    handleEventSelection("Torneio de Jogos", selected);
  }, [handleEventSelection]);
  // ultima atualização: 17/05/2025 15:00 fim

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
                  onInput={maskEmail}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                  radioGroup="celular"
                  maxLength={15}
                  minLength={15}
                  onInput={maskPhone}
                  pattern="\(\d{2}\) \d{5}-\d{4}"
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
                  onChange={handlePalestraChange}
                />
              )}

              {showEventsFor.includes("Minicurso") && (
                <SelectableEventBlocks
                  eventType="Minicurso"
                  onChange={handleMinicursoChange}
                />
              )}

              {showEventsFor.includes("Torneio de Jogos") && (
                <SelectableEventBlocks
                  eventType="Torneio de Jogos"
                  onChange={handleTorneioChange}
                />
              )}

              <div>
                <button
                  type="submit"
                  // Depois de enviar o formulário, desabilita o botão

                  // Envia o formulário apenas uma vez
                  disabled={
                    formData.nome === "" ||
                    formData.email === "" ||
                    formData.celular === "" ||
                    formData.participacao.length === 0 ||
                    formData.selectedEvents.length === 0
                  }
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