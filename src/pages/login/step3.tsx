import { useState, useContext } from 'react';
import { imageAssets, iconAssets } from '../../utils/constant';
import { pageVariant } from './progressbar';
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import UserContext from '../../utils/userContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { collection, getDocs, query, where, setDoc, addDoc } from "firebase/firestore";
import { firestore } from '../../components/Firebase/firebase';
export const Step3 = ({ setPages }: any) => {
    const navigate = useNavigate();
    const { setSocials, experience } = useContext(UserContext);
    const [loggedGoogle, setLoggedGoogle] = useState(false);
    const [goback, setGoBack] = useState<boolean>(false);
    const location = useLocation();
    const [socialList, setSocialList] = useState<string[]>([]);
    const [userMail, setUserMail] = useState('');

    const handleNext = async () => {
        const _token = localStorage.getItem('access_token');
        if (!_token) {
            login();
        }
        const userMail = localStorage.getItem('user_mail');
        if (userMail === '') {
            login();
        }
        else {
            await saveData();
            navigate('/dashboard', { state: { id: 3, name: 'step3' } })
            setGoBack(false);
        }
    };

    const handleBack = () => {
        setGoBack(true);
        setPages(1);
    };
    const selectList = (str: string) => {
        if (socialList.includes(str)) {
            // If str is already in the list, remove it
            setSocialList(socialList.filter(item => item !== str));
        } else {
            // If str is not in the list, add it
            setSocialList([...socialList, str]);
        }
    }

    const manageLog = () => {
        toast.success("Now, This app is running on Demo version");

    };

    const login = useGoogleLogin({
        flow: 'auth-code', // Explicitly use auth-code flow
        onSuccess: async (codeResponse) => {
            try {
                const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
                    code: codeResponse.code,
                    client_id: process.env.REACT_APP_CLIENT_ID, // Replace with your Google Client ID
                    client_secret: process.env.REACT_APP_CLIENT_SECRET, // Replace with your Google Client Secret
                    redirect_uri: process.env.REACT_APP_HOST, // Replace with your redirect URI
                    // redirect_uri: 'http://localhost:3000', // Replace with your redirect URI
                    grant_type: 'authorization_code',
                });

                const accessToken = tokenResponse.data.refresh_token;

                localStorage.setItem('access_token', accessToken);
                const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                // Log the user's email address
                const userEmail = userInfoResponse.data.email;

                localStorage.setItem('user_email', userEmail);
                setPages(1);
                // Now you can access the user's email address

            } catch (error) {
                toast.error('Error retrieving user info:' + error);
            }
        },
        onError: (errorResponse) => {
            toast.error('Login Failed:' + errorResponse);
        },
        scope: 'https://www.googleapis.com/auth/adwords', // Google Ads API scope
    });

    const saveData = async () => {
        setSocials(socialList);
        try {
            // Query to check if an experience document for the selected user exists
            const q = query(collection(firestore, "initSetting"), where("userMail", "==", userMail)); // Replace selectedUserId with your actual user ID

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // If no document exists, create a new one
                const docRef = await addDoc(collection(firestore, "initSetting"), {
                    experience,
                    socialList,
                    userMail, // Make sure to include userId to associate the experience
                });

                console.log("New document created with ID: ", docRef.id);
            } else {
                // If the document exists, update it
                querySnapshot.forEach(async (doc) => {
                    await setDoc(doc.ref, {
                        experience,
                        socialList
                    }, { merge: true }); // Use merge: true to only update specified fields

                    console.log("Document updated with ID: ", doc.id);
                });
            }
        } catch (e) {
            console.error("Error adding/updating document: ", e);
        }
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
                    <span className='font-h2-700 font-grey'>Connect Your Data</span>
                </div>
                <div className='pt-[16px] font-grey1 font-b1-400'>
                    Link your data sources to fuel powerful insights.
                </div>
                <div className='mt-[16px] h-[24px] w-fit flex flex-row gap-[7.33px] rounded-full bg-[#0D102F] place-content-center items-center px-[8px] py-[4px] mx-auto'>
                    <img src={iconAssets.ic_lock} alt='' className='w-[9.3px] h-[12px]' />
                    <span className='text-white font-b4-500'>Your data is anonymized and securely handled.</span>
                </div>

                <div className='md:mt-[162px] mt-[142px] mx-auto'>
                    <div className='font-b2-400 font-grey'>Analytics</div>
                    <div className='flex flex-row gap-[16px] justify-self-center'>
                        <button className='img-btn mt-[16px]' onClick={manageLog}><img src={imageAssets.analytics} alt='' /></button>
                        <button className='img-btn mt-[16px]' onClick={manageLog}><img src={imageAssets.csv} alt='' /></button>
                    </div>
                </div>


                {/* <div className='mt-[32px] mx-auto'>
                    <div className='font-b2-400 font-grey'>Social Media</div>
                    <div className='flex flex-row gap-[8px] mt-[16px]'>
                        <button className={socialList.includes('facebook') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('facebook')}><img src={imageAssets.facebook} alt='' /></button>
                        <button className={socialList.includes('instagram') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('instagram')}><img src={imageAssets.instagram} alt='' /></button>
                        <button className={socialList.includes('linkedin') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('linkedin')}><img src={imageAssets.linkedin} alt='' /></button>
                        <button className={socialList.includes('twitter') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('twitter')}><img src={imageAssets.twitter} alt='' /></button>
                    </div>
                </div>

                <div className='mt-[32px] mx-auto'>
                    <div className='font-b2-400 font-grey'>CRM</div>
                    <div className='flex flex-row gap-[8px] mt-[16px]'>
                        <button className={socialList.includes('hubspot') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('hubspot')}><img src={imageAssets.hubspot} alt='' /></button>
                        <button className={socialList.includes('mail') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('mail')}><img src={imageAssets.mail} alt='' /></button>
                        <button className={socialList.includes('saleforce') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('saleforce')}><img src={imageAssets.saleforce} alt='' /></button>
                    </div>
                </div> */}

                <div className='pt-[162px] pb-[40px] flex flex-row justify-between'>
                    <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white' onClick={() => handleBack()}>Go Back</button>
                    <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-blue' onClick={() => handleNext()}>Let’s Get Started</button>
                </div>
            </motion.section>
        </div>
    );
};
