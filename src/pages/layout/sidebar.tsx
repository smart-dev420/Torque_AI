import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";

export const SideBar = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`w-[316px] m-[32px]`}
      style={{ backgroundColor: themeContext?.theme.foreground }}
    >
        <h1>SideBar</h1>
    </div>
  );
};
