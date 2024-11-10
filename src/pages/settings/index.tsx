import { useContext, useState } from "react";
import { ThemeContext } from "../../components/Theme/context";
import { IconButton } from "../layout/sidebar";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import LinkIcon from '@mui/icons-material/Link';
import InformationPage from "./information";
import Integration from "./integration";
const Settings = () => {
    const themeContext = useContext(ThemeContext);
    const [settingPage, setSettingPage] = useState(0);

    return (
        <div>
            {/** Title Part */}
            <div className="flex flex-row items-center my-[32px]">
                <label
                    className="title-f40-700 w-[30%]"
                    style={{ color: themeContext?.theme.titleColor }}
                >
                    Settings
                </label>
            </div>
            {/** Content Part */}
            <div className="flex flex-row gap-[32px] mt-[32px] w-full">
                <div className="w-[300px] shrink-0 rounded-[8px] p-[32px] flex flex-col gap-[16px]" style={{ backgroundColor: themeContext?.theme.foreground, height: 'calc(100vh - 242px)' }}>
                    <IconButton
                        key={0}
                        index={0}
                        isActive={settingPage === 0}
                        icon={<PersonOutlineIcon />}
                        text="Profile Information"
                        onClick={() => setSettingPage(0)}
                        isSidebar={true}
                    />

                    <IconButton
                        key={0}
                        index={0}
                        isActive={settingPage === 1}
                        icon={<LinkIcon />}
                        text="Integrations"
                        onClick={() => setSettingPage(1)}
                        isSidebar={true}
                    />
                </div>
                <div className="w-full mr-[24px] rounded-[8px] p-[32px] " style={{ backgroundColor: themeContext?.theme.foreground, height: 'calc(100vh - 242px)' }}>
                    <div className="flex flex-col gap-[16px] w-[90%] justify-self-center">
                        {
                            settingPage === 0 ? <InformationPage /> : <Integration/>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Settings;