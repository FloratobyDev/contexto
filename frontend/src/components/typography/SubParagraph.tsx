import classNames from "classnames";

type SubParagraphProps = {
  children: React.ReactNode;
  bold?: boolean;
  muted?: boolean;
};

const SubParagraph = ({ children, bold, muted }: SubParagraphProps) => {
  const subParagraphClasses = classNames("text-sub-paragraph text-gray-300", {
    "font-bold": bold,
    "text-gray-400": muted,
  });
  return <p className={subParagraphClasses}>{children}</p>;
};

export default SubParagraph;
