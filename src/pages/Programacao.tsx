
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import ScheduleTabs from "../components/Shared/ScheduleTabs";
import ScheduleTable from "../components/Shared/ScheduleTable";
import { scheduleDay1, scheduleDay2, scheduleDay3 } from "../data/scheduleData";

const Programacao = () => {
  const [currentDay, setCurrentDay] = useState(1);
  
  const getCurrentDayData = () => {
    switch (currentDay) {
      case 1:
        return scheduleDay1;
      case 2:
        return scheduleDay2;
      case 3:
        return scheduleDay3;
      default:
        return scheduleDay1;
    }
  };
  
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Cronograma da Semana da Computação
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ScheduleTabs onTabChange={setCurrentDay} />
            <ScheduleTable items={getCurrentDayData()} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programacao;
