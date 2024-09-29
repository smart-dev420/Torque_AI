import {
    useContext,
} from "react";
import { ThemeContext } from "../../components/Theme/context";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { PerformingTable } from "./performingTable";
import { InfoAlert } from "../component/infoAlert";
import { ItemList } from "../component/itemList";
import { PersonCard } from "./personCard";
export const Strategies = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div>
            {/** Title Part */}
            <div className="flex flex-row items-center my-[32px]">
                <label
                    className="title-f40-700 w-[30%]"
                    style={{ color: themeContext?.theme.titleColor }}
                >
                    Strategies
                </label>
            </div>
            {/** Content Part */}

            <div className="grid grid-cols-12 gap-[32px]">
                <div
                    className="col-span-7 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Explore High-Performing Strategies <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>

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
                    <PerformingTable />
                    <InfoAlert str="Educational content is performing exceptionally well; consider adding webinars to your crypto outreach strategy." />
                    <div style={{position:'relative'}} className="mb-[24px]">
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[122px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position:'absolute',
                                right:'0px'
                            }} >
                            Explore Strategies
                        </button>
                    </div>
                </div>
                <div
                    className="col-span-5 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Blueprints for Success <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>

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
                    <div className="border-[#666666] border-[1px] rounded-[2px] p-[16px] flex flex-col gap-[13px]">
                        <div className="font-button-700 font-faded">Top Blueprint</div>
                        <div className="font-button-700">Investor Confidence Booster for Market Volatility</div>
                        <div className="flex flex-row gap-[8px]">
                            <ArrowOutwardOutlinedIcon style={{fontSize:'16px', color:'#4152EC'}}/>  
                            <div className="font-b5-500 text-left">Step-by-step guide on creating content that addresses market fears and promotes safe investment options.</div>
                        </div>
                        <div className="flex flex-row gap-[8px] w-full">
                            <ItemList icon={<ErrorOutlineIcon style={{fontSize:"12px"}}/>} title="Example Content Pieces" content="Blog posts, short videos, infographics." />
                            <ItemList icon={<ErrorOutlineIcon style={{fontSize:"12px"}}/>} title="Target Audience" content="Risk-averse investors, ages 35-55." />
                        </div>
                        <ItemList icon={<ErrorOutlineIcon style={{fontSize:"12px"}}/>} title="Predicted Impact" content="+12% increase in portfolio diversification sign-ups." />
                        
                    </div>
                    <div style={{position:'relative'}} className="mb-[24px]">
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[98px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position:'absolute',
                                right:'0px'
                            }} >
                            Use Blueprint
                        </button>
                    </div>
                </div>
                

                <div
                    className="col-span-7 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Dynamic Buyer Personas <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                    </div>
                    <div className="flex flex-row gap-[8px]">
                        <PersonCard title="Persona 1" author="Cautious Carla – The Safe Investor" age={45} perference="REITs, low-risk stocks." top="LinkedIn, Email newsletters." tradit="Seeks stability, values long-term growth, responds well to educational content." strategies="Educational content, performance comparisons, safe investment showcases." />

                        <PersonCard title="Persona 2" author="Bold Brian – The Risk-Taker" age={30} perference="Cryptocurrencies, high-risk stocks." top="Twitter, Reddit, YouTube." tradit="Thrives on excitement, values high potential returns, influenced by peer endorsements." strategies="Influencer endorsements, performance highlights, exclusive investment tips." />
                    </div>
                    <div style={{position:'relative'}} className="mb-[24px]">
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[102px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position:'absolute',
                                right:'0px'
                            }} >
                            View Personas
                        </button>
                    </div>
                </div>

                <div
                    className="col-span-5 rounded-[8px] p-[24px] flex flex-col gap-[16px]"
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Benchmark Against Competitors <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-row gap-[8px]">
                            <div className="font-h5-700">WealthGrowth</div>
                            <div className="bg-[#0D102F] font-button-700 self-center p-[4px]">Content-Driven Email Nurturing for REITs</div>
                        </div>
                        <div className="flex flex-row font-left justify-between">
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Open Rate</div>  <div>42%</div></div>
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Click Rate</div> <div>12%</div></div>
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Conversion Rate </div> <div>15%</div> </div>
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Spend Efficiency  </div> <div>85/100</div> </div>
                        </div>   
                        <InfoAlert str="WealthGrowth’s content-driven approach outperforms typical email campaigns by focusing on detailed investment insights."/>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <div className="flex flex-row gap-[8px]">
                            <div className="font-h5-700">CryptoChamp</div>
                            <div className="bg-[#0D102F] font-button-700 self-center p-[4px]">Influencer-Led Crypto Challenges</div>
                        </div>
                        <div className="flex flex-row font-left justify-between">
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Engagement Rate</div>  <div>8.5%</div></div>
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Conversion Rate</div> <div>5.2%</div></div>
                            <div className="font-b5-500 font-grey1 flex flex-col gap-[8px]"><div>Spend Efficiency  </div> <div>78/100</div> </div>
                        </div>   
                        <InfoAlert str="WealthGrowth’s content-driven approach outperforms typical email campaigns by focusing on detailed investment insights."/>
                    </div>
                    <div style={{position:'relative'}} className="mb-[24px] mt-[24px]">
                        <button className="px-[12px] py-[8px] rounded-[50px] font-button-700 w-[113px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position:'absolute',
                                right:'0px'
                            }} >
                            Benchmark Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};