
import Layout from "../components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad, Shield, Flag, Info } from "lucide-react";

const TorneioJogos = () => {
  const games = [
    {
      name: "Brawl Stars",
      format: "8 times de 3 jogadores",
      slots: 24,
      style: "Mata-Mata 3v3",
      image: "src/assets/img/Brawl_Stars_iOS_ícone.jpg",
      conditions: [
        "Modo: Mata-Mata (3v3)",
        "Mapas: Sorteados previamente",
        "Duração: 2 minutos por partida"
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "neon-yellow"
    },
    {
      name: "Naruto",
      format: "Duelo 1x1",
      slots: 32,
      style: "Versus",
      image: "src/assets/img/naruto.webp",
      conditions: [
        "Modo: Versus (1v1)",
        "Personagens: Todos liberados",
        "Duração: 99 segundos por round"
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "neon-purple"
    },
    {
      name: "Mortal Kombat",
      format: "Duelo 1x1",
      slots: 32,
      style: "Eliminação",
      image: "src/assets/img/mortal-kombat.jpg",
      conditions: [
        "Modo: Torneio (1v1)",
        "Vida: 100%",
        "Duração: 90 segundos por round"
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "neon-red"
    },
    {
      name: "Counter-Strike 1.6",
      format: "4 times de 6 jogadores",
      slots: 24,
      style: "Combate por rodadas",
      image: "src/assets/img/cs-1.6.jpg",
      conditions: [
        "Mapa: de_dust2",
        "Rodadas: Eliminação",
        "Tempo: 1:45 por round"
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "neon-orange"
    },
    {
      name: "FIFA",
      format: "Partidas 1x1",
      slots: 16,
      style: "Futebol Virtual",
      image: "src/assets/img/fifa.jpg",
      conditions: [
        "Tempo: 6 minutos por partida",
        "Dificuldade: Profissional",
        "Times: Atualizados"
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "neon-blue"
    },
    {
      name: "Mario Kart",
      format: "Corridas individuais",
      slots: 16,
      style: "Corrida",
      image: "src/assets/img/mario-kart.jpg",
      conditions: [
        "Corridas: 3 voltas",
        "Itens: Todos ativos",
        "Personagens: Livre escolha"
      ],
      icon: <Gamepad className="w-6 h-6" />,
      color: "neon-pink"
    }
  ];

  const penalties = [
    {
      title: "§1º Hacking/Cheating",
      items: [
        "Uso de softwares não autorizados que modifiquem o jogo",
        "Exploração deliberada de bugs ou falhas do jogo",
        "Uso de macros ou automação de ações"
      ]
    },
    {
      title: "§2º Comportamento inadequado",
      items: [
        "Linguagem ofensiva, discriminatória ou assédio",
        "Provocações excessivas (toxicity)",
        "Sabotagem intencional de partidas",
        "Combinação de resultados (match fixing)"
      ]
    },
    {
      title: "§3º Irregularidades administrativas",
      items: [
        "Uso de contas compartilhadas",
        "Desrespeito às decisões da organização"
      ]
    }
  ];

  const penaltyLevels = [
    "I. Advertência verbal",
    "II. Perda de vantagem competitiva",
    "III. Desclassificação da partida",
    "IV. Eliminação do torneio"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-800 pb-16" id="torneio-de-jogos">
        <div className="container mx-auto px-4">
          {/* Gif centralizado */}
          <div className="flex justify-center pt-12 pb-8">
            <img 
              src="src/assets/gif/gaming.gif" 
              width={250}
              alt="Gaming animation" 
              className="rounded-lg shadow-sm"
            />
          </div>
          
          {/* Header section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Torneio de Jogos</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-[#2e3a59]">Semana da Computação</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Participe do torneio de jogos que acontecerá durante a Semana da Computação! 
              Traga seus amigos e desafie seus limites em partidas emocionantes.
            </p>
          </div>

          {/* Datas e horários */}
          <div className="bg-[#1A1F2C] text-white rounded-lg p-8 shadow-sm mb-16">
            <div className="flex items-center mb-6">
              <Flag className="mr-3 text-[#5ea8ff]" />
              <h2 className="text-2xl font-bold">Datas e Horários</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#222732] p-5 rounded-md shadow-sm border border-gray-700">
                <h3 className="text-[#5ea8ff] font-semibold mb-2">Fase de Grupos</h3>
                <p className="text-gray-300">15/09/2025 - 14:00 às 18:00</p>
              </div>
              <div className="bg-[#222732] p-5 rounded-md shadow-sm border border-gray-700">
                <h3 className="text-[#5ea8ff] font-semibold mb-2">Semifinais</h3>
                <p className="text-gray-300">16/09/2025 - 14:00 às 17:00</p>
              </div>
              <div className="bg-[#222732] p-5 rounded-md shadow-sm border border-gray-700">
                <h3 className="text-[#5ea8ff] font-semibold mb-2">Finais</h3>
                <p className="text-gray-300">17/09/2025 - 15:00 às 18:00</p>
              </div>
            </div>
          </div>
          
          {/* Games section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Gamepad className="mr-3 text-[#2e3a59]" />
              <h2 className="text-2xl font-bold text-gray-900">Modalidades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <div 
                  key={index} 
                  className="bg-[#1A1F2C] rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
                  style={{borderColor: game.color === 'neon-green' ? '#66ff66' : 
                                      game.color === 'neon-blue' ? '#5ea8ff' : 
                                      game.color === 'neon-purple' ? '#b49fe0' : 
                                      game.color === 'neon-orange' ? '#ffb347' :
                                      game.color === 'neon-red' ? '#FF4500' :
                                      game.color === 'neon-yellow' ? '#FFD700' : '#ff66aa'}}
                >
                  <div className="p-4 border-b border-gray-700 flex items-center" 
                       style={{backgroundColor: game.color === 'neon-green' ? '#66ff66' : 
                                              game.color === 'neon-blue' ? '#5ea8ff' : 
                                              game.color === 'neon-purple' ? '#b49fe0' : 
                                              game.color === 'neon-orange' ? '#ffb347' : 
                                              game.color === 'neon-red' ? '#FF4500' :
                                              game.color === 'neon-yellow' ? '#FFD700' :  '#ff66aa',
                              color: '#1A1F2C'}}>
                    <span>
                      {game.icon}
                    </span>
                    <h3 className="ml-2 text-xl font-semibold">{game.name}</h3>
                  </div>
                  <div className="p-0">
                    <div className="w-full">
                      <img 
                        src={game.image} 
                        alt={game.name} 
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 p-5 text-white">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-300">Formato:</span>
                        <span className="text-gray-100">{game.format}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-300">Vagas:</span>
                        <Badge variant="outline" style={{
                          color: game.color === 'neon-green' ? '#66ff66' : 
                                 game.color === 'neon-blue' ? '#5ea8ff' : 
                                 game.color === 'neon-purple' ? '#b49fe0' : 
                                 game.color === 'neon-orange' ? '#ffb347' : 
                                 game.color === 'neon-red' ? '#FF4500' :
                                 game.color === 'neon-yellow' ? '#FFD700' : '#ff66aa',
                                 
                          borderColor: game.color === 'neon-green' ? '#66ff66' : 
                                      game.color === 'neon-blue' ? '#5ea8ff' : 
                                      game.color === 'neon-purple' ? '#b49fe0' : 
                                      game.color === 'neon-orange' ? '#ffb347' : 
                                      game.color === 'neon-red' ? '#FF4500' :
                                      game.color === 'neon-yellow' ? '#FFD700' : '#ff66aa'
                        }}>
                          {game.slots} jogadores
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-300 mb-2">Condições:</h4>
                        <ul className="text-gray-100 space-y-1 text-sm">
                          {game.conditions.map((condition, i) => (
                            <li key={i}>{condition}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Regras e Penalidades */}
          <div className="bg-[#1A1F2C] text-white rounded-lg p-8 shadow-sm mb-16">
            <div className="flex items-center mb-6">
              <Shield className="mr-3 text-[#5ea8ff]" />
              <h2 className="text-2xl font-bold">Regras e Penalidades</h2>
            </div>
            <p className="mb-6 text-gray-300">
              Nenhuma forma de trapaça, vantagem indevida ou comportamento antidesportivo
              será tolerada durante o evento. Considera-se conduta antidesportiva, sem limitação:
            </p>
            
            <div className="space-y-6 mb-8">
              {penalties.map((section, index) => (
                <div key={index} className="bg-[#222732] p-5 rounded-md shadow-sm border border-gray-700">
                  <h3 className="font-semibold mb-3 text-[#5ea8ff]">{section.title}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-[#222732] p-5 rounded-md shadow-sm border border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center">
                <Info className="w-5 h-5 mr-2 text-[#5ea8ff]" />
                <span>As penalidades serão aplicadas conforme a gravidade da infração:</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
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
                href="src/assets/docs/regulamento_oficial.pdf"
                download 
                className="px-6 py-3 bg-[#5ea8ff] text-white rounded-md shadow-sm hover:bg-[#4d8ad9] transition-colors flex items-center justify-center space-x-2"
              >
                <span>📄 Baixar Regulamento Oficial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TorneioJogos;
