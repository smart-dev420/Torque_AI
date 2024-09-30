import {
    useContext,
} from "react";
import { ThemeContext } from "../../components/Theme/context";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { InfoAlert } from "../component/infoAlert";
import { ItemList } from "../component/itemList";
import { ItemInfoList } from "../component/itemInfoList";
import { PerformingTable } from "./performingTable";
import { KeyTable } from "./keyTable";
import { BarChartComponent , ChartData } from "./BarChart";
import { Divider } from "@mui/material";

export const FBIcon = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_339_4968)">
          <path
            d="M16 8C16 3.58176 12.4182 0 8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8H16Z"
            fill="#0866FF"
          />
          <path
            d="M11.1334 10.4449L11.5824 8.00007H8.96928V7.13543C8.96928 5.84359 9.47616 5.34663 10.7878 5.34663C11.1952 5.34663 11.5232 5.35655 11.712 5.37639V3.16039C11.3542 3.06087 10.4797 2.96167 9.9728 2.96167C7.29952 2.96167 6.0672 4.22375 6.0672 6.94663V8.00007H4.4176V10.4449H6.0672V15.7646C6.68608 15.9182 7.33344 16.0001 7.99968 16.0001C8.32768 16.0001 8.6512 15.9799 8.96896 15.9415V10.4449H11.1331H11.1334Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_339_4968">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  
  export const GoogleIcon = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_339_5024)">
          <path
            d="M7.99988 6.54541V9.6436H12.3053C12.1163 10.64 11.5489 11.4836 10.698 12.0509L13.2944 14.0655C14.8071 12.6691 15.6798 10.6182 15.6798 8.18185C15.6798 7.61459 15.6289 7.06909 15.5344 6.5455L7.99988 6.54541Z"
            fill="#4285F4"
          />
          <path
            d="M3.51646 9.52271L2.93089 9.97096L0.858124 11.5855C2.17448 14.1964 4.87247 16 7.99971 16C10.1597 16 11.9705 15.2873 13.2942 14.0655L10.6979 12.0509C9.98513 12.5309 9.07603 12.8219 7.99971 12.8219C5.91973 12.8219 4.1525 11.4183 3.51973 9.52732L3.51646 9.52271Z"
            fill="#34A853"
          />
          <path
            d="M0.858119 4.41455C0.312695 5.49087 0 6.70543 0 7.99996C0 9.29448 0.312695 10.509 0.858119 11.5854C0.858119 11.5926 3.51998 9.51991 3.51998 9.51991C3.35998 9.03991 3.26541 8.53085 3.26541 7.99987C3.26541 7.46889 3.35998 6.95984 3.51998 6.47984L0.858119 4.41455Z"
            fill="#FBBC05"
          />
          <path
            d="M7.99988 3.18545C9.17808 3.18545 10.2253 3.59271 11.0617 4.37818L13.3526 2.0873C11.9635 0.792777 10.1599 0 7.99988 0C4.87263 0 2.17448 1.79636 0.858124 4.41455L3.51991 6.48001C4.1526 4.58908 5.91989 3.18545 7.99988 3.18545Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_339_5024">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

export const Analaytics = () => {
    const themeContext = useContext(ThemeContext);

    const dateData :ChartData= {
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        label: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
    }
    const timeData :ChartData = {
        data: [2000, 3000, 2000, 2780, 1890, 2390, 3490],
        label: ["12 am", "3 am", "6 am", "12 pm", "3 pm", "6 pm", "9 pm"],
    }
    return (
        <div>
            {/** Title Part */}
            <div className="flex flex-row items-center my-[32px]">
                <label
                    className="title-f40-700 w-[30%]"
                    style={{ color: themeContext?.theme.titleColor }}
                >
                    Analytics
                </label>
            </div>
            {/** Content Part */}

            <div className="grid grid-cols-12 gap-[32px]">
                <div
                    className="col-span-7 rounded-[8px] p-[24px] flex flex-col gap-[16px] relative" 
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Performance Overview <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                        <button
                            className="px-[12px] rounded-[50px] font-button-700"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                            }}
                        >
                            30d
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-[8px]">
                        <div className="col-span-2">
                            <ItemInfoList icon={<SendOutlinedIcon style={{ fontSize: '8px' }} />} title="Total Clicks" content="460,000" />
                        </div>
                        <div className="col-span-2">
                            <ItemInfoList icon={<ShoppingCartOutlinedIcon style={{ fontSize: '8px' }} />} title="Total Conversions" content="28,500" />
                        </div>
                        <div className="col-span-2">
                            <ItemInfoList icon={<VisibilityOutlinedIcon style={{ fontSize: '8px' }} />} title="Total Impressions" content="8,200,000" />
                        </div>
                        <div className="col-span-3">
                            <ItemInfoList icon={<ComputerOutlinedIcon style={{ fontSize: '8px' }} />} title="Overall CTR" content="5.6%" />
                        </div>
                        <div className="col-span-3">
                            <ItemInfoList icon={<DiscountOutlinedIcon style={{ fontSize: '8px' }} />} title="Average CPA" content="$13.50" />
                        </div>
                    </div>
                    <PerformingTable />
                    <InfoAlert str="Consider reallocating part of the budget from Google Ads to Facebook Ads to balance the CPA while maintaining conversion rates." />
                    <div className="mb-[24px]">
                        <button className="px-[12px]  rounded-[50px] font-button-700 w-[153px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '16px',
                                bottom:'16px'
                            }} >
                            View Detailed Analytics
                        </button>
                    </div>
                </div>
                <div
                    className="col-span-5 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground, position: 'relative' }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Top Keyword Opportunities <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                    </div>
                    <KeyTable />
                    <InfoAlert str="High demand for beginner-level stock market content. Leverage low-competition keywords to capture new investors." />
                    <div className="mb-[24px]">
                        <button className="px-[12px]  rounded-[50px] font-button-700 w-[121px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '16px',
                                bottom: '16px'
                            }} >
                            Explore Keywords
                        </button>
                    </div>
                </div>


                <div
                    className="col-span-5 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground, position: 'relative' }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Rising Trends and Outliers <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                    </div>

                    <div className="mb-[24px]">

                        <div className="rounded-[2px] flex flex-col gap-[13px] mb-[16px]">
                            <div className="font-button-700">Green Investments</div>
                            <div className="flex flex-row gap-[8px]">
                                <ArrowOutwardOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                <div className="font-b5-500 text-left">Create content highlighting environmentally responsible investment options like green REITs and sustainable stocks.</div>
                            </div>
                            <div className="flex flex-row gap-[8px] w-full">
                                <ItemList icon={<LeaderboardIcon style={{ fontSize: "12px" }} />} title="Growth Rate" content="+150% in the past 30 days" />
                                <ItemList icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />} title="Top Channels" content="LinkedIn, YouTube" />
                            </div>

                            <Divider style={{ height: '2px', color: '#000' }} />

                            <div className="font-button-700">Crypto Diversification</div>
                            <div className="flex flex-row gap-[8px]">
                                <ArrowOutwardOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                <div className="font-b5-500 text-left">Promote content focusing on diversified crypto portfolios, targeting younger investors interested in spreading risk.</div>
                            </div>
                            <div className="flex flex-row gap-[8px] w-full">
                                <ItemList icon={<LeaderboardIcon style={{ fontSize: "12px" }} />} title="Growth Rate" content="+120% in the past 60 days" />
                                <ItemList icon={<VisibilityOutlinedIcon style={{ fontSize: "12px" }} />} title="Top Channels" content="Twitter, Facebook" />
                            </div>
                        </div>
                        <button className="px-[12px]  rounded-[50px] font-button-700 w-[113px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '16px',
                                bottom: '16px'
                            }} >
                            Benchmark Now
                        </button>
                    </div>
                </div>

                <div
                    className="col-span-7 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground, position: 'relative' }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Audience Insights and Best Times to Engage <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                    </div>

                    <div className="mb-[24px] flex flex-row gap-[16px]">

                        <div className="rounded-[2px] flex flex-col gap-[13px] mb-[16px]">
                            <div className="font-button-700">Top Demographics</div>
                            <div className="flex flex-row gap-[8px]">
                                <ArrowOutwardOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                <div className="font-b5-500 text-left">Your audience is most engaged with video content during morning commutes and evening hours. Capitalize on this by scheduling posts during these times.</div>
                            </div>
                            <div className="flex flex-row gap-[8px] w-full">
                                <ItemList icon={<PeopleAltOutlinedIcon style={{ fontSize: "12px" }} />} title="Age 25-34" content="35% of total audience" />
                                <ItemList icon={<PeopleAltOutlinedIcon style={{ fontSize: "12px" }} />} title="Age 35-44" content="28% of total audience" />
                            </div>
                            <ItemList icon={<LocationOnOutlinedIcon style={{ fontSize: "12px" }} />} title="Top Locations" content="New York, San Francisco, London" />
                            <InfoAlert str="Increase video content Tuesday mornings to maximize reach and engagement." />
                        </div>

                        <div className="shrink-0 w-1/2 flex flex-col gap-[8px]">
                            <div className="flex flex-row justify-between p-[8px]">
                                <p className="font-button-700">Top Performance</p>
                                <div className="flex flex-row gap-[8px]">
                                    <ArrowCircleUpOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                    <p className="font-button-700">Tuesday</p>
                                    <ArrowCircleUpOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                    <p className="font-button-700">9 am</p>
                                </div>
                            </div>
                            <BarChartComponent datalist={timeData}/>
                            <BarChartComponent datalist={dateData}/>
                        </div>
                    </div>
                    <button className="px-[12px]  rounded-[50px] font-button-700 w-[135px]"
                        style={{
                            border:`1px solid ${themeContext?.theme.color}`,
                            color: themeContext?.theme.color,
                            position: 'absolute',
                            right: '176px',
                            bottom: '16px',
                            height:'28px'
                        }} >
                        View All Insights
                    </button>
                    <button className="px-[12px]  rounded-[50px] font-button-700 w-[143px]"
                        style={{
                            backgroundColor: themeContext?.theme.activeButtonBackground,
                            color: themeContext?.theme.activeColor,
                            position: 'absolute',
                            right: '16px',
                            bottom: '16px'
                        }} >
                        Optimize Engagement
                    </button>
                </div>


            </div>
        </div>
    );
};