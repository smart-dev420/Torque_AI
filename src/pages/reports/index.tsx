import { ReactElement, useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import { CustomReportItem } from "../component/customReportItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import {
  LineChartData,
  LineChartComponent,
} from "../../components/LineChartComponent";
import { BarChartComponent, ChartData } from "../analytics/BarChart";
import { CompetitorIcon, CompletionIcon, DollarIcon, FavoriteLaptopIcon, SendIcon, TargetIcon } from "../component/icons";

const testData: LineChartData = {
  firstData: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  secondData: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
  thirdData: [5400, 1698, 1800, 308, 4800, 3800, 4300],
  xLabel: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
};

const dateData: ChartData = {
  data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  label: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
};
const timeData: ChartData = {
  data: [2000, 3000, 2000, 2780, 1890, 2390, 3490],
  label: ["12 am", "3 am", "6 am", "12 pm", "3 pm", "6 pm", "9 pm"],
};

export const Reports = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      {/** Title Part */}
      <div className="flex flex-row items-center my-[32px]">
        <label
          className="title-f40-700 w-[30%]"
          style={{ color: themeContext?.theme.titleColor }}
        >
          Reports
        </label>
      </div>
      {/** Content Part */}

      <div className="flex flex-col md:grid md:grid-cols-12 gap-[32px]">
        <div className="flex flex-col col-span-4 gap-y-8">
          <div
            className="rounded-[8px] p-[24px] flex flex-col gap-[16px] relative"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between ">
              <label className="font-h3-700">
                Custom Reports <ErrorOutlineIcon style={{ fontSize: "14px" }} />
              </label>

              <button
                className="px-[12px]  rounded-[50px] font-button-700"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
            <div className="flex flex-col gap-y-2">
              <CustomReportItem
                title="Performance Report"
                isChecked={true}
                content="Overall campaign performance including impressions, clicks, conversions, CTR, and CPA across all channels."
              />
              <CustomReportItem
                title="Audience Insights Report"
                isChecked={true}
                content="Detailed demographic and behavioral insights."
              />
              <CustomReportItem
                title="Competitor Analysis Report"
                isChecked={true}
                content="Provides anonymized competitor data with benchmarks and insights into top strategies."
              />
              <CustomReportItem
                title="Creative Effectiveness Report"
                isChecked={false}
                content="Analyzes creative performance across formats and channels, highlighting the best-performing assets."
              />
            </div>
            <div className="flex flex-row justify-end gap-x-2">
              <button
                className="px-[12px]  rounded-[50px] font-button-700 w-[135px]"
                style={{
                  border: `1px solid ${themeContext?.theme.color}`,
                  color: themeContext?.theme.color,
                }}
              >
                Receive Daily
              </button>
              <button
                className="px-[12px]  rounded-[50px] font-button-700 w-[143px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                Create Report
              </button>
            </div>
          </div>

          <div
            className="rounded-[8px] p-[24px] flex flex-col gap-[16px] relative"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row justify-between ">
              <label className="font-h3-700">
                Goals and Milestones{" "}
                <ErrorOutlineIcon style={{ fontSize: "14px" }} />
              </label>
              <button
                className="px-[12px]  rounded-[50px] font-button-700"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                30d
              </button>
            </div>
            <p className="Button">
              Goal 1: Increase conversions for crypto investments by 20% this
              quarter.
            </p>
            <div className="flex flex-row gap-x-2 items-center">
              <ArrowOutwardOutlinedIcon
                style={{ fontSize: "16px", color: "#4152EC" }}
              />
              <p className="b5">75% completed</p>
            </div>
            <div className="flex flex-row justify-evenly gap-x-2">
              <Section
                icon={<ShoppingCartOutlinedIcon style={{ fontSize: "12px" }} />}
                title="Current Conversions"
                content="15,000/20,000"
              />
              <Section
                icon={<CompletionIcon />}
                title="Projected Completion"
                content="2 weeks ahead"
              />
            </div>
            <hr />
            <p className="Button">
              Goal 2: Reduce CPA for REIT campaigns to below $12.
            </p>
            <div className="flex flex-row gap-x-2 items-center">
              <ArrowOutwardOutlinedIcon
                style={{ fontSize: "16px", color: "#4152EC" }}
              />
              <p className="b5">50% completed</p>
            </div>
            <div className="flex flex-row justify-evenly gap-x-2">
              <Section
                icon={<DollarIcon />}
                title="Current CPA"
                content="$13.50"
              />
              <Section
                icon={<CompletionIcon />}
                title="Projected Completion"
                content="1 week behind"
                color="#ECBC41"
              />
            </div>
            <div className="flex flex-row justify-end gap-x-2">
              <button
                className="px-[12px]  rounded-[50px] font-button-700 w-[135px]"
                style={{
                  border: `1px solid ${themeContext?.theme.color}`,
                  color: themeContext?.theme.color,
                }}
              >
                Configure Goals
              </button>
              <button
                className="px-[12px]  rounded-[50px] font-button-700 w-[143px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                View Summary
              </button>
            </div>
          </div>
        </div>

        <div
          className="col-span-4 rounded-[8px] p-[24px] flex flex-col gap-[16px] relative"
          style={{ backgroundColor: themeContext?.theme.foreground }}
        >
          <div className="flex flex-row justify-between relative">
            <label className="font-h3-700">
              Weekly Performance{" "}
              <ErrorOutlineIcon style={{ fontSize: "14px" }} />
            </label>
          </div>
          <h4>Summary Highlights</h4>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-2">
              <Section
                icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />}
                title="Impressions"
                content="2,100,000"
                hint="+10% from last week"
                color="#ffffff"
              />
              <Section
                icon={<SendIcon />}
                title="Clicks"
                content="140,000"
                hint="+8% from last week"
                color="#ffffff"
              />
            </div>
            <div className="flex flex-row gap-x-2">
              <Section
                icon={
                  <ShoppingCartOutlinedIcon sx={{ height: 12, width: 12 }} />
                }
                title="Conversions"
                content="8,700"
                hint="+12% from last week"
                color="#ffffff"
              />
              <Section
                icon={<TargetIcon />}
                title="Top Channel"
                content="LinkedIn Ads"
                hint="Highest increase in conversions: +15%"
                color="#ffffff"
              />
            </div>
          </div>
          <div style={{ height: 270, marginTop: "-40px" }}>
            <LineChartComponent data={testData} />
          </div>
          <h4>Performance Changes</h4>
          <div className="flex flex-row gap-x-1">
            <ArrowOutwardOutlinedIcon
              style={{ fontSize: "16px", color: "#4152EC" }}
            />
            <p className="b5">
              Increased engagement on Facebook Ads due to targeted video
              content, resulting in a 10% lift in CTR.
            </p>
          </div>
          <div className="flex flex-row gap-x-1">
            <ArrowOutwardOutlinedIcon
              style={{
                fontSize: "16px",
                color: "#EC6041",
                transform: "rotate(90deg)",
              }}
            />
            <p className="b5">
              Slight drop in Google Ads conversions; consider adjusting keywords
              as some have become too competitive.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-[8px]">
            <div
              className="flex flex-row justify-between p-[8px] rounded-[4px]"
              style={{ backgroundColor: themeContext?.theme.hoverBackground }}
            >
              <p className="font-button-700">Top Performance</p>
              <div className="flex flex-row gap-[8px] items-center">
                <ArrowCircleUpOutlinedIcon
                  style={{ fontSize: "16px", color: "#4152EC" }}
                />
                <p className="font-button-700">Tuesday</p>
                <ArrowCircleUpOutlinedIcon
                  style={{ fontSize: "16px", color: "#4152EC" }}
                />
                <p className="font-button-700">9 am</p>
              </div>
            </div>
            <BarChartComponent dateValue={dateData.data} dateLabel={dateData.label} />
           
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="px-[12px]  rounded-[50px] font-button-700 w-[143px]"
              style={{
                backgroundColor: themeContext?.theme.activeButtonBackground,
                color: themeContext?.theme.activeColor,
              }}
            >
              Track Progress
            </button>
          </div>
        </div>

        <div
          className="col-span-4 rounded-[8px] p-[24px] flex flex-col gap-[16px] relative"
          style={{ backgroundColor: themeContext?.theme.foreground }}
        >
          <div className="flex flex-row justify-between ">
            <label className="font-h3-700">
              Competitive Reports{" "}
              <ErrorOutlineIcon style={{ fontSize: "14px" }} />
            </label>
          </div>
          <div
            className="flex flex-col p-4 gap-y-2 rounded-[2px]"
            style={{ backgroundColor: themeContext?.theme.hoverBackground }}
          >
            <p className="Button" style={{ color: "#666666" }}>
              Top Competitor Performance
            </p>
            <RowSection
              icon={<CompetitorIcon />}
              title="Competitor"
              content="SafeInvest Inc."
            />
            <RowSection
              icon={<LanguageOutlinedIcon style={{ height: "12px" }} />}
              title="Campaign"
              content="REIT Investment Safety Net"
            />
            <div className="flex flex-row gap-x-2">
              <Section
                icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />}
                title="Impressions"
                content="3,000,000"
                color="#ffffff"
              />
              <Section
                icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />}
                title="Conversions"
                content="10,000"
                color="#ffffff"
              />
            </div>
            <div className="flex flex-row gap-x-2">
              <RowSection
                icon={<FavoriteLaptopIcon />}
                title="CTR"
                content="6.5%"
              />
              <RowSection
                icon={<SellOutlinedIcon sx={{ height: 12 }} />}
                title="CPA"
                content="$11.50"
              />
            </div>
          </div>

          <div
            className="flex flex-col p-4 gap-y-2 rounded-[2px]"
            style={{ backgroundColor: themeContext?.theme.hoverBackground }}
          >
            <p className="Button" style={{ color: "#666666" }}>
              YOUR CAMPAIGN
            </p>
            <RowSection
              icon={<LanguageOutlinedIcon style={{ height: "12px" }} />}
              title="Campaign"
              content="Secure Your Future with REITs"
            />
            <div className="flex flex-row gap-x-2">
              <Section
                icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />}
                title="Impressions"
                content="2,500,000"
                color="#ffffff"
              />
              <Section
                icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />}
                title="Conversions"
                content="8,700"
                color="#ffffff"
              />
            </div>
            <div className="flex flex-row gap-x-2">
              <RowSection
                icon={<FavoriteLaptopIcon />}
                title="CTR"
                content="5.8%"
              />
              <RowSection
                icon={<SellOutlinedIcon sx={{ height: 12 }} />}
                title="CPA"
                content="$12.00"
              />
            </div>
          </div>

          <div
            className="flex flex-col p-2 rounded-[4px] gap-y-2"
            style={{ backgroundColor: themeContext?.theme.hoverBackground }}
          >
            <ArrowCircleUpOutlinedIcon
              style={{ fontSize: "16px", color: "#4152EC" }}
            />
            <p className="Button">
              Performance Gap: SafeInvest is outperforming in conversion rates
              by focusing on highly specific audience segments with tailored
              creatives.
            </p>
          </div>
          <div
            className="flex flex-col p-2 rounded-[4px] gap-y-2"
            style={{ border: ` 1px solid ${themeContext?.theme.hoverColor}` }}
          >
            <ArrowCircleUpOutlinedIcon
              style={{ fontSize: "16px", color: "#4152EC" }}
            />
            <p className="Button">
              Performance Gap: SafeInvest is outperforming in conversion rates
              by focusing on highly specific audience segments with tailored
              creatives.
            </p>
          </div>
          <div className="flex flex-row justify-end gap-x-2">
              <button
                className="px-[20px] rounded-[50px] font-button-700"
                style={{
                  border: `1px solid ${themeContext?.theme.color}`,
                  color: themeContext?.theme.color,
                }}
              >
                Settings
              </button>
              <button
                className="px-[12px] rounded-[50px] font-button-700"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                View Competitor Reports
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export const Section: React.FC<{
  icon: ReactElement;
  title: string;
  content: string;
  hint?: string;
  color?: string;
}> = ({ icon, title, content, hint, color = "#4152EC" }) => {
  return (
    <div
      className="flex flex-col rounded-[2px] w-[50%] pt-2 pb-1 px-2 justify-center"
      style={{ backgroundColor: "#0D102F" }}
    >
      <div
        className="flex flex-row items-center gap-x-1"
        style={{ color: "#ffffff" }}
      >
        {icon}
        <p className="b5">{title}</p>
      </div>
      <div className={`flex ${hint ? "flex-row" : ""} items-center gap-x-1`}>
        <p className="Button" style={{ color, whiteSpace: "nowrap" }}>
          {content}
        </p>
        {hint ? (
          <p
            className="b5 px-[4px] py-[2px] rounded-[4px]"
            style={{
              color: "#0D102F",
              backgroundColor: "#41ECCD",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
};


export const RowSection: React.FC<{
  icon: ReactElement;
  title: string;
  content: string;
}> = ({ icon, title, content }) => {
  return (
    <div
      className="flex flex-row p-2 justify-between w-[100%]"
      style={{ backgroundColor: "#0D102F" }}
    >
      <div
        className="flex flex-row gap-x-[2px] items-center"
        style={{ color: "#ffffff" }}
      >
        {icon}
        <p className="b5">{title}</p>
      </div>
      <p className="Button" style={{ color: "#D9DCFB" }}>
        {content}
      </p>
    </div>
  );
};
