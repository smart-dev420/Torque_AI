import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
import EditIcon from '@mui/icons-material/Edit';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';
const Integration = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="flex flex-col">
            <div className='flex flex-col gap-[8px]'>
                <div className='font-h5-700 font-grey1 text-left'>
                    Analytics Account Name
                </div>
                <div className="flex flex-row gap-[32px]">
                    <input className='input-text font-b4-500 font-grey1 w-[70%]' type='text' placeholder='Analytics account' />
                    <button
                        className="px-[12px] rounded-[50px] Button w-[75px]"
                        style={{
                            backgroundColor: themeContext?.theme.activeButtonBackground,
                            color: themeContext?.theme.activeColor,
                        }}
                    >
                        <EditIcon style={{ fontSize: "13px" }} /> edit
                    </button>
                    <button
                        className="px-[12px] rounded-[50px] Button w-[121px] "
                        style={{
                            color: themeContext?.theme.activeButtonBackground,
                            background: 'none',
                            border:'1px solid #fff'
                        }}
                    >
                        <SensorsOffIcon style={{ fontSize: "13px" }} /> disconnect
                    </button>
                </div>
            </div>

        </div>
    );
}
export default Integration;