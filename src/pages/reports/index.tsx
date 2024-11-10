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

export const CompletionIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.16667"
        y="1.3335"
        width="2"
        height="2"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="5.16667"
        y="4.6665"
        width="2"
        height="2"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.83328 6.45752C3.30285 6.45752 2.79414 6.24681 2.41907 5.87173C2.044 5.49666 1.83328 4.98795 1.83328 4.45752C1.83328 3.92709 2.044 3.41838 2.41907 3.04331C2.79414 2.66823 3.30285 2.45752 3.83328 2.45752"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.29854 1.84814L4.14176 2.32819L3.66171 3.17141"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DollarIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.3889 2.47206L5.27197 2.38019C5.09578 2.24175 4.87821 2.1665 4.65415 2.1665H3.25001C2.74375 2.1665 2.33334 2.57691 2.33334 3.08317V3.08317C2.33334 3.58943 2.74375 3.99984 3.25001 3.99984H4.75001C5.25627 3.99984 5.66668 4.41024 5.66668 4.9165V4.9165C5.66668 5.42276 5.25627 5.83317 4.75001 5.83317H3.05566C2.80547 5.83317 2.56437 5.73939 2.37994 5.57032L2.33334 5.52761"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 6.33317L4 1.6665"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SendIcon = () => {
  return (
    <div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 1.33325L1 3.10449L3.5 4.49992M6.66667 1.33325L4.83333 6.99992L3.5 4.49992M6.66667 1.33325L3.5 4.49992"
          stroke={"#ffffff"}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const TargetIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_702_1983)">
        <circle
          cx="4"
          cy="4"
          r="0.75"
          stroke="#D9DCFB"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="4"
          cy="4"
          r="2.25"
          stroke="#D9DCFB"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 1.75V1"
          stroke="#D9DCFB"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.25 4H7"
          stroke="#D9DCFB"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 6.25V7"
          stroke="#D9DCFB"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.75 4H1"
          stroke="#D9DCFB"
          stroke-width="0.666667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_702_1983">
          <rect width="8" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CompetitorIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 1.6665V2.33317M4 3.6665V4.33317M4 5.6665V6.33317"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.66667 2.3335L5 4.00016L6.66667 5.66683V2.3335Z"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.33333 2.3335L3 4.00016L1.33333 5.66683V2.3335Z"
        stroke="#D9DCFB"
        stroke-width="0.666667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FavoriteLaptopIcon = () => {
  return (
    <div className="px-1">
      <svg
        width="12"
        height="12"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.99999 1.66675H2.33332C1.96513 1.66675 1.66666 1.96523 1.66666 2.33342V5.33341H6.33332V4.16675"
          stroke={"#ffffff"}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 5.33325H7V5.66659C7 6.03478 6.70152 6.33325 6.33333 6.33325H1.66667C1.29848 6.33325 1 6.03478 1 5.66659V5.33325Z"
          stroke={"#ffffff"}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.17157 1.50482C4.94281 1.73358 4.94281 2.10448 5.17157 2.33324L6 3.1617L6.82843 2.33327C7.05719 2.10451 7.05719 1.73361 6.82843 1.50485C6.59967 1.27609 6.22878 1.27608 6.00002 1.50483C5.77125 1.27607 5.40034 1.27605 5.17157 1.50482Z"
          stroke={"#ffffff"}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
