import classNames from "classnames";

type ParagraphProps = {
  children: React.ReactNode;
  bold?: boolean;
  muted?: boolean;
};

const Paragraph = ({ children, bold, muted }: ParagraphProps) => {
  const paragraphClasses = classNames("text-paragraph text-gray-300 whitespace-pre-wrap indent-0", {
    "font-semibold": bold,
    "font-normal": !bold,
    "text-gray-400": muted,
  });
  return <pre style={{
    fontFamily: "inherit",
  }} className={paragraphClasses}>{children}</pre>;
};

export default Paragraph;
