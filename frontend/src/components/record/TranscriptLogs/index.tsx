import React, { useMemo, useState } from "react";
import LogHeader from "./LogHeader";
import LogList from "./LogList";

const TranscriptLogs: React.FC = () => {
  const logs = [
    {
      timestamp: "October 23, 2024 • 2:30pm",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      timestamp: "October 23, 2024 • 2:20pm",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
    },
    {
      timestamp: "October 23, 2024 • 2:10pm",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      timestamp: "October 23, 2024 • 2:00pm",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      timestamp: "October 23, 2024 • 1:50pm",
      content:
        "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
    },
    {
      timestamp: "October 23, 2024 • 1:40pm",
      content:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
    {
      timestamp: "October 23, 2024 • 1:30pm",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    },
    {
      timestamp: "October 23, 2024 • 1:20pm",
      content:
        "Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    },
    {
      timestamp: "October 23, 2024 • 1:10pm",
      content:
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.",
    },
    {
      timestamp: "October 23, 2024 • 1:00pm",
      content:
        "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const [tab, setTab] = useState("All");
  const tabs = useMemo(() => {
    return ["10min", "15min", "30min"];
  }, []);

  const onTabChange = (value: string) => {
    setTab(value);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <LogHeader tabs={tabs} onTabChange={onTabChange} selectedTab={tab} />
      <LogList logs={logs} />
    </div>
  );
};

export default TranscriptLogs;
