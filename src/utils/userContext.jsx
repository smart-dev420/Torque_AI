import { createContext, useState , useEffect} from 'react';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [experience, setExperience] = useState({});
  const [goals, setGoals] = useState({});
  const [competitors, setCompetitors] = useState({});
  const [customSettings, setCustomSettings] = useState({});
  const [socials, setSocials] = useState({});
  const [pages, setPages] = useState(0);
  const [siderbar, setSiderbar] = useState(false);
  useEffect (()=>{
    const initSetting = localStorage.getItem('initSetting');
    if (initSetting){
      const { experience, socials, userEmail, name } = JSON.parse(initSetting);
      setExperience(experience);
      setSocials(socials);
    }
  }, []);
  return (
    <UserContext.Provider value={{ experience, setExperience , socials, setSocials, goals, setGoals, competitors, setCompetitors , customSettings, setCustomSettings, pages, setPages , siderbar, setSiderbar }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
