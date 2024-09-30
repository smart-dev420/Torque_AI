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
                    className="col-span-7 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Performance Overview <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                        <button
                            className="px-[12px] py-[8px] rounded-[50px] font-button-700"
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
                    <div style={{ position: 'relative' }} className="mb-[24px]">
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[153px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '0px'
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
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[121px]"
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
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[113px]"
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
                    <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[135px]"
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
                    <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[143px]"
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