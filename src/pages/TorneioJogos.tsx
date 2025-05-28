import Layout from "../components/Layout/Layout"
import { Badge } from "@/components/ui/badge"
import { Gamepad, Shield, Flag, Info, ClipboardList } from "lucide-react"

const TorneioJogos = () => {
  const games = [
    {
      name: "Brawl Stars",
      format: "8 times de 3 jogadores",
      time: "13:00 - 15:00",
      turno: "tarde",
      location: "Life 1",
      slots: 24,
      style: "Mata-Mata 3v3",
      image: "/assets/img/Brawl_Stars_iOS_ícone.jpg",
      organizer: ["Everson", "Alan"],
      conditions: ["Modo: Mata-Mata (3v3)", "Mapas: Sorteados previamente", "Duração: 2 minutos por partida"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "primary-blue",
    },
    {
      name: "Naruto",
      format: "Duelo 1x1",
      time: "10:00 - 12:00",
      turno: "manha",
      location: "Lab 1",
      slots: 32,
      style: "Versus",
      image: "/assets/img/naruto.webp",
      organizer: ["Guilherme", "Mesquita"],
      conditions: ["Modo: 1v1 (Eliminatórias simples)",
        "Plataforma: PC (com controles fornecidos ou próprios)",
        "Partida: 1 luta (melhor de 2 rounds), quartas de final melhor de 5",
        "Tempo de round: 90 segundos",
        "Stage Select: Aleatório"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "event-purple",
    },
    {
      name: "Mortal Kombat",
      format: "Duelo 1x1",
      time: "14:30 - 16:00",
      turno: "tarde",
      location: "Lab 2",
      slots: 32,
      style: "Eliminação",
      image: "/assets/img/mortal-kombat.jpg",
      organizer: ["Diego", "Kauã Felipe"],
      conditions: ["Modo: Torneio (1v1)", "Vida: 100%", "Duração: 90 segundos por round"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "secondary-blue",
    },
    {
      name: "Counter-Strike 1.6",
      format: "4 times de 6 jogadores",
      time: "14:00 - 16:00",
      turno: "tarde",
      location: "Lab 1",
      slots: 24,
      style: "Combate por rodadas",
      image: "/assets/img/cs-1.6.jpg",
      organizer: ["Ciclano", "Fulano"],
      conditions: ["Mapa: de_dust2", "Rodadas: Eliminação", "Tempo: 1:45 por round"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "accent-blue",
    },
    {
      name: "FIFA",
      format: "Partidas 1x1",
      time: "15:30 - 17:00",
      turno: "tarde",
      location: "Auditório 1",
      slots: 16,
      style: "Futebol Virtual",
      image: "/assets/img/fifa.jpg",
      organizer: ["Ramon", "Italo"],
      conditions: ["Tempo: 6 minutos por partida", "Dificuldade: Normal", "Times: Atualizados"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "primary-blue",
    },
    {
      name: "Mario Kart",
      format: "Corridas individuais",
      time: "08:00 - 10:30",
      turno: "manha",
      location: "Lab 2",
      slots: 16,
      style: "Corrida",
      image: "/assets/img/mario-kart.jpg",
      organizer: ["João Carlos", "Yan"],
      conditions: ["Corridas: 3 voltas", "Itens: Todos ativos", "Personagens: Livre escolha"],
      icon: <Gamepad className="w-6 h-6" />,
      color: "event-purple",
    },
    {
      name: "Just Dance",
      format: "Dança individual ",
      time: "09:00 - 12:00",
      turno: "manha",
      location: "Biblioteca",
      slots: 12,
      style: "Dança",
      image: "/assets/img/just-dance.jpg",
      organizer: ["Vinicius Yan"],
      conditions: [
        "Modo de Jogo: Todas as partidas serão no modo individual (solo).",
        "Seleção de Músicas: As músicas de cada fase serão definidas pela organização, podendo vir de uma lista prévia ou serem sorteadas, sempre na dificuldade padrão (a não ser que a organização indique outra).",
        "Acessórios: O uso de acessórios ou roupas que atrapalhem o desempenho ou a leitura dos sensores pode ser restringido pela organização.",
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "secondary-blue",
    },
  ]

  const penalties = [
    {
      title: "§1º Hacking/Cheating",
      items: [
        "Uso de softwares não autorizados que modifiquem o jogo",
        "Exploração deliberada de bugs ou falhas do jogo",
        "Uso de macros ou automação de ações",
      ],
    },
    {
      title: "§2º Comportamento inadequado",
      items: [
        "Linguagem ofensiva, discriminatória ou assédio",
        "Provocações excessivas (toxicity)",
        "Sabotagem intencional de partidas",
        "Combinação de resultados (match fixing)",
      ],
    },
    {
      title: "§3º Irregularidades administrativas",
      items: ["Uso de contas compartilhadas", "Desrespeito às decisões da organização"],
    },
  ]

  const penaltyLevels = [
    "I. Advertência verbal",
    "II. Perda de vantagem competitiva",
    "III. Desclassificação da partida",
    "IV. Eliminação do torneio",
  ]

  const getGameColors = (color: string) => {
    switch (color) {
      case "primary-blue":
        return { bg: "#4169E1", border: "#4169E1" } // event-blue
      case "event-purple":
        return { bg: "#8052EC", border: "#8052EC" } // event-purple
      case "secondary-blue":
        return { bg: "#5B9BD5", border: "#5B9BD5" } // Azul médio
      case "accent-blue":
        return { bg: "#87CEEB", border: "#87CEEB" } // Azul claro
      default:
        return { bg: "#4169E1", border: "#4169E1" }
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-800 pb-16" id="torneio-de-jogos">
        <div className="container mx-auto px-4">
          {/* Gif centralizado */}
          <div className="flex justify-center pt-12 pb-8">
            <img src="/assets/gif/gaming.gif" width={250} alt="Gaming animation" className="rounded-lg shadow-sm" />
          </div>

          {/* Header section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Torneio de Jogos</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-[#2e3a59]">Semana da Computação</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Participe do torneio de jogos que acontecerá durante a Semana da Computação! Traga seus amigos e desafie
              seus limites em partidas emocionantes.
            </p>
          </div>

          {/* Datas e horários */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-16">
            <div className="flex items-center mb-6">
              <Flag className="mr-3 text-[#4169E1]" />
              <h2 className="text-2xl font-bold">Datas e Horários</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-[#4169E1] font-semibold mb-2">Data</h3>
                <p className="text-gray-700">14/06/2025</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-[#4169E1] font-semibold mb-2">Pela Manhã</h3>
                <p className="text-gray-700">Das 08:00 às 12:00</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-[#4169E1] font-semibold mb-2">Pela Tarde</h3>
                <p className="text-gray-700">Das 13:00 às 17:00</p>
              </div>
            </div>
          </div>

          {/* Resposaveis Pelo Evento */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-16">
            <div className="flex items-center mb-6">
              <ClipboardList className="mr-3 text-[#4169E1]" />
              <h2 className="text-2xl font-bold">Organizadores do Evento</h2>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Coordenação Geral: </h2>
              <h3 className="text-2xl mb-4">Mesquita e Berg</h3>

              <h2 className="text-2xl font-bold">Comissão Técnica: </h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Everson</li>
                <li>Alan</li>
                <li>Guilherme</li>
                <li>Mesquita</li>
                <li>Diego</li>
                <li>Kauã Felipe</li>
                <li>Ciclano</li>
                <li>Fulano</li>
                <li>Ramon</li>
                <li>Italo</li>
                <li>João Carlos</li>
                <li>Yan</li>
              </ul>
            </div>
          </div>

          {/* Games section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Gamepad className="mr-3 text-[#4169E1]" />
              <h2 className="text-2xl font-bold text-gray-900">Modalidades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] flex flex-col"
                  style={{ borderColor: getGameColors(game.color).border }}
                >
                  <div
                    className="p-4 border-b border-gray-700 flex items-center"
                    style={{ backgroundColor: getGameColors(game.color).bg, color: "#ffffff" }}
                  >
                    <span>{game.icon}</span>
                    <h3 className="ml-2 text-xl font-semibold">{game.name}</h3>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full object-cover" />

                    <div className="flex flex-col flex-grow p-5">
                      <div className="flex-grow space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-600">Formato:</span>
                          <span className="text-gray-800">{game.format}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-600">Organizadores:</span>
                          <span className="text-gray-800">{game.organizer.join(", ")}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-600">Horário:</span>
                          <span className="text-gray-800">{game.time}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-600">Local:</span>
                          <span className="text-gray-800">{game.location}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-600">Vagas:</span>
                          <Badge
                            variant="outline"
                            style={{
                              color: getGameColors(game.color).bg,
                              borderColor: getGameColors(game.color).border,
                            }}
                          >
                            {game.slots} jogadores
                          </Badge>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-600 mb-2">Condições:</h4>
                          <ul className="text-gray-800 space-y-1 text-sm">
                            {game.conditions.map((condition, i) => (
                              <li key={i}>{condition}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-center mt-auto pt-6">
                        <a
                          href={`/assets/docs/Regras-Campeonato-${game.name.toLowerCase().replace(/ /g, "-")}.pdf`}
                          download
                          className="px-6 py-3 bg-[#4169E1] text-white rounded-md shadow-sm hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                        >
                          <span>Baixar Regulamento {game.name}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Regras e Penalidades */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-16">
            <div className="flex items-center mb-6">
              <Shield className="mr-3 text-[#4169E1]" />
              <h2 className="text-2xl font-bold">Regras e Penalidades</h2>
            </div>
            <p className="mb-6 text-gray-700">
              Nenhuma forma de trapaça, vantagem indevida ou comportamento antidesportivo será tolerada durante o
              evento. Considera-se conduta antidesportiva, sem limitação:
            </p>

            <div className="space-y-6 mb-8">
              {penalties.map((section, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-md shadow-sm border border-gray-200">
                  <h3 className="font-semibold mb-3 text-[#4169E1]">{section.title}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-5 rounded-md shadow-sm border border-gray-200">
              <h3 className="font-semibold mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2 text-[#4169E1]" />
                <span>As penalidades serão aplicadas conforme a gravidade da infração:</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                {penaltyLevels.map((level, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {level}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="/assets/docs/regulamento_oficial.pdf"
                download
                className="px-6 py-3 bg-[#4169E1] text-white rounded-md shadow-sm hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>📄 Baixar Regulamento Oficial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TorneioJogos
