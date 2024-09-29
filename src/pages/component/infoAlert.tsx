import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
export const InfoAlert: React.FC<{str : string}> = ({ str}) => {

    return (
        <div className="flex flex-row gap-[8px] p-[8px] bg-[#292929] text-left rounded-[4px]" >
            <ArrowCircleUpIcon style={{color:'#4152EC', fontSize:'9px'}} className='self-center'/>
            <div className="font-button-700 text-left">
                {str}
            </div>
        </div>
    );
}