
import { useState } from "react";

interface ScheduleTabsProps {
  onTabChange: (day: number) => void;
}

const ScheduleTabs = ({ onTabChange }: ScheduleTabsProps) => {
  const [activeTab, setActiveTab] = useState(1);
  
  const handleTabClick = (day: number) => {
    setActiveTab(day);
    onTabChange(day);
  };
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {[1, 2, 3].map((day) => (
        <button
          key={day}
          className={`tab-button ${activeTab === day ? "active" : ""}`}
          onClick={() => handleTabClick(day)}
        >
          Dia {day}
        </button>
      ))}
    </div>
  );
};

export default ScheduleTabs;
