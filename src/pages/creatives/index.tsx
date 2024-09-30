import {
    useContext,
} from "react";
import { ThemeContext } from "../../components/Theme/context";
import { imageAssets } from "../../utils/constant";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ItemCreatives } from "../component/itemCretives";
import { CreativesTable } from "./creativesTable";

export const LinkedinIcon = () => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_339_4877)">
          <path
            d="M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z"
            fill="#0A66C2"
          />
        </g>
        <defs>
          <clipPath id="clip0_339_4877">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

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

export const Creatives = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div>
            {/** Title Part */}
            <div className="flex flex-row items-center my-[32px]">
                <label
                    className="title-f40-700 w-[30%]"
                    style={{ color: themeContext?.theme.titleColor }}
                >
                    Creatives
                </label>
            </div>
            {/** Content Part */}

            <div className="grid grid-cols-12 gap-[32px]">
                <div
                    className="col-span-5 rounded-[8px] p-[24px] flex flex-col gap-[16px] relative"
                    style={{ backgroundColor: themeContext?.theme.foreground }}
                >
                    <div className="flex flex-row justify-between ">
                        <label className="font-h3-700">Creative Performance Dashboard <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                    </div>
                    <div className="flex flex-row gap-[8px]">
                        <button className="px-[12px] rounded-[50px] font-button-700 h-[28px]" style={{ backgroundColor: themeContext?.theme.activeButtonBackground, color: themeContext?.theme.activeColor, }}
                        >30d</button>
                        <button className="px-[12px] rounded-[50px] font-button-700 h-[28px]" style={{ backgroundColor: '#8D97F4', color: themeContext?.theme.activeColor, }}
                        >Images</button>
                        <button className="px-[12px] rounded-[50px] font-button-700 h-[28px]" style={{ backgroundColor: '#8D97F4', color: themeContext?.theme.activeColor, }}
                        >Videos</button>
                        <button className="px-[12px] rounded-[50px] font-button-700 h-[28px]" style={{ backgroundColor: '#8D97F4', color: themeContext?.theme.activeColor, }}
                        >Carousel</button>
                        <button className="px-[12px] rounded-[50px] font-button-700 h-[28px]" style={{ backgroundColor: '#8D97F4', color: themeContext?.theme.activeColor, }}
                        >Infographics</button>
                    </div>

                    <div className="flex flex-col gap-[16px] p-[16px] rounded-[4px]" style={{ backgroundColor: themeContext?.theme.inputBackground }}>
                        <p className="font-buttom-700 font-faded">Top Performer</p>
                        <div style={{ backgroundColor: themeContext?.theme.activeColor }} className="flex flex-row gap-[8px]">
                            <img src={imageAssets.performer} alt="creatives" />
                            <div className="flex flex-col gap-[8px] p-[8px]">
                                <YouTubeIcon style={{ color: '#FF0302' }} />
                                <p className="font-button-700">InvestSmart Crypto Promo Video</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[8px]">
                            <ItemCreatives icon={<VisibilityOutlinedIcon style={{ fontSize: '8px' }} />} title="Impressions" content="500,000" />
                            <ItemCreatives icon={<VisibilityOutlinedIcon style={{ fontSize: '8px' }} />} title="Views" content="300,000" />
                        </div>
                        <ItemCreatives icon={<ShoppingCartOutlinedIcon style={{ fontSize: '8px' }} />} title="Conversions" content="1,200 sign-ups" />
                        <div className="flex flex-row gap-[8px]">
                            <ItemCreatives icon={<ComputerOutlinedIcon style={{ fontSize: '8px' }} />} title="CTR" content="5.5%" />
                            <ItemCreatives icon={<DiscountOutlinedIcon style={{ fontSize: '8px' }} />} title="CPA" content="$10.00" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[16px] p-[16px] rounded-[4px]" style={{ backgroundColor: themeContext?.theme.inputBackground }}>
                        <p className="font-buttom-700 font-faded">Second Best Creative</p>
                        <div className="flex flex-row gap-[8px]">
                            <LinkedInIcon style={{ color: '#0A66C2' }} />
                            <p className="font-button-700">Secure REIT Investments Infographic</p>
                        </div>
                        <div className="flex flex-row gap-[8px] w-full">
                            <img src={imageAssets.secondary} alt="creatives" className="object-cover w-2/5 shrink-0" />
                            <div className="flex flex-col gap-[8px]">
                                <div className="flex flex-row gap-[8px]">
                                    <ItemCreatives icon={<ShoppingCartOutlinedIcon style={{ fontSize: '8px' }} />} title="Conversions" content="850" />
                                    <ItemCreatives icon={<SendOutlinedIcon style={{ fontSize: '8px' }} />} title="Clicks" content="22,000" />
                                </div>
                                <ItemCreatives icon={<VisibilityOutlinedIcon style={{ fontSize: '8px' }} />} title="Impressions" content="250,000" />
                                <div className="flex flex-row gap-[8px]">
                                    <ItemCreatives icon={<ComputerOutlinedIcon style={{ fontSize: '8px' }} />} title="CTR" content="4.2%" />
                                    <ItemCreatives icon={<DiscountOutlinedIcon style={{ fontSize: '8px' }} />} title="CPA" content="$12.00" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" border-[1px] border-[#4152EC] rounded-[2px] p-[23px] flex flex-row gap-[8px] self-center">
                        <ArrowCircleUpIcon style={{ color: '#4152EC', fontSize: '16px' }} className='self-center' />
                        <h5 className="font-h5-700">Videos are currently outperforming static creatives; consider increasing your video ad spend for Crypto campaigns.</h5>
                    </div>
                    <div className="mb-[24px]">
                        <button className="px-[12px] rounded-[50px] font-button-700 w-[146px] h-[28px]"
                            style={{
                                backgroundColor: themeContext?.theme.activeButtonBackground,
                                color: themeContext?.theme.activeColor,
                                position: 'absolute',
                                right: '16px',
                                bottom:'16px'
                            }} >
                            View Full Performance
                        </button>
                    </div>
                </div>
                <div
                    className="col-span-7 rounded-[8px]  flex flex-col gap-[16px]"

                >
                    <div style={{ backgroundColor: themeContext?.theme.foreground }} className="flex flex-col gap-[16px] p-[24px]">
                        <div className="flex flex-row justify-between ">
                            <label className="font-h3-700 ">AI-Powered Creative Suggestions <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                        </div>

                        <div className="flex flex-col gap-[16px] p-[16px] rounded-[4px]" style={{ backgroundColor: themeContext?.theme.inputBackground }}>
                            <p className="font-buttom-700 font-faded" >Top Performer</p>
                            <div className="flex flex-row gap-[8px] w-full" >
                                <div className="flex flex-col gap-[8px] p-[16px] w-1/2" style={{ backgroundColor: themeContext?.theme.activeColor }}>
                                    <YouTubeIcon style={{ color: '#FF0302' }} />
                                    <p className="font-button-700">InvestSmart Crypto Promo Video</p>
                                </div>
                                <div className="flex flex-col gap-[8px] w-1/2">
                                    <ItemCreatives icon={<ComputerOutlinedIcon style={{ fontSize: '8px' }} />} title="CTR" content="5.5%" />
                                    <ItemCreatives icon={<ShoppingCartOutlinedIcon style={{ fontSize: '8px' }} />} title="Conversions" content="1,200" />
                                </div>

                            </div>
                            <div className=" border-[1px] border-[#292929] rounded-[4px] p-[8px] flex flex-row gap-[8px] self-center ">
                                <ArrowCircleUpIcon style={{ color: '#4152EC', fontSize: '16px' }} className='self-center' />
                                <h5 className="font-h5-700">Add a call-to-action overlay at the 15-second mark to improve conversion rates by an estimated 10%.</h5>
                                <button className="px-[12px] rounded-[50px] font-button-700 w-[57px] h-[28px]"
                                    style={{
                                        backgroundColor: themeContext?.theme.activeButtonBackground,
                                        color: themeContext?.theme.activeColor,
                                    }} >
                                    Apply
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[16px] p-[16px] rounded-[4px]" style={{ backgroundColor: themeContext?.theme.inputBackground }}>
                            <p className="font-buttom-700 font-faded">NEW CREATIVE CONCEPTS</p>
                            <div className="flex flex-row gap-[8px] w-full" >
                                <div className="flex flex-row gap-[8px] p-[16px] w-1/2 items-center" style={{ backgroundColor: themeContext?.theme.activeColor }}>
                                    <FBIcon/>
                                    <p className="font-button-700">Why REITs Are the Safe Haven in Market Volatility</p>
                                </div>
                                <div className="flex flex-col gap-[8px] w-1/2">
                                    <ItemCreatives icon={<FavoriteBorderOutlinedIcon style={{ fontSize: '8px' }} />} title="Predicted Engagement Rate" content="7.2%" />
                                    <ItemCreatives icon={<CalendarViewDayOutlinedIcon style={{ fontSize: '8px' }} />} title="Suggested Channel" content="Facebook Ads" />
                                </div>

                            </div>

                            <div className="flex flex-row gap-[8px] w-full" >
                                <div className="flex flex-row gap-[8px] p-[16px] w-1/2" style={{ backgroundColor: themeContext?.theme.activeColor }}>
                                    <InstagramIcon className="self-center" />
                                    <p className="font-button-700">Crypto vs. Stocks: Where to Invest Now</p>
                                </div>
                                <div className="flex flex-col gap-[8px] w-1/2">
                                    <ItemCreatives icon={<ShoppingCartOutlinedIcon style={{ fontSize: '8px' }} />} title="Predicted Conversions" content="950 sign-ups" />
                                    <ItemCreatives icon={<CalendarViewDayOutlinedIcon style={{ fontSize: '8px' }} />} title="Suggested Channel" content="Instagram Stories" />
                                </div>

                            </div>

                            <div className=" border-[1px] border-[#292929] rounded-[4px] p-[8px] flex flex-row gap-[8px] self-center ">
                                <ArrowCircleUpIcon style={{ color: '#4152EC', fontSize: '16px' }} className='self-center' />
                                <h5 className="font-h5-700">Add a call-to-action overlay at the 15-second mark to improve conversion rates by an estimated 10%.</h5>
                            </div>
                        </div>

                        <div style={{ position: 'relative' }} className="mb-[24px]">
                            <button className="px-[12px] rounded-[50px] font-button-700 w-[141px] h-[28px]"
                                style={{
                                    backgroundColor: themeContext?.theme.activeButtonBackground,
                                    color: themeContext?.theme.activeColor,
                                    position: 'absolute',
                                    right: '0px'
                                }} >
                                Generate Suggestions
                            </button>
                        </div>
                    </div>

                    <div style={{ backgroundColor: themeContext?.theme.foreground }} className="flex flex-col gap-[16px] p-[24px]">
                        <div className="flex flex-row justify-between ">
                            <label className="font-h3-700 ">Top Creative Formats <ErrorOutlineIcon style={{ fontSize: '14px' }} /></label>
                        </div>
                        <CreativesTable/>
                    </div>


                </div>

            </div>
        </div>
    );
};