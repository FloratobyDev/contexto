import React from "react";
import classNames from "classnames";


interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
  };

  return (
    <nav className="flex">
      {tabs.map((tab) => {
        const buttonClass = classNames("px-4 py-2", {
          "bg-blue-500": tab === activeTab,
          "hover:bg-blue-600": tab !== activeTab,
        });
        return (
          <button
            className={buttonClass}
            key={tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
