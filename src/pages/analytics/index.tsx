import {
    useContext, useEffect, useState
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
import { BarChartComponent, ChartData } from "./BarChart";
import { Divider } from "@mui/material";

// import perform from '../../services/perform.json';
import keyword from '../../services/keyword.json';

import { Modal, Box, Typography, Button } from '@mui/material';
import axios from "axios";
import { SERVER_URL } from "../../utils/constant";
import { Perform } from "../interface";

export const Analaytics = () => {
    const themeContext = useContext(ThemeContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [perform, setPerform] = useState<Perform>({
        impressions: 0,
        clicks: 0,
        ctr: 0,
        cpa: 0,
        conversions: 0
    });
    const [audienceResult, setAudienceResult] = useState<TopImpressionsResult>({
        top1: { ageRange: '', impression: 0, percent: "0" },
        top2: { ageRange: '', impression: 0, percent: "0" },
        totalImpressions: 0,
    });
    const [dateValue, setDateValue] = useState([]);
    const [maxPos, setMaxPos] = useState(0);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const ageRangeMapping: { [key: string]: string } = {
        "503001": "18-24",
        "503002": "25-34",
        "503003": "35-44",
        "503004": "45-54",
        "503005": "55-64",
        "503006": "65 or more",
        "503999": "Unknown",
    };
    const dateData: ChartData = {
        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        label: ["Mon", "Tue", "Wed", "Thrs", "Fri", "Sat", "Sun"],
    }
    const timeData: ChartData = {
        data: [2000, 3000, 2000, 2780, 1890, 2390, 3490],
        label: ["12 am", "3 am", "6 am", "12 pm", "3 pm", "6 pm", "9 pm"],
    }
    interface Perform {
        impressions: number;
        clicks: number;
        ctr: number;
        cpa: number;
        conversions: number;
    }
    interface ImpressionData {
        age_range: number;
        impression: number;
    }

    interface TopImpressionsResult {
        top1: { ageRange: string; impression: number; percent: string };
        top2: { ageRange: string; impression: number; percent: string };
        totalImpressions: number;
    }

    interface ImpressionData {
        age_range: number;
        impression: number;
    }

    interface TopImpressionsResult {
        top1: { ageRange: string; impression: number; percent: string };
        top2: { ageRange: string; impression: number; percent: string };
        totalImpressions: number;
    }

    const handleExploreClick = () => {
        setIsModalOpen(true); // Open the modal when "Explore Keywords" is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal when the user clicks "Close"
    };

    const access_token = localStorage.getItem('access_token');
    useEffect(() => {
        initialze();
    }, []);

    const initialze = async () => {
        try {
            const result = await axios.post(`${SERVER_URL}/analytics`, {
                refresh_token: access_token
            });
            // fetch performance metrics datas
            setPerform(result.data?.perform[0]);
            const impressions = getImpressionSumPerDate(result.data.audience)
            setDateValue(impressions);

            const maxImpression = Math.max(...impressions);
            setMaxPos(impressions.indexOf(maxImpression));

            // fetch audience information datas
            const impressionSums = getImpressionSumsByAgeRange(result.data.audience);
            console.log(result.data.audience)
            setAudienceResult(getTopTwoImpressions(impressionSums));
        } catch (e) {
            console.log(e)
        }
    }
    function getImpressionSumPerDate(data: any) {
        return data.map((item: any) => {
            const totalImpressions = item.age_ranges.reduce((sum: any, ageRange: { impression: any; }) => sum + ageRange.impression, 0);
            return totalImpressions;
        });
    }
    const getImpressionSumsByAgeRange = (data: { date: string; age_ranges: { age_range: number; impression: number }[] }[]) => {
        const impressionsByAgeRange: { [key: number]: number } = {};
    
        data.forEach((item) => {
            item.age_ranges.forEach((range) => {
                impressionsByAgeRange[range.age_range] = (impressionsByAgeRange[range.age_range] || 0) + range.impression;
            });
        });
    
        return impressionsByAgeRange;
    };
    const getTopTwoImpressions = (impressions: { [key: number]: number }): TopImpressionsResult => {
        const impressionsArray = Object.entries(impressions)
            .filter(([ageRangeCode]) => ageRangeCode !== "503999") // Skip the "Unknown" age range
            .map(([ageRangeCode, impression]) => ({
                ageRange: ageRangeMapping[Number(ageRangeCode)] || "Unknown",
                impression: impression,
            }));
    
        // Sort the array by impressions in descending order
        impressionsArray.sort((a, b) => b.impression - a.impression);
    
        const top1 = impressionsArray[0];
        const top2 = impressionsArray[1];
        const totalImpressions = impressionsArray.reduce((sum, item) => sum + item.impression, 0);
    
        const top1Percent = ((top1.impression / totalImpressions) * 100).toFixed(2);
        const top2Percent = ((top2.impression / totalImpressions) * 100).toFixed(2);
    
        return {
            top1: { ageRange: top1.ageRange, impression: top1.impression, percent: top1Percent },
            top2: { ageRange: top2.ageRange, impression: top2.impression, percent: top2Percent },
            totalImpressions,
        };
    };
    
    
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

            <div className="flex flex-col md:grid md:grid-cols-12 gap-[32px]">
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
                        <div className="md:col-span-2 col-span-3">
                            <ItemInfoList icon={<SendOutlinedIcon style={{ fontSize: '8px' }} />} title="Total Clicks" content={perform?.clicks.toString()} />
                        </div>
                        <div className="md:col-span-2 col-span-3">
                            <ItemInfoList icon={<ShoppingCartOutlinedIcon style={{ fontSize: '8px' }} />} title="Total Conversions" content={perform?.conversions.toString()} />
                        </div>
                        <div className="md:col-span-2 col-span-6">
                            <ItemInfoList icon={<VisibilityOutlinedIcon style={{ fontSize: '8px' }} />} title="Total Impressions" content={perform?.impressions.toString()} />
                        </div>
                        <div className="col-span-3">
                            <ItemInfoList icon={<ComputerOutlinedIcon style={{ fontSize: '8px' }} />} title="Overall CTR" content={`${(Math.floor(perform?.ctr * 10000) / 100).toString()}%`} />
                        </div>
                        <div className="col-span-3">
                            <ItemInfoList icon={<DiscountOutlinedIcon style={{ fontSize: '8px' }} />} title="Average CPA" content={`$${perform?.cpa.toString()}`} />
                        </div>
                    </div>
                    <PerformingTable perform={perform} />
                    <InfoAlert str="Consider reallocating part of the budget from Google Ads to Facebook Ads to balance the CPA while maintaining conversion rates." />
                    <div className="mb-[24px]">
                        <button className="px-[12px]  rounded-[50px] font-button-700 w-[153px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '16px',
                                bottom: '16px'
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
                    <KeyTable keyword={keyword} limit={3} />
                    <InfoAlert str="High demand for beginner-level stock market content. Leverage low-competition keywords to capture new investors." />
                    <div className="mb-[24px]">
                        <button className="px-[12px]  rounded-[50px] font-button-700 w-[121px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '16px',
                                bottom: '16px'
                            }} onClick={() => handleExploreClick()}>
                            Explore Keywords
                        </button>
                    </div>

                    <Modal
                        open={isModalOpen}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-keywords-title"
                        aria-describedby="modal-keywords-description"

                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start', // Align items to the start
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '70%',
                                bgcolor: 'background.paper',
                                borderRadius: '10px',
                                boxShadow: 24,
                                p: 4,
                                maxHeight: '80%', // Limit height
                                overflowY: 'auto',
                                minHeight: '400px', // Ensure minimum height for visibility
                            }}
                        >
                            <Typography id="modal-keywords-title"
                                variant="h6"
                                component="h2"
                                sx={{ textAlign: 'center', marginBottom: 3 }}>
                                Explore All Keywords
                            </Typography>
                            <Button
                                onClick={handleCloseModal}
                                sx={{ position: 'absolute', top: '10px', right: '10px' }}
                            >
                                Close
                            </Button>
                            <KeyTable keyword={keyword} />
                        </Box>
                    </Modal>

                    <Modal
                        open={isModalOpen}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-keywords-title"
                        aria-describedby="modal-keywords-description"

                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start', // Align items to the start
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '70%',
                                bgcolor: 'background.paper',
                                borderRadius: '10px',
                                boxShadow: 24,
                                p: 4,
                                maxHeight: '80%', // Limit height
                                overflowY: 'auto',
                                minHeight: '400px', // Ensure minimum height for visibility
                            }}
                        >
                            <Typography id="modal-keywords-title"
                                variant="h6"
                                component="h2"
                                sx={{ textAlign: 'center', marginBottom: 3 }}>
                                Explore All Keywords
                            </Typography>
                            <Button
                                onClick={handleCloseModal}
                                sx={{ position: 'absolute', top: '10px', right: '10px' }}
                            >
                                Close
                            </Button>
                            <KeyTable keyword={keyword} />
                        </Box>
                    </Modal>
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

                    <div className="mb-[24px] flex md:flex-row flex-col gap-[16px]">

                        <div className="rounded-[2px] flex flex-col gap-[13px] mb-[16px]">
                            <div className="font-button-700">Top Demographics</div>
                            <div className="flex flex-row gap-[8px]">
                                <ArrowOutwardOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                <div className="font-b5-500 text-left">Your audience is most engaged with video content during morning commutes and evening hours. Capitalize on this by scheduling posts during these times.</div>
                            </div>
                            <div className="flex flex-row gap-[8px] w-full">
                                <ItemList icon={<PeopleAltOutlinedIcon style={{ fontSize: "12px" }} />} title={`Age ${audienceResult?.top1.ageRange}`} content={`${audienceResult?.top1.percent}% of total audience`} />
                                <ItemList icon={<PeopleAltOutlinedIcon style={{ fontSize: "12px" }} />} title={`Age ${audienceResult?.top2.ageRange}`} content={`${audienceResult?.top2.percent}% of total audience`} />
                            </div>
                            <ItemList icon={<LocationOnOutlinedIcon style={{ fontSize: "12px" }} />} title="Top Locations" content="New York, San Francisco, London" />
                            <InfoAlert str="Increase video content Tuesday mornings to maximize reach and engagement." />
                        </div>

                        <div className="shrink-0 md:w-1/2 flex flex-col gap-[8px] mb-4 md:mb-0">
                            <div className="flex flex-row justify-between p-[8px] rounded-[4px]" style={{ backgroundColor: themeContext?.theme.hoverBackground }}>
                                <p className="font-button-700">Top Performance</p>
                                <div className="flex flex-row gap-[8px] items-center">
                                    <ArrowCircleUpOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                    <p className="font-button-700">{days[maxPos]}</p>
                                    {/* <ArrowCircleUpOutlinedIcon style={{ fontSize: '16px', color: '#4152EC' }} />
                                    <p className="font-button-700">9 am</p> */}
                                </div>
                            </div>
                            <BarChartComponent dateLabel={dateData.label} dateValue={dateValue} />
                        </div>
                    </div>
                    <button className="px-[12px]  rounded-[50px] font-button-700 w-[135px]"
                        style={{
                            border: `1px solid ${themeContext?.theme.color}`,
                            color: themeContext?.theme.color,
                            position: 'absolute',
                            right: '176px',
                            bottom: '16px',
                            height: '28px'
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