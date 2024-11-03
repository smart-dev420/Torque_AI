import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
export const CustomReportItem: React.FC<{
  title: string;
  content: string;
  isChecked: boolean;
}> = ({ title, content, isChecked }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className="flex flex-col gap-[8px] p-[8px] text-left rounded-[4px]"
      style={{
        border: `1px solid ${themeContext?.theme.color}`,
      }}
    >
      <div className="flex flex-row gap-x-[2px] items-center">
        <input type="checkbox" checked={isChecked} style={{backgroundColor: themeContext?.theme.color}}/>
        <p className="b5">{title}</p>
      </div>
      <div className="font-button-700 text-left" style={{ color: "#666666" }}>
        {content}
      </div>
    </div>
  );
};
