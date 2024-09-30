import React, {
  MouseEventHandler,
  ReactElement,
  useContext,
  useState,
} from "react";
import { ThemeContext } from "../../components/Theme/context";
import { usePathname } from "../../routes/hooks";
import { iconAssets, imageAssets } from "../../utils/constant";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useRouter } from "../../routes/hooks/index";
import Tooltip from "@mui/material/Tooltip";
interface IconButtonData {
  icon: ReactElement;
  text: string;
  url: string;
}

const buttonList: IconButtonData[] = [
  {
    icon: <DashboardOutlinedIcon />,
    text: "Dashboard",
    url: "dashboard",
  },
  {
    icon: <LanguageOutlinedIcon />,
    text: "Campaigns",
    url: "campaigns",
  },
  {
    icon: <img alt="Strategies" />,
    text: "Strategies",
    url: "strategies",
  },
  {
    icon: <img alt="Reports" />,
    text: "Creatives",
    url: "creatives",
  },
  {
    icon: <AssessmentOutlinedIcon />,
    text: "Analytics",
    url: "analytics",
  },
  {
    icon: <img alt="Reports" />,
    text: "Reports",
    url: "reports",
  },
  {
    icon: <SettingsOutlinedIcon />,
    text: "Settings",
    url: "settings",
  },
  {
    icon: <LiveHelpOutlinedIcon />,
    text: "Support",
    url: "support",
  },
  {
    icon: <InfoOutlinedIcon />,
    text: "Terms of Use",
    url: "terms",
  },
];

export const SideBar = () => {
  const themeContext = useContext(ThemeContext);
  const usePathName = usePathname();
  const router = useRouter();
  const handleGoPage = (url: string) => {
    router.push(`/${url}`);
  };
  const [isSidebar, setIsSidebar] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isSidebar");
    console.log("res - " + storedValue);
    if (storedValue === null) return true;
    return storedValue === "true";
  });
  console.log(`${isSidebar}`);
  return (
    <div
      className={`${
        isSidebar ? "w-[316px]" : "w-[120px]"
      } m-[32px] rounded-[16px]`}
      style={{ backgroundColor: themeContext?.theme.foreground }}
    >
      <div className="flex flex-col m-[25px] gap-y-[60px]">
        <div className="flex flex-row justify-start items-center gap-x-[16px]">
          <img src={imageAssets.symbol} alt="Symbol" width={25} height={24} />

          <div className="flex flex-row justify-between letter-f18-400 w-full">
            <div
              className="letter-f18-400"
              style={{ display: isSidebar ? "block" : "none" }}
            >
              Torque &nbsp;
              <label style={{ color: "#4152EC" }}>AI</label>
            </div>

            <img
              src={iconAssets.ic_close}
              alt="Close"
              className="cursor-pointer"
              style={{transform: isSidebar ? "rotate(0deg)" : "rotate(180deg)"}}
              onClick={() => {
                setIsSidebar((prevState) => {
                  const newState = !prevState;
                  localStorage.setItem(
                    "isSidebar",
                    newState ? "true" : "false"
                  );
                  return newState;
                });
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-[12px]">
          {buttonList.map((item, index) => (
            <IconButton
              key={index}
              index={index}
              isActive={item.url === usePathName.split("/")[1]}
              icon={item.icon}
              text={item.text}
              onClick={() => handleGoPage(item.url)}
              isSidebar={isSidebar}
            />
          ))}
        </div>

        <Tooltip
          title={isSidebar ? "" : "Go Pro"}
          placement="right"
          arrow
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                color: themeContext?.theme.activeColor,
                backgroundColor: themeContext?.theme.activeButtonBackground,
                fontSize: "16px",
                paddingX: "20px",
                paddingY: "5px",
              },
              "& .MuiTooltip-arrow": {
                color: themeContext?.theme.activeButtonBackground,
              },
            },
          }}
        >
          <div
            className="flex flex-col justify-center items-center rounded-[8px] w-full p-[24px] gap-y-[10px]"
            style={{
              backgroundColor: themeContext?.theme.activeButtonBackground,
            }}
          >
            <div
              className="cursor-pointer"
              onClick={() => {
                if (!isSidebar) {
                    console.log('  Go Pro  ');
                }
              }}
            >
              <UnlockIcon isActive={true} />
            </div>
            <label
              className="letter-f12-700"
              style={{
                color: themeContext?.theme.activeColor,
                display: isSidebar ? "block" : "none",
              }}
            >
              Unlock Full Access
            </label>
            <button
              className="w-full py-[8px] rounded-[20px] letter-f12-700"
              style={{
                border: "1px solid black",
                color: themeContext?.theme.activeColor,
                display: isSidebar ? "block" : "none",
              }}
            >
              Go Pro
            </button>
          </div>
        </Tooltip>

        <Tooltip
          title={isSidebar ? "" : "End Session"}
          placement="right"
          arrow
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                color: themeContext?.theme.activeColor,
                backgroundColor: themeContext?.theme.activeButtonBackground,
                fontSize: "16px",
                paddingX: "20px",
                paddingY: "5px",
              },
              "& .MuiTooltip-arrow": {
                color: themeContext?.theme.activeButtonBackground,
              },
            },
          }}
        >
          <div
            className="flex flex-row items-center justify-center gap-x-[5px] px-[16px] py-[8px] cursor-pointer rounded-[8px] letter-f12-700"
            style={{
              backgroundColor: themeContext?.theme.activeButtonBackground,
              color: themeContext?.theme.activeColor,
            }}
            onClick={() => handleGoPage("login")}
          >
            <LogoutOutlinedIcon sx={{ width: "20px", color: "#6775F0" }} />

            <label
              className="cursor-pointer"
              style={{
                color: themeContext?.theme.activeColor,
                display: isSidebar ? "block" : "none",
              }}
            >
              End Session
            </label>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

interface IconButtonProps {
  index: number;
  isActive: boolean;
  icon: ReactElement;
  text: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  isSidebar: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  index,
  isActive,
  icon,
  text,
  onClick,
  isSidebar,
}) => {
  const themeContext = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  let enhancedIcon = icon;
  if (index === 2) {
    enhancedIcon = <StrategiesIcon isActive={isActive} isHovered={isHovered} />;
  }
  if (index === 3) {
    enhancedIcon = <CreativesIcon isActive={isActive} isHovered={isHovered} />;
  }
  if (index === 5) {
    enhancedIcon = <ReportsIcon isActive={isActive} isHovered={isHovered} />;
  }
  return (
    <Tooltip
      title={isSidebar ? "" : text}
      placement="right"
      arrow
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            color: themeContext?.theme.activeColor,
            backgroundColor: themeContext?.theme.activeButtonBackground,
            fontSize: "16px",
            paddingX: "20px",
            paddingY: "5px",
          },
          "& .MuiTooltip-arrow": {
            color: themeContext?.theme.activeButtonBackground,
          },
        },
      }}
    >
      <div
        className={`${
          isSidebar ? "" : "justify-center"
        } flex flex-row items-center gap-x-[16px] px-[16px] py-[8px] cursor-pointer rounded-[8px] letter-f20-400`}
        style={{
          backgroundColor: isActive
            ? themeContext?.theme.activeButtonBackground
            : isHovered
            ? themeContext?.theme.hoverBackground
            : themeContext?.theme.buttonBackground,
          color: isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color,
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {enhancedIcon}
        <label
          className="cursor-pointer"
          style={{
            color: isActive
              ? themeContext?.theme.activeColor
              : isHovered
              ? themeContext?.theme.hoverColor
              : themeContext?.theme.color,
            display: isSidebar ? "block" : "none",
          }}
        >
          {text}
        </label>
      </div>
    </Tooltip>
  );
};

export const StrategiesIcon: React.FC<{
  isActive: boolean;
  isHovered: boolean;
}> = ({ isActive, isHovered }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3874 7.15744L12 12L3.60925 7.14972"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V21"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 4.5L16 9"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CreativesIcon: React.FC<{
  isActive: boolean;
  isHovered: boolean;
}> = ({ isActive, isHovered }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6Z"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 7V18C21 19.6569 19.6569 21 18 21H7"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12.375L6.66789 8.70711C7.05842 8.31658 7.69158 8.31658 8.08211 8.70711L10.875 11.5M10.875 11.5L13.2304 9.1446C13.6209 8.75408 14.2541 8.75408 14.6446 9.14461L17 11.5M10.875 11.5L12.8438 13.4688"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ReportsIcon: React.FC<{
  isActive: boolean;
  isHovered: boolean;
}> = ({ isActive, isHovered }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12H15"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16H12"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke={
          isActive
            ? themeContext?.theme.activeColor
            : isHovered
            ? themeContext?.theme.hoverColor
            : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UnlockIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14V17M8 10V7C8 4.79086 9.79086 3 12 3C13.8638 3 15.4299 4.27477 15.874 6M18 15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14Z"
        stroke={
          isActive ? themeContext?.theme.activeColor : themeContext?.theme.color
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
