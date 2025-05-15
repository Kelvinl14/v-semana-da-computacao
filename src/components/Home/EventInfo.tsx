
import { Calendar, MapPin, Clock } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
            <div className="bg-event-lightblue p-3 rounded-full">
              <Calendar className="h-6 w-6 text-event-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Data</h3>
              <p className="text-gray-600">12 a 14 de Junho</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
            <div className="bg-event-lightblue p-3 rounded-full">
              <MapPin className="h-6 w-6 text-event-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Local</h3>
              <p className="text-gray-600">IFMA - Campus Caxias</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm flex items-center space-x-4">
            <div className="bg-event-lightblue p-3 rounded-full">
              <Clock className="h-6 w-6 text-event-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Horário</h3>
              <p className="text-gray-600">Das 8:00 às 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
