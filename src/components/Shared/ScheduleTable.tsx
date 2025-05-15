
interface ScheduleItem {
  time: string;
  location: string;
  activity: string;
  speakers: string;
  responsible: string;
}

interface ScheduleTableProps {
  items: ScheduleItem[];
}

const ScheduleTable = ({ items }: ScheduleTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-event-blue text-white">
            <th className="py-3 px-4 text-left">Horário</th>
            <th className="py-3 px-4 text-left">Local</th>
            <th className="py-3 px-4 text-left">Atividade</th>
            <th className="py-3 px-4 text-left">Palestrante(s)</th>
            <th className="py-3 px-4 text-left">Responsável</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr 
              key={index} 
              className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="py-3 px-4">{item.time}</td>
              <td className="py-3 px-4">{item.location}</td>
              <td className="py-3 px-4">{item.activity}</td>
              <td className="py-3 px-4">{item.speakers}</td>
              <td className="py-3 px-4">{item.responsible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
