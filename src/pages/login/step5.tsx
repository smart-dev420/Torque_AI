import { imageAssets } from '../../utils/constant';
import { ProgressBar, pageVariant } from './progressbar';
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion";
import { useState } from 'react';

export const Step5: React.FC = () => {
    const navigate = useNavigate()
    const [goback, setGoBack] = useState<boolean>(false);

    const location = useLocation();
    const handleNext = () => {
        setGoBack(false)
        navigate('/login/step6', { state: { id: 5, name: 'step5' } })
    }
    const handleBack = () => {
        setGoBack(true)
        navigate('/login/step4', { state: { id: 5, name: 'step5' } })
    }
    return (
        <div className='bg-[#000] w-full min-h-screen'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <motion.section
                    variants={pageVariant}
                    initial={location.state.name === "step4" ? "initial2" : "initial"}
                    animate="animate"
                    exit={goback ? "exit2" : "exit"}>
                    <div className='pt-[64px] '>
                        <img src={imageAssets.logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                    </div>
                    <div className='mt-[64px] rounded-[8px] bg-[#141414] max-h-[670px] h-full flex-col text-center	px-[40px]'>
                        <div className='pt-[40px]'>
                            <span className='font-h2-700 font-grey '>Competitor Mapping</span>
                        </div>
                        <div className='pt-[16px] font-grey1 font-b1-400 '>
                            Identify your key competitors to unlock strategic insights.
                        </div>

                        <div className='flex flex-row gap-[8px] mt-[32px]'>
                            <button className='img-btn '><img src={imageAssets.steelcase} alt='' /></button>
                            <button className='img-btn '><img src={imageAssets.hni} alt='' /></button>
                            <button className='img-btn '><img src={imageAssets.ashely} alt='' /></button>
                        </div>

                        <div className='flex flex-row gap-[8px] mt-[8px]'>
                            <button className='img-btn '><img src={imageAssets.herman} alt='' /></button>
                            <button className='img-btn '><img src={imageAssets.la} alt='' /></button>
                            <button className='img-btn '><img src={imageAssets.williams} alt='' /></button>
                        </div>

                        <div className='flex flex-row gap-[8px] mt-[8px]'>
                            <button className='img-btn '><img src={imageAssets.haworth} alt='' /></button>
                            <button className='img-btn '><img src={imageAssets.ikea} alt='' /></button>
                            <button className='img-btn '><img src={imageAssets.kimball} alt='' /></button>
                        </div>

                        <div className='pt-[52px] pb-[40px] flex flex-row justify-between'>
                            <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                            <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Let’s Get Started</button>
                        </div>
                    </div>

                </motion.section>
                <ProgressBar step={4} />
            </div>
        </div>
    )
};