import { imageAssets } from '../../utils/constant';
import {  pageVariant } from './progressbar';
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { useContext, useState } from 'react';
import UserContext from '../../utils/userContext';
import { collection, getDocs, query, where, setDoc, addDoc } from "firebase/firestore";
import { firestore } from '../../components/Firebase/firebase';
export const Step5 = ({setPages} : any) => {
    const [goback, setGoBack] = useState<boolean>(false);
    const [socialList, setSocialList] = useState<string[]>([]);
    const { setCompetitors, goals } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleNext = async () => {
        setGoBack(false)
        setCompetitors(socialList);
        await saveData();
        const _saveData = { goals, competitors:socialList };
        localStorage.setItem('goalSetting', JSON.stringify(_saveData));
        navigate('/dashboard');
    }
    const handleBack = () => {
        setGoBack(true)
        setPages(3);
    }

    const selectList = (str: string) => {
        if (socialList.includes(str)) {
            // If str is already in the list, remove it
            setSocialList(socialList.filter(item => item !== str));
        } else {
            // If str is not in the list, add it
            setSocialList([...socialList, str]);
        }
    }
    interface StoredData {
        experience: {
          companyName: string;
          industry: string;
          role: string;
          teamsize: string;
        };
        socialList: string[];
        email: string;
      }
    const saveData = async () => {
        const storedData = localStorage.getItem('initSetting');
        const parsedData: StoredData = JSON.parse(storedData?storedData : '');
        const mail:string = parsedData.email;
        try {
            // Query to check if an experience document for the selected user exists
            const q = query(collection(firestore, "goalSetting"), where("userMail", "==", mail)); // Replace selectedUserId with your actual user ID

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                // If no document exists, create a new one
                const docRef = await addDoc(collection(firestore, "goalSetting"), {
                    goals,
                    competitors:socialList,
                    mail, // Make sure to include userId to associate the experience
                });

                console.log("New document created with ID: ", docRef.id);
            } else {
                // If the document exists, update it
                querySnapshot.forEach(async (doc) => {
                    await setDoc(doc.ref, {
                        goals,
                        competitors:socialList,
                    }, { merge: true }); // Use merge: true to only update specified fields

                    console.log("Document updated with ID: ", doc.id);
                });
            }
        } catch (e) {
            console.error("Error adding/updating document: ", e);
        }
    }


    return (
        <div >
            <motion.section
                variants={pageVariant}
                initial={location.state?.name === "step4" ? "initial2" : "initial"}
                animate="animate"
                exit={goback ? "exit2" : "exit"}>
                <div className='pt-[40px]'>
                    <span className='font-h2-700 font-grey '>Competitor Mapping</span>
                </div>
                <div className='pt-[16px] font-grey1 font-b1-400 '>
                    Identify your key competitors to unlock strategic insights.
                </div>

                <div className='flex flex-row gap-[8px] mt-[32px]'>
                    <button className={socialList.includes('Steelcase') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Steelcase')}><img src={imageAssets.steelcase} alt='' /></button>
                    <button className={socialList.includes('Hni Corporation') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Hni Corporation')}><img src={imageAssets.hni} alt='' /></button>
                    <button className={socialList.includes('Ashely Furniture Industries') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Ashely Furniture Industries')}><img src={imageAssets.ashely} alt='' /></button>
                </div>

                <div className='flex flex-row gap-[8px] mt-[8px]'>
                    <button className={socialList.includes('Herman Miller') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Herman Miller')}><img src={imageAssets.herman} alt='' /></button>
                    <button className={socialList.includes('La-Z-Boy') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('La-Z-Boy')}><img src={imageAssets.la} alt='' /></button>
                    <button className={socialList.includes('Williams Sonoma') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Williams Sonoma')}><img src={imageAssets.williams} alt='' /></button>
                </div>

                <div className='flex flex-row gap-[8px] mt-[8px]'>
                    <button className={socialList.includes('Haworth') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Haworth')}><img src={imageAssets.haworth} alt='' /></button>
                    <button className={socialList.includes('IKEA') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('IKEA')}><img src={imageAssets.ikea} alt='' /></button>
                    <button className={socialList.includes('Kimball International Inc.') ? 'img-btn active' : 'img-btn'} onClick={() => selectList('Kimball International Inc.')}><img src={imageAssets.kimball} alt='' /></button>
                </div>

                <div className='pt-[52px] pb-[40px] flex flex-row justify-between'>
                    <button className='w-[69px] h-[28px] px-[12px] py-[8px] btn-white ' onClick={() => handleBack()}>Go Back</button>
                    <button className='w-[114px] h-[28px] px-[12px] py-[8px] btn-blue ' onClick={() => handleNext()}>Let’s Get Started</button>
                </div>
            </motion.section>
        </div>
    )
};