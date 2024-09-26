import Logo from '../../assets/imgs/login/logo.png';
import Lock from '../../assets/imgs/login/ic_lock.png';
import Analytics from '../../assets/imgs/login/analytics.png';
import facebook from '../../assets/imgs/login/facebook.png';
import instgram from '../../assets/imgs/login/instgram.png';
import linkedin from '../../assets/imgs/login/linkedin.png';
import twitter from '../../assets/imgs/login/twitter.png';
import Hubspot from '../../assets/imgs/login/hubspot.png';
import Mail from '../../assets/imgs/login/mail.png';
import Saleforce from '../../assets/imgs/login/saleforce.png';

import { useRouter } from '../../routes/hooks/index';
export const Step3: React.FC = () => {

    const router = useRouter();
    const handleNext = () => {
        router.push('/login/step4');
    }
    const handleBack = () => {
        router.push('/login/step2');
    }
    return  (
        <div className='bg-[#000] w-full h-dvh'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <div className='pt-[64px] '>
                    <img src={Logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                </div>
                <div className='mt-[64px] rounded-[8px] bg-[#141414] max-h-[670px] h-full flex-col text-center	px-[40px]'>
                    <div className='pt-[40px]'>
                        <span className='font-h2-700 font-grey '>Connect Your Data</span>
                    </div>
                    <div className='pt-[16px] font-grey1 font-b1-400 '>
                        Link your data sources to fuel powerful insights.
                    </div>
                    <div className='mt-[16px] h-[24px] w-fit flex flex-row gap-[7.33px] rounded-full bg-[#0D102F] place-content-center items-center px-[8px] py-[4px] mx-auto'>
                        <img src={Lock} alt='' className='w-[9.3px] h-[12px]'/> 
                        <span className='text-white font-b4-500'>Your data is anonymized and securely handled.</span>
                    </div>

                    <div className='mt-[37.5px] mx-auto'>
                        <div className='font-b2-400 font-grey'>Analytics</div>
                        <button className='img-btn mt-[16px]'><img src={Analytics} alt=''/></button>
                    </div>
                    <div className='mt-[32px] mx-auto'>
                        <div className='font-b2-400 font-grey'>Social Media</div>
                        <div className='flex flex-row gap-[8px] mt-[16px]'>
                            <button className='img-btn '><img src={facebook} alt=''/></button>
                            <button className='img-btn '><img src={instgram} alt=''/></button>
                            <button className='img-btn '><img src={linkedin} alt=''/></button>
                            <button className='img-btn '><img src={twitter} alt=''/></button>
                        </div>
                    </div>

                    <div className='mt-[32px] mx-auto'>
                        <div className='font-b2-400 font-grey'>CRM</div>
                        <div className='flex flex-row gap-[8px] mt-[16px]'>
                            <button className='img-btn '><img src={Hubspot} alt=''/></button>
                            <button className='img-btn '><img src={Mail} alt=''/></button>
                            <button className='img-btn '><img src={Saleforce} alt=''/></button>
                        </div>
                    </div>

                    <div className='pt-[32px] pb-[40px] flex flex-row justify-between'>
                        <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={()=>handleBack()}>Go Back</button>
                        <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={()=>handleNext()}>Let’s Get Started</button>
                    </div>
                </div>

                <div className='pt-[54px] w-full h-[8px] flex flex-row gap-[8px]'>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-l-lg'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#6775F0]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-r-lg'></div>
                </div>
            </div>
        </div>
    )
};