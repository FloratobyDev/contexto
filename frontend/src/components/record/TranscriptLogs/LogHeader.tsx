import Subtitle from "../../typography/Subtitle";
import Tabs from "../../Tabs";

type LogHeaderProps = {
  onTabChange: (value: string) => void;
  selectedTab: string;
  tabs: string[];
};

const LogHeader = ({ onTabChange, selectedTab, tabs }: LogHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4 shrink-0">
      <Subtitle>Transcript Logs</Subtitle>
      <Tabs tabs={tabs} activeTab={selectedTab} onTabChange={onTabChange} />
    </div>
  );
};

export default LogHeader;
