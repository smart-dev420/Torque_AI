import { ReactElement, useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { InfoAlert } from "../component/infoAlert";
import { imageAssets } from "../../utils/constant";
import { FirstIconTable, SecondTable } from "./iconTable";
import { KeyTable } from "./keyTable";

export const Campaigns = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      {/** Title Part */}
      <div className="flex flex-row items-center my-[32px]">
        <h1
          className="w-[30%]"
          style={{ color: themeContext?.theme.titleColor }}
        >
          Campaigns
        </h1>
      </div>
      {/** Content */}
      <div className="flex flex-row gap-x-8">
        <div className="flex flex-col w-[60%] gap-y-[16px]">
          <div
            className="flex flex-col gap-x-[10px] rounded-[8px] p-6 gap-y-4"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row rounded-[8px] items-center gap-x-2">
              <h3>Optimize Your Latest Campaign</h3>
              <InfoOutlinedIcon sx={{ width: 15 }} />
            </div>
            <h5>Crypto Growth Booster Q4</h5>
            <FirstIconTable />
            <InfoAlert str="Increase ad budget by 10% during peak trading hours to capitalize on higher conversion rates." />
          </div>

          <div
            className="flex flex-col gap-x-[10px] rounded-[8px] p-6 gap-y-4"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row rounded-[8px] items-center gap-x-2">
              <h3>Daily Campaign Ideas</h3>
              <InfoOutlinedIcon sx={{ width: 15 }} />
            </div>
            <SecondTable />
            <InfoAlert str="Trending Topics: “Leveraging AI in Investment Decisions” - High engagement rate observed." />
            <div className="flex justify-end title-f12-700">
              <button
                className="px-[15px] rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                View All Daily Ideas
              </button>
            </div>
          </div>
          <div
            className="flex flex-col gap-x-[10px] rounded-[8px] p-6 gap-y-4"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row rounded-[8px] items-center gap-x-2">
              <h3>Top Keyword and Strategy Opportunities</h3>
              <InfoOutlinedIcon sx={{ width: 15 }} />
            </div>
            <KeyTable />
            <div className="flex justify-end title-f12-700">
              <button
                className="px-[15px] rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-[40%] rounded-[8px] p-6 gap-y-4"
          style={{ backgroundColor: themeContext?.theme.foreground }}
        >
          <div className="flex flex-row items-center gap-x-[10px]">
            <h3>Competitor Campaign Insights</h3>
            <InfoOutlinedIcon sx={{ width: 15 }} />
          </div>
          <div
            className="flex flex-col p-4 gap-y-2 rounded-[8px]"
            style={{ border: `1px solid #666666` }}
          >
            <p className="Button">TOP COMPETITOR</p>
            <h5 className="title-f20-700">InvestSmart Inc.</h5>
            <div className="flex items-center gap-x-2">
              <FBIcon />
              <p className="Button">Campaign: Maximize Your Crypto Returns</p>
            </div>
            <div className="flex flex-row gap-x-2">
              <CamaignItem
                icon={<RemoveRedEyeOutlinedIcon style={{ height: "12px" }} />}
                text="Impressions"
                performance="1,800,000"
              />
              <CamaignItem
                icon={<SendIcon />}
                text="Clicks"
                performance="90,000"
              />
            </div>
            <CamaignItem
              icon={<ShoppingCartOutlinedIcon sx={{ height: 12 }} />}
              text="Clicks"
              performance="5,500"
            />
            <div className="flex flex-row gap-x-2">
              <CamaignItem
                icon={<FavoriteLaptopIcon />}
                text="Impressions"
                performance="5%"
              />
              <CamaignItem
                icon={<SellOutlinedIcon sx={{ height: 12 }} />}
                text="Clicks"
                performance="$13.00"
              />
            </div>
            <InfoAlert str="InvestSmart Inc. increased their budget allocation to video content, resulting in a 15% lift in conversions." />
          </div>
          <div
            className="flex flex-col p-4 gap-y-2 rounded-[8px]"
            style={{ border: `1px solid #666666` }}
          >
            <p className="Button">Top Performer</p>
            <h5 className="title-f20-700">SafeInvest REIT Strategies</h5>
            <div className="flex items-center gap-x-2">
              <GoogleIcon />
              <p className="Button">
                Campaign: Best REITs to Invest in September
              </p>
            </div>
            <div className="flex flex-row gap-x-2">
              <CamaignItem
                icon={<RemoveRedEyeOutlinedIcon style={{ height: "12px" }} />}
                text="Impressions"
                performance="2,000,000"
              />
              <CamaignItem
                icon={<SendIcon />}
                text="Clicks"
                performance="120,000"
              />
            </div>
            <CamaignItem
              icon={<ShoppingCartOutlinedIcon sx={{ height: 12 }} />}
              text="Clicks"
              performance="7,200"
            />
            <div className="flex flex-row gap-x-2">
              <CamaignItem
                icon={<FavoriteLaptopIcon />}
                text="Impressions"
                performance="6%"
              />
              <CamaignItem
                icon={<SellOutlinedIcon sx={{ height: 12 }} />}
                text="Clicks"
                performance="$12.50"
              />
            </div>
            <img src={imageAssets.creative} alt="Creative" />
          </div>
          <InfoAlert str="Consider integrating video content into your REIT campaigns to mirror the success seen by ‘InvestSmart Inc." />
          <div className="flex justify-end title-f12-700">
            <button
              className="px-[15px] rounded-[50px]"
              style={{
                backgroundColor: themeContext?.theme.activeButtonBackground,
                color: themeContext?.theme.activeColor,
              }}
            >
              View Campaign Insights
            </button>
          </div>
        </div>
      </div>
    </div>
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

const SendIcon = () => {
  const themeContext = useContext(ThemeContext);
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
          d="M6.66667 1.33325L1 3.10449L3.5 4.49992M6.66667 1.33325L4.83333 6.99992L3.5 4.49992M6.66667 1.33325L3.5 4.49992"
          stroke={themeContext?.theme.color}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const FavoriteLaptopIcon = () => {
  const themeContext = useContext(ThemeContext);
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
          stroke={themeContext?.theme.color}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 5.33325H7V5.66659C7 6.03478 6.70152 6.33325 6.33333 6.33325H1.66667C1.29848 6.33325 1 6.03478 1 5.66659V5.33325Z"
          stroke={themeContext?.theme.color}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.17157 1.50482C4.94281 1.73358 4.94281 2.10448 5.17157 2.33324L6 3.1617L6.82843 2.33327C7.05719 2.10451 7.05719 1.73361 6.82843 1.50485C6.59967 1.27609 6.22878 1.27608 6.00002 1.50483C5.77125 1.27607 5.40034 1.27605 5.17157 1.50482Z"
          stroke={themeContext?.theme.color}
          strokeWidth="0.666667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const FireIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.23358 8.33925L9.69552 8.5306L9.23358 8.33925ZM7.33939 10.2334L7.14805 9.7715H7.14805L7.33939 10.2334ZM4.66061 10.2334L4.85195 9.7715L4.66061 10.2334ZM9.5 7.00025L9 7.0002L9.5 7.00025ZM7.66297 3.07219L7.33386 2.69578L7.66297 3.07219ZM7.83639 3.07164L8.16541 2.69515L7.83639 3.07164ZM6.49482 4.0987L6.02469 4.26893L6.49482 4.0987ZM6.78904 4.12699L6.36366 3.86422L6.78904 4.12699ZM9.49922 6.99945L8.99995 6.9725L9.49922 6.99945ZM4.85357 1.58957L4.51422 1.22236L4.85357 1.58957ZM5.04666 1.59843L4.67434 1.93217L5.04666 1.59843ZM4.51422 1.22236C4.01679 1.68207 2 3.74073 2 6.99986H3C3 4.16109 4.76599 2.35133 5.19293 1.95677L4.51422 1.22236ZM6.96495 3.92848C6.44574 2.49449 5.6972 1.57508 5.41897 1.26469L4.67434 1.93217C4.89678 2.18031 5.5621 2.99132 6.02469 4.26893L6.96495 3.92848ZM7.21442 4.38977C7.5284 3.8815 7.85672 3.56695 7.99207 3.44861L7.33386 2.69578C7.14409 2.8617 6.74287 3.25035 6.36366 3.86422L7.21442 4.38977ZM7.50737 3.44813C7.80799 3.71085 9 4.88506 9 6.97045H10C10 4.47391 8.56984 3.04859 8.16541 2.69515L7.50737 3.44813ZM9 6.97045C9 6.97119 8.99998 6.97187 8.99995 6.9725L9.99849 7.0264C9.9995 7.00783 10 6.98917 10 6.97045H9ZM9 7.0002C8.99996 7.39405 8.92236 7.78404 8.77164 8.14791L9.69552 8.5306C9.89648 8.04543 9.99994 7.52544 10 7.00031L9 7.0002ZM8.77164 8.14791C8.62087 8.51189 8.3999 8.84261 8.12132 9.12118L8.82843 9.82829C9.19986 9.45686 9.4945 9.0159 9.69552 8.5306L8.77164 8.14791ZM8.12132 9.12118C7.84274 9.39976 7.51203 9.62074 7.14805 9.7715L7.53073 10.6954C8.01604 10.4944 8.45699 10.1997 8.82843 9.82829L8.12132 9.12118ZM7.14805 9.7715C6.78407 9.92227 6.39397 9.99986 6 9.99986V10.9999C6.52529 10.9999 7.04543 10.8964 7.53073 10.6954L7.14805 9.7715ZM6 9.99986C5.60603 9.99986 5.21593 9.92227 4.85195 9.7715L4.46927 10.6954C4.95457 10.8964 5.47471 10.9999 6 10.9999V9.99986ZM4.85195 9.7715C4.48797 9.62074 4.15726 9.39976 3.87868 9.12118L3.17157 9.82829C3.54301 10.1997 3.98396 10.4944 4.46927 10.6954L4.85195 9.7715ZM3.87868 9.12118C3.6001 8.84261 3.37913 8.51189 3.22836 8.14791L2.30448 8.5306C2.5055 9.0159 2.80014 9.45685 3.17157 9.82829L3.87868 9.12118ZM3.22836 8.14791C3.0776 7.78394 3 7.39383 3 6.99986H2C2 7.52515 2.10346 8.04529 2.30448 8.5306L3.22836 8.14791ZM9.49961 7.49986C9.2235 7.49986 8.99997 7.27598 9 7.0002L10 7.00031C10 6.72409 9.77615 6.49986 9.49961 6.49986V7.49986ZM7.99207 3.44861C7.85707 3.56664 7.64818 3.57119 7.50737 3.44813L8.16541 2.69515C7.92351 2.48375 7.56992 2.48939 7.33386 2.69578L7.99207 3.44861ZM6.02469 4.26893C6.21708 4.80028 6.9317 4.84743 7.21442 4.38977L6.36366 3.86422C6.44203 3.73736 6.57637 3.6949 6.67966 3.70465C6.78389 3.71449 6.9124 3.78333 6.96495 3.92848L6.02469 4.26893ZM8.99995 6.9725C8.98449 7.25885 9.21246 7.49986 9.49961 7.49986V6.49986C9.78631 6.49986 10.0139 6.7405 9.99849 7.0264L8.99995 6.9725ZM5.19293 1.95677C5.04562 2.09291 4.81019 2.08372 4.67434 1.93217L5.41897 1.26469C5.18026 0.998388 4.77471 0.981627 4.51422 1.22236L5.19293 1.95677Z"
        fill="#4152EC"
      />
      <path
        d="M5.46852 5.92589L5.80111 6.29923V6.29923L5.46852 5.92589ZM4.08905 7.89055L3.60845 7.75264L3.60845 7.75264L4.08905 7.89055ZM6.53154 5.9259L6.19894 6.29923V6.29923L6.53154 5.9259ZM7.91095 7.89055L7.43035 8.02845L7.43035 8.02845L7.91095 7.89055ZM7.92797 7.96626L7.43453 8.04694C7.43742 8.06462 7.44126 8.08213 7.44603 8.0994L7.92797 7.96626ZM4.07203 7.96624L4.55398 8.09939C4.55875 8.08212 4.56259 8.06461 4.56548 8.04693L4.07203 7.96624ZM5.13593 5.55255C4.64129 5.9932 3.88677 6.78269 3.60845 7.75264L4.56966 8.02846C4.76651 7.34242 5.33877 6.71111 5.80111 6.29923L5.13593 5.55255ZM6.86414 5.55256C6.36747 5.11009 5.63261 5.11008 5.13593 5.55255L5.80111 6.29923C5.91865 6.19453 6.08141 6.19453 6.19894 6.29923L6.86414 5.55256ZM8.39156 7.75264C8.11324 6.7827 7.35876 5.99322 6.86414 5.55256L6.19894 6.29923C6.66127 6.71111 7.2335 7.34242 7.43035 8.02845L8.39156 7.75264ZM8.42142 7.88559C8.41414 7.84104 8.40419 7.79668 8.39156 7.75264L7.43035 8.02845C7.43224 8.03504 7.43359 8.04119 7.43453 8.04694L8.42142 7.88559ZM7.44603 8.0994C7.4811 8.22638 7.5 8.36061 7.5 8.50006H8.5C8.5 8.26978 8.46873 8.04601 8.40992 7.83312L7.44603 8.0994ZM7.5 8.50006C7.5 9.32848 6.82843 10.0001 6 10.0001V11.0001C7.38071 11.0001 8.5 9.88077 8.5 8.50006H7.5ZM6 10.0001C5.17157 10.0001 4.5 9.32848 4.5 8.50006H3.5C3.5 9.88077 4.61929 11.0001 6 11.0001V10.0001ZM4.5 8.50006C4.5 8.3606 4.5189 8.22637 4.55398 8.09939L3.59009 7.83309C3.53127 8.04599 3.5 8.26977 3.5 8.50006H4.5ZM3.60845 7.75264C3.59581 7.79666 3.58587 7.84101 3.57859 7.88555L4.56548 8.04693C4.56642 8.04119 4.56777 8.03505 4.56966 8.02846L3.60845 7.75264Z"
        fill="#4152EC"
      />
    </svg>
  );
};

export const CamaignItem: React.FC<{
  icon: ReactElement;
  text: string;
  performance: string;
}> = ({ icon, text, performance }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className="flex flex-row justify-between items-center gap-x-[8px] py-[8px] px-[8px] rounded-[2px] w-full"
      style={{ backgroundColor: themeContext?.theme.activeColor }}
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
