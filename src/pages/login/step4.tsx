
import {  useLocation } from "react-router-dom"
import { motion } from "framer-motion";
import {  pageVariant } from './progressbar';
import { useContext, useState } from 'react';
import CustomSelect, { CustomMenuItem } from '../component/customSelect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox } from "@mui/material";
import UserContext from "../../utils/userContext";
export const Step4  = ({setPages} : any) => {
    const goalList = [
        {value : 'Increase Conversions', name:'Increase Conversions'},
        {value : 'Reduce CPA', name:'Reduce CPA'},
        {value : 'Improve CTR', name:'Improve CTR'},
        {value : 'Boost Brand Awareness', name:'Boost Brand Awareness'},
        {value : 'Grow Social Engagement', name:'Grow Social Engagement'},
    ]

    const metricsList = [
        {value : 'CTR', name:'CTR'},
        {value : 'Conversion Rate', name:'Conversion Rate'},
        {value : 'CPA', name:'CPA'},
        {value : 'ROAS', name:'ROAS'},
        {value : 'Impression Share', name:'Impression Share'},

    ];

    const preferredList = [
        {value : 'Google Ads', name:'Google Ads'},
        {value : 'Meta (Facebook & Instagram)', name:'Meta (Facebook & Instagram)'},
        {value : 'LinkedIn Ads', name:'LinkedIn Ads'},
        {value : 'YouTube Ads', name:'YouTube Ads'},
        {value : 'Programmatic Display', name:'Programmatic Display'},
    ];

    const budgetList = [
        {value : '$1,000 - $5,000', name:'$1,000 - $5,000'},
        {value : '$5,001 - $10,000', name:'$5,001 - $10,000'},
        {value : '$10,001 - $20,000', name:'$10,001 - $20,000'},
        {value : '$20,001 - $50,000', name:'$20,001 - $50,000'},
        {value : '$50,000+', name:'$50,000+'},
    ];
    const [goback, setGoBack] = useState<boolean>(false);
    const [goal , setGoal] = useState(['Increase Conversions']);
    const [metrics , setMetrics] = useState(['CTR']);
    const [preferred , setPreferred] = useState(['Google Ads']);
    const [budget, setBudget] = useState(['$1,000 - $5,000']);
    const location = useLocation();

    const { setGoals } = useContext(UserContext);

    const handleNext = () => {
        setGoBack(false)
        setPages(4);
        setGoals({
            goal, metrics, preferred, budget
        });
    }
    const handleBack = () => {
        setGoBack(true)
        setPages(2);
    }
    return (
        <div>
            <motion.section
                variants={pageVariant}
                initial={location.state?.name === "step3" ? "initial2" : "initial"}
                animate="animate"
                exit={goback ? "exit2" : "exit"}>
                <div className='pt-[40px]'>
                    <span className='font-h2-700 font-grey '>Define Your Goals</span>
                </div>
                <div className='pt-[16px] font-grey1 font-b1-400 '>
                    Set your marketing goals to get personalized recommendations.
                </div>
                <div className='pt-[63px] w-full flex flex-col'>
                    <div className='flex flex-col gap-[8px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Primary Goals
                        </div>
                        <CustomSelect
                            IconComponent={(props) => (
                                <KeyboardArrowDownIcon
                                    {...props}
                                    sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                                />
                            )}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#292929',
                                        borderRadius: '8px',
                                    },
                                },
                            }}
                            multiple
                            renderValue={(selected:any) => selected.join(', ')}
                            value={goal}
                            onChange={(e: SelectChangeEvent<any>) => setGoal(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
                        >
                            {
                                goalList.map(item => (
                                     <CustomMenuItem value={item.value}><Checkbox checked={goal.includes(item.name)} />{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Target Metrics
                        </div>
                        <CustomSelect
                            IconComponent={(props) => (
                                <KeyboardArrowDownIcon
                                    {...props}
                                    sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                                />
                            )}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#292929',
                                        borderRadius: '8px',
                                    },
                                },
                            }}
                            multiple
                            renderValue={(selected:any) => selected.join(', ')}
                            value={metrics}
                            onChange={(e: SelectChangeEvent<any>) => setMetrics(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
                        >
                            {
                                metricsList.map(item => (
                                     <CustomMenuItem value={item.value}><Checkbox checked={metrics.includes(item.name)} />{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Preferred Channels
                        </div>
                        <CustomSelect
                            IconComponent={(props) => (
                                <KeyboardArrowDownIcon
                                    {...props}
                                    sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                                />
                            )}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#292929',
                                        borderRadius: '8px',
                                    },
                                },
                            }}
                            multiple
                            renderValue={(selected:any) => selected.join(', ')}
                            value={preferred}
                            onChange={(e: SelectChangeEvent<any>) => setPreferred(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
                        >
                            {
                                preferredList.map(item => (
                                     <CustomMenuItem value={item.value}><Checkbox checked={preferred.includes(item.name)} />{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Budget Range
                        </div>
                        <CustomSelect
                            IconComponent={(props) => (
                                <KeyboardArrowDownIcon
                                    {...props}
                                    sx={{ color: '#D9DCFB !important', fontSize: '30px' }}  // Set custom color here
                                />
                            )}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: '#292929',
                                        borderRadius: '8px',
                                    },
                                },
                            }}
                            
                            value={budget}
                            onChange={(e: SelectChangeEvent<any>) => setBudget(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value,)}
                        >
                            {
                                budgetList.map(item => (
                                     <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>
                    </div>
                </div>
                <div className='pt-[114px] pb-[40px] flex flex-row justify-between'>
                    <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                    <button className='w-[76px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Set Goals</button>
                </div>
            </motion.section>
        </div>

    )
};