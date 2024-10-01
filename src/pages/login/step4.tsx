
import {  useLocation } from "react-router-dom"
import { motion } from "framer-motion";
import {  pageVariant } from './progressbar';
import { useState } from 'react';

export const Step4  = ({setPages} : any) => {
    const [goback, setGoBack] = useState<boolean>(false);

    const location = useLocation();

    const handleNext = () => {
        setGoBack(false)
        setPages(4);
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
                        <select className='font-b4-500 input-text input-select'>
                            <option>Increase Conversions, Reduce CPA, Improve Brand Awareness, Grow Social...</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Target Metrics
                        </div>
                        <select className='font-b4-500 input-text input-select'>
                            <option>CTR, Conversion Rate, CPA</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Preferred Channels
                        </div>
                        <select className='font-b4-500  input-text input-select'>
                            <option>Owner, Paid, Earned</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-[8px] pt-[16px]'>
                        <div className='font-h5-700 font-grey1 text-left'>
                            Budget Range
                        </div>
                        <select className='font-b4-500 input-text input-select'>
                            <option>$1,000 - $5,000</option>
                        </select>
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