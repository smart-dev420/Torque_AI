import Logo from '../../assets/imgs/login/logo.png';
import { useRouter } from '../../routes/hooks/index';
export const Step4: React.FC = () => {

    const router = useRouter();
    const handleNext = () => {
        router.push('/login/step5');
    }
    const handleBack = () => {
        router.push('/login/step3');
    }
    return  (
        <div className='bg-[#000] w-full h-dvh'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <div className='pt-[64px] '>
                    <img src={Logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                </div>
                <div className='mt-[64px] rounded-[8px] bg-[#141414] h-[670px] flex-col text-center	px-[40px]'>
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
                        <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={()=>handleBack()}>Go Back</button>
                        <button className='w-[76px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={()=>handleNext()}>Set Goals</button>
                    </div>
                </div>

                <div className='pt-[54px] w-full h-[8px] flex flex-row gap-[8px]'>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-l-lg'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#6775F0]  h-[8px] w-full' ></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-r-lg'></div>
                </div>
            </div>
        </div>
    )
};