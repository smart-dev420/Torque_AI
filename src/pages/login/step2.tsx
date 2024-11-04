
import { pageVariant } from './progressbar';
import { useLocation } from "react-router-dom"
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomSelect, { CustomMenuItem } from '../component/customSelect';
import UserContext from '../../utils/userContext';
import { toast } from 'react-hot-toast';
export const Step2 = ({ setPages }: any) => {
    const location = useLocation();
    const { setExperience } = useContext(UserContext);
    const industryList = [
        {value : 'Retail', name:'Retail'},
        {value : 'Technology', name:'Technology'},
        {value : 'Finance', name:'Finance'},
        {value : 'Healthcare', name:'Healthcare'},
        {value : 'Real Estate', name:'Real Estate'},
    ]

    const roleList = [
        {value : 'CMO', name:'CMO'},
        {value : 'Marketing Manager', name:'Marketing Manager'},
        {value : 'Digital Marketing Specialist', name:'Digital Marketing Specialist'},
        {value : 'Growth Hacker', name:'Growth Hacker'},
        {value : 'CEO', name:'CEO'},
    ]

    const teamList = [
        {value : '1-10', name:'1-10'},
        {value : '11-50', name:'11-50'},
        {value : '51-200', name:'51-200'},
        {value : '201-500', name:'201-500'},
        {value : '500+', name:'500+'},
    ]

    const [companyName, setCompanyName] = useState('');
    const [industry, setIndustry] = useState('Retail');
    const [role, setRole] = useState('CMO');
    const [teamsize, setTeamsize] = useState('1-10');

    const [goback, setGoBack] = useState<boolean>(false);
    const handleNext = async () => {
        if(companyName === '')
        {
            toast.error('Company Name is required');
            return;
        }
        setGoBack(false);
        setPages(2)
        setExperience(
        {
            companyName, industry, role, teamsize
        }
        );
    }
    const handleBack = () => {
        setGoBack(true);
        setPages(0);
    }

    return (

        <div >
            <motion.section
                variants={pageVariant}
                initial={location.state?.name === "step1" ? "initial2" : "initial"}
                animate="animate"
                exit={goback ? "exit2" : "exit"}
            >
                <div className='pt-[40px]'>
                    <span className='font-h2-700 font-grey '>Account Setup</span>
                </div>
                <div className='pt-[16px] font-grey1 font-b1-400 '>
                    Tell us about your business to personalize your experience.
                </div>
                <div className='pt-[63px] w-full flex flex-col'>
                    <div className='flex flex-col gap-[8px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Company Name
                        </div>
                        <input className='input-text font-b4-500 font-grey1' type='text' placeholder='Acme Inc.' onChange={(e) => setCompanyName(e.target.value)} value={companyName} required/>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Industry
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
                            
                            value={industry}
                            onChange={(e: SelectChangeEvent<any>) => setIndustry(e.target.value)}
                        >
                            {
                                industryList.map(item => (
                                     <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>

                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Role
                        </div>
                        <CustomSelect className='font-b4-500'
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
                                        width: '100px !important',
                                    },
                                },
                            }}
                            value={role}
                            onChange={(e: SelectChangeEvent<any>) => setRole(e.target.value)}
                        >
                            {
                                roleList.map(item => (
                                     <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Team Size
                        </div>
                        <CustomSelect className='font-b4-500'
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
                                        width: '100px !important',
                                    },
                                },
                            }}
                            value={teamsize}
                            onChange={(e: SelectChangeEvent<any>) => setTeamsize(e.target.value)}
                        >
                            {
                                teamList.map(item => (
                                     <CustomMenuItem value={item.value}>{item.name}</CustomMenuItem>
                                ))
                            }
                        </CustomSelect>
                    </div>
                </div>
                <div className='md:pt-[114px] pt-[88px] pb-[40px] flex flex-row justify-between'>
                    <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                    <button className='w-[50px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Next</button>
                </div>
            </motion.section>
        </div>

    )
};