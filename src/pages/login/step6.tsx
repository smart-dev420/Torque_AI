import Logo from '../../assets/imgs/login/logo.png';
import Hand from '../../assets/imgs/login/hand.png';
import Check from '../../assets/imgs/login/ic_check.png';
import radio1 from '../../assets/imgs/login/ic_radio_checked.png';
import radio2 from '../../assets/imgs/login/ic_radio_disabled.png';

import { useRouter } from '../../routes/hooks/index';

export const Step6: React.FC = () => {
    const router = useRouter();
    const handleNext = () => {
        router.push('/login/step6');
    }
    const handleBack = () => {
        router.push('/login/step5');
    }
    return (
        <div className='bg-[#000] w-full h-dvh'>
            <div className="max-w-[600px] w-full flex-col mx-[auto]">
                <div className='pt-[64px] '>
                    <img src={Logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
                </div>
                <div className='mt-[64px] rounded-[8px] bg-[#141414] h-[670px] flex-col text-center	px-[40px]'>
                    <div className='pt-[40px]'>
                        <span className='font-h2-700 font-grey '>Customize Your Dashboard</span>
                    </div>
                    <div className='pt-[16px] font-grey1 font-b1-400 '>
                        Customize your dashboard and notification settings for a tailored experience.
                    </div>
                    <div className='pt-[32px] w-full flex flex-col'>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='font-h5-700 font-grey1 text-left'>
                                Dashboard Preferences
                            </div>
                            <div className='font-b4-500 font-grey1 text-left'>
                                Drag and drop widgets to customize layout
                            </div>
                            <div className='grid grid-cols-2 gap-[8px]'>
                                <button className='btn-grey items-center place-content-center'><img src={Hand} alt='' /> <span className='font-b4-500'>Campaign Performance </span></button>
                                <button className='btn-grey items-center place-content-center'><img src={Hand} alt='' /> <span className='font-b4-500'>Strategy Insights </span></button>
                                <button className='btn-grey items-center place-content-center'><img src={Hand} alt='' /> <span className='font-b4-500'>Creative Highlights </span></button>
                                <button className='btn-grey items-center place-content-center'><img src={Hand} alt='' /> <span className='font-b4-500'>Key Settings & Alerts </span></button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[8px] mt-[16px]'>
                            <div className='font-h5-700 font-grey1 text-left'>
                                Notification Settings
                            </div>
                            <div className='font-b4-500 font-grey1 text-left'>
                                Toggle options for daily/weekly email summaries, real-time alerts on key changes, and benchmark updates.
                            </div>
                            <div className='flex flex gap-[8px]'>
                                <button className='btn-grey1 items-center place-content-center'><img src={Check} alt='' /> <span className='font-b4-500'>Daily email summary </span></button>
                                <button className='btn-grey1 items-center place-content-center'><img src={Check} alt='' /> <span className='font-b4-500'>Weekly email summary </span></button>
                            </div>
                            <div className='flex flex gap-[8px]'>
                                <button className='btn-grey1 items-center place-content-center'><img src={Check} alt='' /> <span className='font-b4-500'>Real-time alerts </span></button>
                                <button className='btn-grey1 items-center place-content-center'><img src={Check} alt='' /> <span className='font-b4-500'>Benchmark updates</span></button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[8px] mt-[16px]'>
                            <div className='font-h5-700 font-grey1 text-left'>
                                Dashboard Theme
                            </div>
                            <div className='flex flex-row gap-[8px]'>
                                <button className='btn-grey1 items-center place-content-center'><img src={radio1} alt='' /> <span className='font-b4-500'>Dark Mode </span></button>
                                <button className='btn-grey1 items-center place-content-center'><img src={radio2} alt='' /> <span className='font-b4-500'>Light Mode </span></button>

                            </div>
                        </div>

                    </div>
                    <div className='pt-[84px] pb-[40px] flex flex-row justify-between'>
                        <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                        <button className='w-[91px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Finish Setup</button>
                    </div>
                </div>

                <div className='pt-[54px] w-full h-[8px] flex flex-row gap-[8px]'>
                    <div className='bg-[#141414]  h-[8px] w-full rounded-l-lg'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full'></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#141414]  h-[8px] w-full' ></div>
                    <div className='bg-[#6775F0]  h-[8px] w-full rounded-r-lg'></div>
                </div>
            </div>
        </div>
    )
};