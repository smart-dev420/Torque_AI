import { useContext, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { iconAssets, imageAssets } from "../../utils/constant";
import Badge from "@mui/material/Badge";

export const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const [query, setQuery] = useState<string>("");
  const [theme, setTheme] = useState(themeContext?.theme.name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleThemeChange = () => {
    themeContext?.toggleTheme();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const initSetting = localStorage.getItem('initSetting');
  let names;
  if(initSetting){
    const { name } = JSON.parse(initSetting);
    names = name;
  }
  return (
    <div className="flex justify-between flex-row">
      <div className="flex flex-row item-center gap-x-[16px]">
        <div
          className="flex justify-start items-center rounded-[8px] h-[48px] w-[300px] px-[16px] py-[12px] gap-[10px]"
          style={{
            backgroundColor: themeContext?.theme.inputBackground,
            boxShadow: `0px 1px 0px ${themeContext?.theme.shadowColor}`,
          }}
        >
          <SearchOutlinedIcon />
          <input
            type="text"
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500 letter-f12-700"
            placeholder="Search anything"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div
          className="flex justify-start items-center rounded-[8px] h-[48px] w-[178px] px-[16px] py-[12px] gap-[10px]"
          style={{
            backgroundColor: themeContext?.theme.inputBackground,
            boxShadow: `0px 1px 0px ${themeContext?.theme.shadowColor}`,
          }}
        >
          <TuneIcon style={{ transform: "rotate(-90deg)" }} />
          <label className="letter-f12-700">Investment Industry</label>
        </div>
        <div
          className="flex justify-start items-center rounded-[8px] h-[48px] w-[178px] px-[16px] py-[12px] gap-[10px]"
          style={{
            backgroundColor: themeContext?.theme.inputBackground,
            boxShadow: `0px 1px 0px ${themeContext?.theme.shadowColor}`,
          }}
        >
          <img src={iconAssets.ic_analyze} alt="Analyze" />
          <label className="letter-f12-700">G-EL4YVHHA54</label>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-[16px]">
        <img src={imageAssets.profile} alt="Profile" />
        <div className="flex flex-col">
          <label>Welcome</label>
          <label>Chris</label>
          {/* <label>{names}</label> */}
        </div>
        <div
          className="rounded-[100%] p-[10px] cursor-pointer"
          style={{ backgroundColor: themeContext?.theme.inputBackground }}
        >
          <Badge color="secondary" variant="dot">
            <NotificationsOutlinedIcon />
          </Badge>
        </div>
        <div
          className="rounded-[100%] p-[10px] cursor-pointer"
          style={{ backgroundColor: themeContext?.theme.inputBackground }}
          onClick={handleThemeChange}
        >
          {theme === "light" ? (
            <BedtimeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </div>
      </div>
    </div>
  );
};
