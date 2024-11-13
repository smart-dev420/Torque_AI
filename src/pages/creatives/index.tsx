import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import { imageAssets, SERVER_URL } from "../../utils/constant";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";
import { ItemCreatives } from "../component/itemCretives";
import { CreativesTable } from "./creativesTable";
import { GoogleIcon } from "../component/icons";
import { Perform } from "../interface";
import axios from "axios";
import { formatNumber } from "../../utils/helper";

export const Creatives = () => {
  const themeContext = useContext(ThemeContext);
  const [perform, setPerform] = useState<Perform>({
    impressions: 0,
    clicks: 0,
    ctr: 0,
    cpa: 0,
    conversions: 0,
  });
  const access_token = localStorage.getItem("access_token");
  const initialze = async () => {
    try {
      const result = await axios.post(`${SERVER_URL}/creatives`, {
        refresh_token: access_token,
      });
      // fetch performance metrics datas
      setPerform(result.data?.perform[0]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    initialze();
  }, []);
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

      <div className="flex flex-col md:grid md:grid-cols-12 gap-[32px]">
        <div
          className="col-span-5 rounded-[8px] md:p-[24px] p-[16px] flex flex-col gap-[16px] relative"
          style={{ backgroundColor: themeContext?.theme.foreground }}
        >
          <div className="flex flex-row justify-between ">
            <label className="font-h3-700">
              Creative Performance Dashboard{" "}
              <ErrorOutlineIcon style={{ fontSize: "14px" }} />
            </label>
          </div>
          <div className="flex flex-row gap-[4px] md:gap-[8px]">
            <button
              className="px-[12px] rounded-[50px] font-button-700 h-[28px]"
              style={{
                backgroundColor: themeContext?.theme.activeButtonBackground,
                color: themeContext?.theme.activeColor,
              }}
            >
              30d
            </button>
            <button
              className="px-[12px] rounded-[50px] font-button-700 h-[28px]"
              style={{
                backgroundColor: "#8D97F4",
                color: themeContext?.theme.activeColor,
              }}
            >
              Images
            </button>
            <button
              className="px-[12px] rounded-[50px] font-button-700 h-[28px]"
              style={{
                backgroundColor: "#8D97F4",
                color: themeContext?.theme.activeColor,
              }}
            >
              Videos
            </button>
            <button
              className="px-[12px] rounded-[50px] font-button-700 h-[28px]"
              style={{
                backgroundColor: "#8D97F4",
                color: themeContext?.theme.activeColor,
              }}
            >
              Carousel
            </button>
            <button
              className="px-[12px] rounded-[50px] font-button-700 h-[28px]"
              style={{
                backgroundColor: "#8D97F4",
                color: themeContext?.theme.activeColor,
              }}
            >
              Infographics
            </button>
          </div>

          <div
            className="flex flex-col gap-[16px] p-[16px] rounded-[4px]"
            style={{ backgroundColor: themeContext?.theme.inputBackground }}
          >
            <p className="font-buttom-700 font-faded">Top Performer</p>
            <div
              style={{ backgroundColor: themeContext?.theme.activeColor }}
              className="flex flex-row gap-[8px]"
            >
              <img src={imageAssets.performer} alt="creatives" />
              <div className="flex flex-col gap-[8px] p-[8px]">
                <GoogleIcon />
                <p className="font-button-700">
                  InvestSmart Crypto Promo Video
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[8px]">
              <ItemCreatives
                icon={<VisibilityOutlinedIcon style={{ fontSize: "8px" }} />}
                title="Impressions"
                content={formatNumber(perform.impressions)}
              />
              <ItemCreatives
                icon={<VisibilityOutlinedIcon style={{ fontSize: "8px" }} />}
                title="Views"
                content="300,000"
              />
            </div>
            <ItemCreatives
              icon={<ShoppingCartOutlinedIcon style={{ fontSize: "8px" }} />}
              title="Conversions"
              content={`${formatNumber(perform.conversions)} sign-ups`}
            />
            <div className="flex flex-row gap-[8px]">
              <ItemCreatives
                icon={<ComputerOutlinedIcon style={{ fontSize: "8px" }} />}
                title="CTR"
                content={perform.ctr.toString()}
              />
              <ItemCreatives
                icon={<DiscountOutlinedIcon style={{ fontSize: "8px" }} />}
                title="CPA"
                content={`$${perform.cpa.toString()}`}
              />
            </div>
          </div>

          <div className=" border-[1px] border-[#4152EC] rounded-[2px] p-[23px] flex flex-row gap-[8px] self-center">
            <ArrowCircleUpIcon
              style={{ color: "#4152EC", fontSize: "16px" }}
              className="self-center"
            />
            <h5 className="font-h5-700">
              Videos are currently outperforming static creatives; consider
              increasing your video ad spend for Crypto campaigns.
            </h5>
          </div>
          <div className="mb-[24px]">
            <button
              className="px-[12px] rounded-[50px] font-button-700 w-[146px] h-[28px]"
              style={{
                backgroundColor: themeContext?.theme.activeButtonBackground,
                color: themeContext?.theme.activeColor,
                position: "absolute",
                right: "16px",
                bottom: "16px",
              }}
            >
              View Full Performance
            </button>
          </div>
        </div>
        <div className="col-span-7 rounded-[8px]  flex flex-col gap-[16px]">
          <div
            style={{ backgroundColor: themeContext?.theme.foreground }}
            className="flex flex-col gap-[16px] p-[24px]"
          >
            <div className="flex flex-row justify-between ">
              <label className="font-h3-700 ">
                AI-Powered Creative Suggestions{" "}
                <ErrorOutlineIcon style={{ fontSize: "14px" }} />
              </label>
            </div>

            <div
              className="flex flex-col gap-[16px] p-[16px] rounded-[4px]"
              style={{ backgroundColor: themeContext?.theme.inputBackground }}
            >
              <p className="font-buttom-700 font-faded">Top Performer</p>
              <div className="flex flex-row gap-[8px] w-full">
                <div
                  className="flex flex-col gap-[8px] p-[16px] w-1/2"
                  style={{ backgroundColor: themeContext?.theme.activeColor }}
                >
                  <GoogleIcon />
                  <p className="font-button-700">
                    InvestSmart Crypto Promo Video
                  </p>
                </div>
                <div className="flex flex-col gap-[8px] w-1/2">
                  <ItemCreatives
                    icon={<ComputerOutlinedIcon style={{ fontSize: "8px" }} />}
                    title="CTR"
                    content="5.5%"
                  />
                  <ItemCreatives
                    icon={
                      <ShoppingCartOutlinedIcon style={{ fontSize: "8px" }} />
                    }
                    title="Conversions"
                    content="1,200"
                  />
                </div>
              </div>
              <div className=" border-[1px] border-[#292929] rounded-[4px] p-[8px] flex flex-row gap-[8px] self-center ">
                <ArrowCircleUpIcon
                  style={{ color: "#4152EC", fontSize: "16px" }}
                  className="self-center"
                />
                <h5 className="font-h5-700">
                  Add a call-to-action overlay at the 15-second mark to improve
                  conversion rates by an estimated 10%.
                </h5>
                <button
                  className="px-[12px] rounded-[50px] font-button-700 w-[57px] h-[28px]"
                  style={{
                    backgroundColor: themeContext?.theme.activeButtonBackground,
                    color: themeContext?.theme.activeColor,
                  }}
                >
                  Apply
                </button>
              </div>
            </div>

            <div
              className="flex flex-col gap-[16px] p-[16px] rounded-[4px]"
              style={{ backgroundColor: themeContext?.theme.inputBackground }}
            >
              <p className="font-buttom-700 font-faded">
                NEW CREATIVE CONCEPTS
              </p>
              <div className="flex flex-col md:flex-row gap-[8px] w-full">
                <div
                  className="flex flex-row gap-[8px] p-[16px] md:w-1/2 items-center"
                  style={{ backgroundColor: themeContext?.theme.activeColor }}
                >
                  <GoogleIcon />
                  <p className="font-button-700">
                    Why REITs Are the Safe Haven in Market Volatility
                  </p>
                </div>
                <div className="flex flex-col gap-[8px] md:w-1/2">
                  <ItemCreatives
                    icon={
                      <FavoriteBorderOutlinedIcon style={{ fontSize: "8px" }} />
                    }
                    title="Predicted Engagement Rate"
                    content="7.2%"
                  />
                  <ItemCreatives
                    icon={
                      <CalendarViewDayOutlinedIcon
                        style={{ fontSize: "8px" }}
                      />
                    }
                    title="Suggested Channel"
                    content="Facebook Ads"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[8px] w-full">
                <div
                  className="flex flex-row gap-[8px] p-[16px] md:w-1/2 items-center"
                  style={{ backgroundColor: themeContext?.theme.activeColor }}
                >
                  <GoogleIcon />
                  <p className="font-button-700 self-center">
                    Crypto vs. Stocks: Where to Invest Now
                  </p>
                </div>
                <div className="flex flex-col gap-[8px] md:w-1/2">
                  <ItemCreatives
                    icon={
                      <ShoppingCartOutlinedIcon style={{ fontSize: "8px" }} />
                    }
                    title="Predicted Conversions"
                    content="950 sign-ups"
                  />
                  <ItemCreatives
                    icon={
                      <CalendarViewDayOutlinedIcon
                        style={{ fontSize: "8px" }}
                      />
                    }
                    title="Suggested Channel"
                    content="Instagram Stories"
                  />
                </div>
              </div>

              <div className=" border-[1px] border-[#292929] rounded-[4px] p-[8px] flex flex-row gap-[8px] self-center ">
                <ArrowCircleUpIcon
                  style={{ color: "#4152EC", fontSize: "16px" }}
                  className="self-center"
                />
                <h5 className="font-h5-700">
                  Add a call-to-action overlay at the 15-second mark to improve
                  conversion rates by an estimated 10%.
                </h5>
              </div>
            </div>

            <div style={{ position: "relative" }} className="mb-[24px]">
              <button
                className="px-[12px] rounded-[50px] font-button-700 w-[141px] h-[28px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                  position: "absolute",
                  right: "0px",
                }}
              >
                Generate Suggestions
              </button>
            </div>
          </div>

          <div
            style={{ backgroundColor: themeContext?.theme.foreground }}
            className="flex flex-col gap-[16px] p-[24px]"
          >
            <div className="flex flex-row justify-between ">
              <label className="font-h3-700 ">
                Top Creative Formats{" "}
                <ErrorOutlineIcon style={{ fontSize: "14px" }} />
              </label>
            </div>
            <CreativesTable />
          </div>
        </div>
      </div>
    </div>
  );
};
