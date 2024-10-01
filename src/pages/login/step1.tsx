import { imageAssets } from '../../utils/constant';
import { motion, Variants } from 'framer-motion';
import { useLocation } from "react-router-dom"

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

interface StepProps {
    setPages: (n: number) => void;
}

export const Step1 = ( { setPages }: StepProps ) => {
    const location = useLocation();
    const handlNext = () => {
        // navigate('/login/step2', { state: { id: 1, name: 'step1' } })
        setPages(1);
    }
    return (
        <div>
            <motion.section
                variants={pageVariant}
                initial={(location.hasOwnProperty('state.name')) ? "initial" : "initial2"}
                animate="animate"
                exit="exit">
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
            </motion.section>
        </div>



    )
}