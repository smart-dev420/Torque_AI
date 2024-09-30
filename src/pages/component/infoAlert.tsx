import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useContext } from "react";
import { ThemeContext } from "../../components/Theme/context";
export const InfoAlert: React.FC<{str : string}> = ({ str}) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="flex flex-row gap-[8px] p-[8px] text-left rounded-[4px]" style={{backgroundColor:themeContext?.theme.inputBackground}}>
            <ArrowCircleUpIcon style={{color:'#4152EC', fontSize:'9px'}} className='self-center'/>
            <div className="font-button-700 text-left">
                {str}
            </div>
        </div>
    );
}