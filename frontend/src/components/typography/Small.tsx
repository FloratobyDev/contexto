import classNames from "classnames";

type SmallProps = {
  children: React.ReactNode;
  bold?: boolean;
  muted?: boolean;
};

const Small = ({ children, bold, muted }: SmallProps) => {
  const smallClasses = classNames("text-small text-gray-300 uppercase", {
    "font-bold": bold,
    "text-gray-400": muted,
  });
  return <p className={smallClasses}>{children}</p>;
};

export default Small;
