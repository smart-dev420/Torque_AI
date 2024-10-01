import { useState } from 'react';
import { imageAssets, iconAssets } from '../../utils/constant';
import { pageVariant } from './progressbar';
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"

export const Step3= ({setPages} : any) => {

    const [goback, setGoBack] = useState<boolean>(false);

    const location = useLocation();

    const handleNext = () => {
        setGoBack(false)
        setPages(3);
    }
    const handleBack = () => {
        setGoBack(true)
        setPages(1)
    }
    return (
        <div>
            <motion.section
                variants={pageVariant}
                initial={location.state?.name === "step2" ? "initial2" : "initial"}
                animate="animate"
                exit={goback ? "exit2" : "exit"}
            >
                <div className='pt-[40px]'>
                    <span className='font-h2-700 font-grey '>Connect Your Data</span>
                </div>
                <div className='pt-[16px] font-grey1 font-b1-400 '>
                    Link your data sources to fuel powerful insights.
                </div>
                <div className='mt-[16px] h-[24px] w-fit flex flex-row gap-[7.33px] rounded-full bg-[#0D102F] place-content-center items-center px-[8px] py-[4px] mx-auto'>
                    <img src={iconAssets.ic_lock} alt='' className='w-[9.3px] h-[12px]' />
                    <span className='text-white font-b4-500'>Your data is anonymized and securely handled.</span>
                </div>

                <div className='mt-[37.5px] mx-auto'>
                    <div className='font-b2-400 font-grey'>Analytics</div>
                    <button className='img-btn mt-[16px]'><img src={imageAssets.analytics} alt='' /></button>
                </div>
                <div className='mt-[32px] mx-auto'>
                    <div className='font-b2-400 font-grey'>Social Media</div>
                    <div className='flex flex-row gap-[8px] mt-[16px]'>
                        <button className='img-btn '><img src={imageAssets.facebook} alt='' /></button>
                        <button className='img-btn '><img src={imageAssets.instagram} alt='' /></button>
                        <button className='img-btn '><img src={imageAssets.linkedin} alt='' /></button>
                        <button className='img-btn '><img src={imageAssets.twitter} alt='' /></button>
                    </div>
                </div>

                <div className='mt-[32px] mx-auto'>
                    <div className='font-b2-400 font-grey'>CRM</div>
                    <div className='flex flex-row gap-[8px] mt-[16px]'>
                        <button className='img-btn '><img src={imageAssets.hubspot} alt='' /></button>
                        <button className='img-btn '><img src={imageAssets.mail} alt='' /></button>
                        <button className='img-btn '><img src={imageAssets.saleforce} alt='' /></button>
                    </div>
                </div>

                <div className='pt-[32px] pb-[40px] flex flex-row justify-between'>
                    <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                    <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Let’s Get Started</button>
                </div>
            </motion.section>
        </div>

    )
};