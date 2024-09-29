
import { imageAssets } from '../../utils/constant';
import { ProgressBar, pageVariant } from './progressbar';
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';
import { useState } from 'react';



export const Step2: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const [goback, setGoBack] = useState<boolean>(false);
    const handleNext = () => {
        navigate('/login/step3', { state: { id: 2, name: 'step2' } })
        setGoBack(false);
    }
    const handleBack = () => {
        navigate('/login', { state: { id: 2, name: 'step2' } })
        setGoBack(true);
    }
    return (
        <div className='bg-[#000] w-full min-h-screen'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <motion.section
                    variants={pageVariant}
                    initial={location.state.name === "step1" ? "initial2" : "initial"}
                    animate="animate"
                    exit={goback ? "exit2" : "exit"}
                >
                    <div className='pt-[64px] '>
                        <img src={imageAssets.logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                    </div>
                    <div className='mt-[64px] rounded-[8px] bg-[#141414] h-[670px] flex-col text-center	px-[40px]'>
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
                                <input className='input-text font-b4-500 font-grey1' type='text' placeholder='Acme Inc.' />
                            </div>

                            <div className='flex flex-col gap-[8px] pt-[16px]'>
                                <div className='font-h5-700 font-grey1 text-left'>
                                    Industry
                                </div>
                                <select className='font-b4-500 input-text input-select'>
                                    <option>Retail</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-[8px] pt-[16px]'>
                                <div className='font-h5-700 font-grey1 text-left'>
                                    Role
                                </div>
                                <select className='font-b4-500  input-text input-select'>
                                    <option>CMO</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-[8px] pt-[16px]'>
                                <div className='font-h5-700 font-grey1 text-left'>
                                    Team Size
                                </div>
                                <select className='font-b4-500 input-text input-select'>
                                    <option>1-10</option>
                                </select>
                            </div>
                        </div>
                        <div className='pt-[114px] pb-[40px] flex flex-row justify-between'>
                            <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                            <button className='w-[50px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Next</button>
                        </div>
                    </div>

                </motion.section>
                <ProgressBar step={1} />
            </div>
        </div>
    )
};