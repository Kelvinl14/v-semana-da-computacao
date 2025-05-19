
import { useState, useEffect } from "react";
import { scheduleDay1, scheduleDay2, scheduleDay3, MinicursosData, lecturesData } from "../../data/scheduleData";

interface SelectableEventProps {
  eventType: string;
  onChange: (selectedItems: string[]) => void;
}

const SelectableEventBlocks = ({ eventType, onChange }: SelectableEventProps) => {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  
  const games = [ 
    "Naruto", 
    "Mortal Kombat", 
    "FIFA", 
    "Mario Kart"
  ];
  
  const getEventData = () => {
    switch (eventType) {
      case "Palestra":
        return lecturesData;
      case "Minicurso":
        return MinicursosData;
      case "Torneio de Jogos":
        return games.map(game => ({ title: game }));
      default:
        return [];
    }
  };
  
  const handleToggleEvent = (eventName: string) => {
    setSelectedEvents(prev => {
      if (prev.includes(eventName)) {
        const updated = prev.filter(e => e !== eventName);
        return updated;
      } else {
        const updated = [...prev, eventName];
        return updated;
      }
    });
  };
  
  useEffect(() => {
    onChange(selectedEvents);
  }, [selectedEvents, onChange]);
  
  const events = getEventData();
  
  if (events.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-4 mb-6">
      <h4 className="text-sm font-medium text-gray-700 mb-2">
        Selecione {eventType === "Palestra" ? "as palestras" : eventType === "Minicurso" ? "os minicursos" : "os jogos"} que deseja participar:
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {events.map((event, index) => {
          const title = "title" in event ? event.title : event.activity;
          const time = "time" in event ? `${event.day} ${event.time}` : "";
          const location = "location" in event ? event.location : "";
          
          return (
            <div 
              key={index}
              onClick={() => handleToggleEvent(title)}
              className={`cursor-pointer p-3 rounded-md border transition-colors ${
                selectedEvents.includes(title) 
                  ? "bg-event-lightblue border-event-blue" 
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <p className="font-medium text-sm mb-1 line-clamp-2">{title}</p>
              {time && <p className="text-xs text-gray-500">{time}</p>}
              {location && <p className="text-xs text-gray-500">{location}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectableEventBlocks;
