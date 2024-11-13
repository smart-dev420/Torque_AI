import { ReactElement, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { InfoAlert } from "../component/infoAlert";
import { imageAssets } from "../../utils/constant";
import { FirstIconTable, SecondTable } from "./iconTable";
import { KeyTable } from "./keyTable";
import { Modal, Box, Typography, Button } from '@mui/material';

import keyword from '../../services/keyword.json';
import axios from "axios";
import { FavoriteLaptopIcon, FBIcon, GoogleIcon, SendIcon } from "../component/icons";
export const Campaigns = () => {
  const themeContext = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perform, setPerform] = useState<Perform>({
    name : '',
    impressions: 0,
    clicks: 0,
    ctr: 0,
    cpa: 0,
    conversions: 0,
    ai_score : 0
});
interface Perform {
  name : string;
  impressions: number;
  clicks: number;
  ctr: number;
  cpa: number;
  conversions: number;
  ai_score : number;
}
  const access_token = localStorage.getItem('access_token');
  useEffect(()=>{
    initialze();
  }, []);

  const initialze = async () => {
    try{
      await axios.post(`${process.env.REACT_APP_SERVER}/campaigns`, {
        refresh_token : access_token
        // refresh_token : "1//0e4mp8XEl_QkWCgYIARAAGA4SNwF-L9IrWpmarCLxLRgXhNrFp-i0BZk8m67o5feQiiPKYDAVXHYpe86ZOxckvaoZw7gai_gIUX0"
      }).then((res) => {
        setPerform(res.data?.perform[0]);
      })
    } catch (e) {
      console.log(e);
    }
  }
  const handleExploreClick = () => {
    setIsModalOpen(true); // Open the modal when "Explore Keywords" is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal when the user clicks "Close"
  };

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
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col md:w-[60%] gap-y-[16px]">
          <div
            className="flex flex-col gap-x-[10px] rounded-[8px] p-6 gap-y-4"
            style={{ backgroundColor: themeContext?.theme.foreground }}
          >
            <div className="flex flex-row rounded-[8px] items-center gap-x-2">
              <h3>Optimize Your Latest Campaign</h3>
              <InfoOutlinedIcon sx={{ width: 15 }} />
            </div>
            <h5>{perform.name}</h5>
            <FirstIconTable data = {perform}/>
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
            <KeyTable keyword={keyword} limit={3} />
            <div className="flex justify-end title-f12-700">
              <button
                className="px-[15px] rounded-[50px]"
                style={{
                  backgroundColor: themeContext?.theme.activeButtonBackground,
                  color: themeContext?.theme.activeColor,
                }}
                onClick={() => handleExploreClick()}
              >
                Explore Opportunities
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
          </div>
        </div>
        <div
          className="flex flex-col md:w-[40%] rounded-[8px] p-6 gap-y-4"
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
              <GoogleIcon />
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
