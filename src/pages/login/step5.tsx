import Logo from '../../assets/imgs/login/logo.png';
import stee from '../../assets/imgs/login/stee.png';
import hni from '../../assets/imgs/login/hni.png';
import ashely from '../../assets/imgs/login/ashely.png';
import herman from '../../assets/imgs/login/herman.png';
import la from '../../assets/imgs/login/la.png';
import williams from '../../assets/imgs/login/williams.png';
import haworth from '../../assets/imgs/login/haworth.png';
import ikea from '../../assets/imgs/login/ikea.png';
import kimball from '../../assets/imgs/login/kimball.png';

import { useRouter } from '../../routes/hooks/index';

export const Step5: React.FC = () => {

    const router = useRouter();
    const handleNext = () => {
        router.push('/login/step6');
    }
    const handleBack = () => {
        router.push('/login/step4');
    }
    return  (
        <div className='bg-[#000] w-full h-dvh'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <div className='pt-[64px] '>
                    <img src={Logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                </div>
                <div className='mt-[64px] rounded-[8px] bg-[#141414] max-h-[670px] h-full flex-col text-center	px-[40px]'>
                    <div className='pt-[40px]'>
                        <span className='font-h2-700 font-grey '>Competitor Mapping</span>
                    </div>
                    <div className='pt-[16px] font-grey1 font-b1-400 '>
                        Identify your key competitors to unlock strategic insights.
                    </div>

                    <div className='flex flex-row gap-[8px] mt-[32px]'>
                        <button className='img-btn '><img src={stee} alt=''/></button>
                        <button className='img-btn '><img src={hni} alt=''/></button>
                        <button className='img-btn '><img src={ashely} alt=''/></button>
                    </div>

                    <div className='flex flex-row gap-[8px] mt-[8px]'>
                        <button className='img-btn '><img src={herman} alt=''/></button>
                        <button className='img-btn '><img src={la} alt=''/></button>
                        <button className='img-btn '><img src={williams} alt=''/></button>
                    </div>

                    <div className='flex flex-row gap-[8px] mt-[8px]'>
                        <button className='img-btn '><img src={haworth} alt=''/></button>
                        <button className='img-btn '><img src={ikea} alt=''/></button>
                        <button className='img-btn '><img src={kimball} alt=''/></button>
                    </div>

                    <div className='pt-[52px] pb-[40px] flex flex-row justify-between'>
                        <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={()=>handleBack()}>Go Back</button>
                        <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={()=>handleNext()}>Let’s Get Started</button>
                    </div>
                </div>

                <div className='pt-[54px] w-full h-[8px] flex flex-row gap-[8px]'>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-l-lg'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#6775F0]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-r-lg'></div>
                </div>
            </div>
        </div>
    )
};