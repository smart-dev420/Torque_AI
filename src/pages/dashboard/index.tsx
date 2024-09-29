import React, {
  MouseEventHandler,
  ReactElement,
  useContext,
  useState,
} from "react";
import { ThemeContext } from "../../components/Theme/context";
import { usePathname } from "../../routes/hooks";
import { iconAssets, imageAssets } from "../../utils/constant";
import { useRouter } from "../../routes/hooks/index";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartData, LineChartComponent } from "../../components/LineChartComponent";

const testData: ChartData = {
  firstData: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  secondData: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
  thirdData: [5400, 1698, 1800, 308, 4800, 3800, 4300],
  xLabel: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
}

export const Dashboard = () => {
  const themeContext = useContext(ThemeContext);
  const usePathName = usePathname();
  const router = useRouter();
  const handleGoPage = (url: string) => {
    router.push(`/${url}`);
  };
  return (
    <div>
      {/** Title Part */}
      <div className="flex flex-row items-center my-[32px]">
        <label
          className="title-f40-700 w-[30%]"
          style={{ color: themeContext?.theme.titleColor }}
        >
          Dashboard
        </label>
        <label
          className="title-f20-700 w-[30%]"
          style={{ color: themeContext?.theme.titleColor }}
        >
          Global Score{" "}
          <label>
            {" "}
            <label style={{ color: "#6775F0" }}>85</label>/100
          </label>
        </label>
        <div
          className="flex flex-row items-center justify-end title-f20-700 gap-x-[20px] w-[40%]"
          style={{ color: themeContext?.theme.titleColor }}
        >
          <label>
            Account Setup Progress <label style={{ color: "#6775F0" }}>3</label>
            /6
          </label>
          <ProgressBar step={2} />
          <button
            className="rounded-[100px] min-w-[150px] letter-f12-700 px-[12px] py-[8px]"
            style={{ border: `2px solid ${themeContext?.theme.color}` }}
          >
            Continue Setup
          </button>
        </div>
      </div>

      {/** Content Part */}

      <div className="flex flex-col">
        {/** First Section Start */}
        <div className="flex flex-row gap-x-[16px]">
          <div
            className="flex flex-col w-[40%] rounded-[8px] p-[24px] gap-y-[16px]"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between title-f24-700">
              <label>Camaign Performance</label>
              <button
                className="px-[12px] py-[8px] rounded-[50px] letter-f12-700"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
            <div className="flex flex-row justify-between gap-x-[8px]">
              <CamaignItem
                icon={<RemoveRedEyeOutlinedIcon style={{ height: "12px" }} />}
                color="#41ECCD"
                text="Impressions"
                performance="245.5K"
              />
              <CamaignItem
                icon={<LanguageOutlinedIcon style={{ height: "12px" }} />}
                color="#41B9EC"
                text="Clicks"
                performance="189"
              />
              <CamaignItem
                icon={<ShoppingCartOutlinedIcon style={{ height: "12px" }} />}
                color="#6775F0"
                text="Convensions"
                performance="80"
              />
            </div>
            <LineChartComponent data={testData} />
            <div className="flex justify-end title-f12-700">
              <button className="px-[15px] py-[8px] rounded-[50px]" style={{backgroundColor: themeContext?.theme.activeButtonBackground, color:themeContext?.theme.activeColor}}>View Campaign Insights</button>
            </div>
          </div>

          <div
            className="flex flex-col w-[60%] rounded-[8px] p-[24px]"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between">
              <label>Campaign Performance</label>
              <button
                className="letter-f12-700 px-[12px] py-[8px] rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
          </div>
        </div>
        {/** First Part End */}

        {/** Second Part Start */}
        <div className="flex flex-row gap-x-[32px]"></div>
        {/** Second Part End */}
      </div>
      {/** Content End */}
    </div>
  );
};

export const ProgressBar: React.FC<{ step: number }> = ({ step }) => {
  const totalSteps = 6;

  return (
    <div className="w-[120px] h-[8px] flex flex-row items-center justify-center gap-[8px]">
      {Array.from({ length: totalSteps }).map((_, index) => {
        return (
          <div
            key={index}
            className={`h-[8px] w-full ${
              index <= step ? "bg-[#6775F0]" : "bg-[#141414]"
            } ${index === 0 ? "rounded-l-lg" : ""} ${
              index === totalSteps - 1 ? "rounded-r-lg" : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export const CamaignItem: React.FC<{
  icon: ReactElement;
  color: string;
  text: string;
  performance: string;
}> = ({ icon, color, text, performance }) => {
  return (
    <div
      className="flex flex-row justify-between items-center gap-x-[8px] p-[8px] rounded-[2px] w-[33%]"
      style={{ border: `1px solid ${color}`, whiteSpace: 'nowrap' }}
    >
      <div className="flex flex-row items-center gap-x-[2px]">
        {icon}
        <label className="title-f8-700">{text}</label>
      </div>
      <label className="title-f12-700">{performance}</label>
    </div>
  );
};
