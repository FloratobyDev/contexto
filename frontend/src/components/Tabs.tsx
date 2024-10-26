import React from "react";
import { LogTypes } from "../consts";
import Button from "./Button";

interface TabsProps {
  tabs: LogTypes[];
  activeTab: string;
  onTabChange: (tab: LogTypes) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const handleTabClick = (tab: LogTypes) => {
    onTabChange(tab);
  };

  return (
    <nav className="flex">
      {tabs.map((tab) => {
        return (
          <Button
            key={tab}
            variant={tab === activeTab ? "primary" : "link"}
            onClick={() => {
              handleTabClick(tab);
            }}
          >
            {tab}
          </Button>
        );
      })}
    </nav>
  );
};

export default Tabs;
