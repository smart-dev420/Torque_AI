import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
export const PersonCard: React.FC<{title : string, author:string, age:number, perference : string , top: string , tradit:string, strategies: string}> = ({ title ,author, age ,perference, top , tradit , strategies }) => {

    return (
        <div className="flex flex-col gap-[25px] p-[16px] bg-[#000] text-left rounded-[4px]" >
            <div className="font-button-700 font-faded">{title}</div>
            <div className="font-grey font-button-700">{author}</div>
            <div className='font-grey1 font-b5-500 grid grid-cols-6 gap-[8px]'>
                <div className="col-span-2 bg-[#0D102F] p-[8px] flex flex-col gap-[8px]">
                    <div className='font-b5-500 font-grey1'><EditCalendarIcon style={{fontSize:'12px'}}/> Age</div>
                    <div className='font-b5-500 text-[#4152EC]'> {age}</div>
                </div>
                <div className="col-span-2 bg-[#0D102F] p-[8px] flex flex-col gap-[8px]">
                    <div className='font-b5-500 font-grey1'><AccountCircleOutlinedIcon style={{fontSize:'12px'}}/> Preferences</div>
                    <div className='font-b5-500 text-[#4152EC]'> {perference}</div>
                </div>
                <div className="col-span-2 bg-[#0D102F] p-[8px] flex flex-col gap-[8px]">
                    <div className='font-b5-500 font-grey1'><LayersIcon style={{fontSize:'12px'}}/> Top Channels</div>
                    <div className='font-b5-500 text-[#4152EC]'> {top}</div>
                </div>
                <div className="col-span-3 bg-[#0D102F] p-[8px] flex flex-col gap-[8px]">
                    <div className='font-b5-500 font-grey1'><GpsFixedOutlinedIcon style={{fontSize:'12px'}}/> Key Traits</div>
                    <div className='font-b5-500 text-[#4152EC]'> {tradit}</div>
                </div>
                <div className="col-span-3 bg-[#0D102F] p-[8px] flex flex-col gap-[8px]">
                    <div className='font-b5-500 font-grey1'><SwapVertOutlinedIcon style={{fontSize:'12px'}}/> Suggested Strategies</div>
                    <div className='font-b5-500 text-[#4152EC]'> {strategies}</div>
                </div>
            </div>
        </div>
    );
}