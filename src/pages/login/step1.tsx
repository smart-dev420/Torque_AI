import Logo from '../../assets/imgs/login/logo.png';
import { useRouter } from '../../routes/hooks/index';
export const Step1: React.FC = () => {
    const router = useRouter();
    const handlNext = () => {
        router.push('/login/step2');
    }
    return (
        <div className='bg-[#000] w-full h-dvh'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <div className='pt-[64px] '>
                    <img src={Logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                </div>
                <div className='mt-[64px] rounded-[8px] bg-[#141414] max-h-[640px] h-full flex-col text-center	px-[40px]'>
                    <div className='pt-[40px]'>
                        <span className='font-h2-700 font-grey '>Get Started</span>
                    </div>
                    <div className='pt-[16px] font-grey1 font-b1-400 '>
                        Welcome to Torque AI! Let's set up your account to unlock powerful marketing insights.
                    </div>
                    <div className='pt-[32px] w-full max-h-[382px] h-full'>

                    </div>
                    <div className='pt-[8px] font-b3-400 font-grey1'>
                        Watch Explainer Video
                    </div>
                    <div className='pt-[32px] pb-[40px]'>
                        <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-white' onClick={handlNext}>Let's Get Started</button>
                    </div>
                </div>

                <div className='pt-[64px] w-full h-[8px] flex flex-row gap-[8px]'>
                    <div className='bg-[#6775F0]  h-[8px] w-full rounded-l-lg'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-r-lg'></div>
                </div>
            </div>
        </div>
    )
}