import { imageAssets } from '../../utils/constant';
import { ProgressBar } from './progressbar';
import { motion, Variants } from 'framer-motion';
import { useLocation, useNavigate } from "react-router-dom"

const pageVariant: Variants = {
    initial: {
        x: '-60%',
        opacity: 0
    },
    initial2: {
        opacity: 0
    },
    animate: {
        x: '0%',
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.6,
            ease: 'easeInOut'
        }
    },
    exit: {
        x: '-60%',
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
}

export const Step1: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handlNext = () => {
        navigate('/login/step2', { state: { id: 1, name: 'step1' } })
    }
    return (
        <div className='bg-[#000] w-full min-h-screen'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <motion.section
                    variants={pageVariant}
                    initial={(location.hasOwnProperty('state.name')) ? "initial" : "initial2"}
                    animate="animate"
                    exit="exit">
                    <div className='pt-[64px] '>
                        <img src={imageAssets.logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                    </div>
                    <div className='mt-[64px] rounded-[8px] bg-[#141414] max-h-[640px] h-full flex-col text-center	px-[40px]'>
                        <div className='pt-[40px]'>
                            <span className='font-h2-700 font-grey '>Get Started</span>
                        </div>
                        <div className='pt-[16px] font-grey1 font-b1-400 '>
                            Welcome to Torque AI! Let's set up your account to unlock powerful marketing insights.
                        </div>
                        <div className='pt-[32px] w-full max-h-[382px] h-full'>
                            <img src={imageAssets.content} alt='Video' />
                        </div>
                        <div className='pt-[8px] font-b3-400 font-grey1'>
                            Watch Explainer Video
                        </div>
                        <div className='pt-[32px] pb-[40px]'>
                            <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-white' onClick={handlNext}>Let's Get Started</button>
                        </div>
                    </div>

                </motion.section>
                <ProgressBar step={0} />
            </div>
        </div>
    )
}