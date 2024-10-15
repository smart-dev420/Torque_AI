import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import { imageAssets } from "../../utils/constant";
import { useRouter } from "../../routes/hooks/index";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  ChartData,
  LineChartComponent,
} from "../../components/LineChartComponent";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { InfoAlert } from "../../components/InfoAlert";
import { StrategyTable } from "./strategyTable";
import Grid from "@mui/material/Grid";
import { SettingsTable } from "./settingTable";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";

const testData: ChartData = {
  firstData: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  secondData: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
  thirdData: [5400, 1698, 1800, 308, 4800, 3800, 4300],
  xLabel: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
};

const taps: string[] = ["30d", "Images", "Videos", "Carousel"];
const tempImages: string[] = [
  imageAssets.temp1,
  imageAssets.temp2,
  imageAssets.temp3,
  imageAssets.temp4,
];
const industryImages: string[] = [
  imageAssets.indus1,
  imageAssets.indus2,
  imageAssets.indus3,
  imageAssets.indus4,
];

export const Dashboard = () => {
  const themeContext = useContext(ThemeContext);
  const { setPages } = useContext(UserContext);
  const router = useRouter();
  const handleGoPage = (url: string) => {
    router.push(`/${url}`);
  };
  const [selectTap, setSelectTap] = useState<number>(0);
  const navigate = useNavigate();
  const setGoal = () => {
    setPages(3);
    navigate('/login')
  }

  return (
    <div>
      {/** Title Part */}
      <div className="flex flex-row items-center my-[32px]">
        <h1
          className="w-[30%]"
          style={{ color: themeContext?.theme.titleColor }}
        >
          Dashboard
        </h1>
        {
          localStorage.getItem('goalSetting') ?
            (
              <></>
            ) : (
              <>
                <h4
                  className="w-[30%]"
                  style={{ color: themeContext?.theme.titleColor }}
                >
                  Global Score &nbsp;
                  <label>
                    <label style={{ color: "#6775F0" }}>85</label>/100
                  </label>
                </h4>
                <div
                  className="flex flex-row items-center justify-end h4 gap-x-[20px] w-[40%]"
                  style={{ color: themeContext?.theme.titleColor }}
                >
                  <label>
                    Account Setup Progress <label style={{ color: "#6775F0" }}>3</label>
                    /6
                  </label>
                  <ProgressBar step={2} />
                  <button
                    className="rounded-[100px] min-w-[150px] Button px-[12px]"
                    style={{ border: `2px solid ${themeContext?.theme.color}` }}
                    onClick={setGoal}
                  >
                    Continue Setup
                  </button>
                </div>
              </>
            )
        }

      </div>

      {/** Content Part */}

      <div className="flex flex-col gap-y-[32px]">
        {/** First Section Start */}
        <div className="flex flex-row gap-x-[32px]">
          <div
            className="flex flex-col w-[40%] rounded-[8px] p-[24px] gap-y-[16px]"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between title-f24-700">
              <div className="flex flex-row items-center gap-x-[10px]">
                <h3>Campaign Performance</h3>
                <InfoOutlinedIcon sx={{ width: 15 }} />
              </div>
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
            <div className="flex flex-row justify-between gap-x-[8px]">
              <CampaignItem
                icon={<RemoveRedEyeOutlinedIcon style={{ height: "12px" }} />}
                color="#41ECCD"
                text="Impressions"
                performance="245.5K"
              />
              <CampaignItem
                icon={<LanguageOutlinedIcon style={{ height: "12px" }} />}
                color="#41B9EC"
                text="Clicks"
                performance="189"
              />
              <CampaignItem
                icon={<ShoppingCartOutlinedIcon style={{ height: "12px" }} />}
                color="#6775F0"
                text="Convensions"
                performance="80"
              />
            </div>
            <div
              className="h-[250px]"
              style={{ transform: "translateY(-40px)" }}
            >
              <LineChartComponent data={testData} />
            </div>
            <div className="flex justify-end Button">
              <button
                className="px-[15px] rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
                onClick={() => handleGoPage("campaigns")}
              >
                View Campaign Insights
              </button>
            </div>
          </div>

          <div
            className="flex flex-col w-[60%] rounded-[8px] p-[24px] gap-y-[16px]"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between title-f24-700">
              <div className="flex flex-row items-center gap-x-[10px]">
                <h3>Strategic Insights</h3>
                <InfoOutlinedIcon sx={{ width: 15 }} />
              </div>
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
            <h5 className="py-[8px]">
              Paid Search is your best-performing strategy.
            </h5>
            <InfoAlert str="Consider increasing the budget on PPC campaigns to maximize ROI." />
            <StrategyTable />
            <div className="flex justify-end Button">
              <button
                className="px-[15px] rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
                onClick={() => { handleGoPage('strategies') }}
              >
                Explore Strategies
              </button>
            </div>
          </div>
        </div>
        {/** First Part End */}

        {/** Second Part Start */}
        <div className="flex flex-row gap-x-[32px]">
          <div
            className="flex flex-col w-[60%] rounded-[8px] p-[24px] gap-y-[16px]"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between title-f24-700">
              <div className="flex flex-row items-center gap-x-[10px]">
                <h3>Campaign Performance</h3>
                <InfoOutlinedIcon sx={{ width: 15 }} />
              </div>
              <div className="flex flex-row gap-x-[8px]">
                {taps.map((item: string, index: number) => (
                  <button
                    key={index} // Adding a unique key for each button element
                    className="px-[12px] rounded-[50px] Button"
                    style={{
                      backgroundColor:
                        selectTap === index
                          ? themeContext?.theme.activeButtonBackground
                          : themeContext?.theme.hoverColor,
                      color:
                        selectTap === index
                          ? themeContext?.theme.activeColor
                          : themeContext?.theme.color,
                    }}
                    onClick={() => {
                      setSelectTap(index);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-row gap-x-[16px]">
              <div className="flex flex-col w-[50%] gap-y-[8px]">
                <p className="b5">Your Creatives</p>
                <Grid
                  container
                  spacing={{ xs: 2, md: 1 }}
                  columns={{ xs: 2, sm: 6, md: 12 }}
                >
                  {tempImages.map((item, index) => (
                    <Grid item xs={2} sm={4} md={6} key={index}>
                      <img src={item} alt={`temp${index}`} />
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div className="flex flex-col w-[50%] gap-y-[8px]">
                <p className="b5">Industry Trends</p>
                <Grid
                  container
                  spacing={{ xs: 2, md: 1 }}
                  columns={{ xs: 2, sm: 6, md: 12 }}
                >
                  {industryImages.map((item, index) => (
                    <Grid item xs={2} sm={4} md={6} key={index}>
                      <img src={item} alt={`temp${index}`} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
            <InfoAlert str="Consider posting at least 5 YouTube shorts per week to increase reach." />
            <div className="flex flex-row justify-end gap-x-[8px]">
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.buttonBackground,
                  color: themeContext?.theme.color,
                  border: `1px solid ${themeContext?.theme.activeButtonBackground}`
                }}
                onClick={() => { handleGoPage('creatives') }}
              >
                Explore Creatives
              </button>
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                  border: `1px solid ${themeContext?.theme.buttonBackground}`
                }}
              >
                Use Top Creative
              </button>
            </div>
          </div>
          <div
            className="flex flex-col w-[40%] rounded-[8px] p-[24px] gap-y-[16px]"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between title-f24-700">
              <div className="flex flex-row items-center gap-x-[10px]">
                <h3>Settings & Alerts</h3>
                <InfoOutlinedIcon sx={{ width: 15 }} />
              </div>
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
            <SettingsTable />
            <div className="flex flex-row justify-end gap-x-[8px]">
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.buttonBackground,
                  color: themeContext?.theme.color,
                  border: `1px solid ${themeContext?.theme.activeButtonBackground}`
                }}
              >
                Manage Settings
              </button>
              <button
                className="px-[12px] rounded-[50px] Button"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                  border: `1px solid ${themeContext?.theme.buttonBackground}`
                }}
              >
                Adopt Optimal Settings
              </button>
            </div>
          </div>
        </div>
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
            className={`h-[8px] w-full ${index <= step ? "bg-[#6775F0]" : "bg-[#141414]"
              } ${index === 0 ? "rounded-l-lg" : ""} ${index === totalSteps - 1 ? "rounded-r-lg" : ""
              }`}
          />
        );
      })}
    </div>
  );
};

export const CampaignItem: React.FC<{
  icon: ReactElement;
  color: string;
  text: string;
  performance: string;
}> = ({ icon, color, text, performance }) => {
  return (
    <div
      className="flex flex-row justify-between items-center gap-x-[8px] px-[4px] rounded-[2px] w-full"
      style={{ border: `1px solid ${color}` }}
    >
      <div className="flex items-center gap-x-[2px]">
        {icon}
        <label className="b5">{text}</label>
      </div>
      <label className="Button" style={{ textAlign: "end" }}>
        {performance}
      </label>
    </div>
  );
};
