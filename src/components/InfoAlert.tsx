import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useContext } from 'react';
import { ThemeContext } from './Theme/context';
export const InfoAlert: React.FC<{str : string}> = ({ str}) => {
    const themeContext = useContext(ThemeContext);

    return (
        <div className="flex flex-row gap-[8px] p-2 text-left rounded-[4px] items-center mb-[16px]" style={{backgroundColor:themeContext?.theme.hoverBackground, color:themeContext?.theme.color}}>
            <ArrowCircleUpIcon style={{color:'#4152EC', fontSize:'16px'}} className='self-center'/>
            <p className="Button text-left">
                {str}
            </p>
        </div>
    );
}