
import Layout from "../components/Layout/Layout";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad, Keyboard, Joystick, MousePointerClick } from "lucide-react";

const TorneioJogos = () => {
  const games = [
    {
      name: "Brawl Stars",
      color: "bg-green-500",
      format: "8 times de 3 jogadores",
      slots: 24,
      style: "Mata-Mata 3v3",
      image: "https://placehold.co/300x200/22272e/39ff14?text=Brawl+Stars",
      duration: "2 minutos por partida",
      notes: "Mapas sorteados previamente",
      icon: <Gamepad className="w-6 h-6" />
    },
    {
      name: "Naruto",
      color: "bg-orange-500",
      format: "Duelo 1x1",
      slots: 32,
      style: "Versus",
      image: "https://placehold.co/300x200/22272e/FF8C00?text=Naruto",
      duration: "99s por round",
      notes: "Todos os personagens liberados",
      icon: <Joystick className="w-6 h-6" />
    },
    {
      name: "Mortal Kombat",
      color: "bg-red-600",
      format: "Duelo 1x1",
      slots: 32,
      style: "Eliminação",
      image: "https://placehold.co/300x200/22272e/FF0000?text=Mortal+Kombat",
      duration: "90 segundos por round",
      notes: "Vida cheia, melhor de 3",
      icon: <Joystick className="w-6 h-6" />
    },
    {
      name: "Counter-Strike 1.6",
      color: "bg-blue-500",
      format: "6 times de 4 jogadores",
      slots: 24,
      style: "Combate por rodadas",
      image: "https://placehold.co/300x200/22272e/1E90FF?text=CS+1.6",
      duration: "1:45 por round",
      notes: "de_dust2 e outros mapas clássicos",
      icon: <MousePointerClick className="w-6 h-6" />
    },
    {
      name: "FIFA",
      color: "bg-yellow-500",
      format: "Partidas 1x1",
      slots: 16,
      style: "Futebol Virtual",
      image: "https://placehold.co/300x200/22272e/FFD700?text=FIFA",
      duration: "6 minutos por partida",
      notes: "Dificuldade: Profissional",
      icon: <Gamepad className="w-6 h-6" />
    },
    {
      name: "Mario Kart",
      color: "bg-purple-500",
      format: "Corridas individuais",
      slots: 16,
      style: "Corrida",
      image: "https://placehold.co/300x200/22272e/9370DB?text=Mario+Kart",
      duration: "3 voltas",
      notes: "Todos os itens ativos, personagens livres",
      icon: <Gamepad className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <div className="gamer-bg min-h-screen text-white pb-16" id="torneio-de-jogos">
        <div className="container mx-auto px-4">
          {/* Gif centralizado */}
          <div className="flex justify-center pt-8 pb-4">
            <div className="pixel-border">
              <img src="https://placehold.co/300x200/22272e/39ff14?text=Gaming+GIF" alt="Gaming animation" className="w-full h-auto" />
            </div>
          </div>
          
          {/* Header section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gamer-text glow-text">Torneio de Jogos</h1>
            <h2 className="text-xl md:text-2xl mb-6 text-neon-blue">Semana da Computação</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Participe do torneio de jogos que acontecerá durante a Semana da Computação! 
              Traga seus amigos e desafie seus limites em partidas emocionantes.
            </p>
          </div>

          {/* Datas e horários */}
          <div className="neon-card mb-12">
            <div className="flex items-center mb-4">
              <Keyboard className="mr-2 text-neon-green" />
              <h2 className="text-2xl font-bold">Datas e Horários</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/50 p-4 rounded-lg border border-neon-blue">
                <h3 className="text-neon-blue mb-2">Fase de Grupos</h3>
                <p>15/09/2025 - 14:00 às 18:00</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-neon-orange">
                <h3 className="text-neon-orange mb-2">Semifinais</h3>
                <p>16/09/2025 - 14:00 às 17:00</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-neon-green">
                <h3 className="text-neon-green mb-2">Finais</h3>
                <p>17/09/2025 - 15:00 às 18:00</p>
              </div>
            </div>
          </div>
          
          {/* Games section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Gamepad className="mr-2 text-neon-green" />
              <h2 className="text-2xl font-bold">Modalidades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <div key={index} className="game-card">
                  <div className={`game-card-header ${game.color}`}>
                    <h3 className="text-xl font-bold flex items-center">
                      {game.icon}
                      <span className="ml-2">{game.name}</span>
                    </h3>
                  </div>
                  <div className="game-card-body">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img 
                        src={game.image} 
                        alt={game.name} 
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Formato:</span>
                        <span>{game.format}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Vagas:</span>
                        <Badge variant="outline" className="border-neon-green text-neon-green">
                          {game.slots} jogadores
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Estilo:</span>
                        <span>{game.style}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Duração:</span>
                        <span>{game.duration}</span>
                      </div>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="ghost" className="w-full text-neon-blue border border-neon-blue hover:bg-blue-950 mt-2">
                            Ver regras
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-black border border-neon-blue">
                          <div className="space-y-2">
                            <h4 className="font-bold text-neon-blue">Regras: {game.name}</h4>
                            <p>{game.notes}</p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Inscrição e Regras */}
          <div className="neon-card mb-12">
            <div className="flex items-center mb-4">
              <Joystick className="mr-2 text-neon-orange" />
              <h2 className="text-2xl font-bold">Inscrição e Regras</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Inscrição por formulário online disponível no site ou QR Code.</li>
              <li>Cada equipe deve indicar um capitão responsável.</li>
              <li>Participantes devem chegar com 15 minutos de antecedência.</li>
              <li>Atrasos acima de 10 minutos resultam em WO.</li>
            </ul>
            
            <div className="flex justify-center mt-6">
              <a 
                href="#download-regulamento" 
                className="neon-button flex items-center justify-center space-x-2"
              >
                <span>📄 Baixar Regulamento Oficial</span>
              </a>
            </div>
          </div>
          
          {/* Gif mascote no rodapé */}
          <div className="flex justify-center mt-12">
            <div className="pixel-border">
              <img src="https://placehold.co/200x100/22272e/9370DB?text=Pixel+Mascot" alt="Pixel Mascot" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TorneioJogos;
