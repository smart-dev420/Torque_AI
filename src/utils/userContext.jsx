import { createContext, useState , useEffect} from 'react';
import { getUserDataByToken } from './helper';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [experience, setExperience] = useState({});
  const [goals, setGoals] = useState({});
  const [competitors, setCompetitors] = useState({});
  const [customSettings, setCustomSettings] = useState({});
  const [socials, setSocials] = useState({});
  const [pages, setPages] = useState(0);
  const [siderbar, setSiderbar] = useState(false);
  const [mail , setMail] = useState('');
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [userId, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const userInfo = getUserDataByToken(token);
    if (userInfo) {
      setAvatar(userInfo.avatar ?? '');
      setFirstName(userInfo.first_name ?? '');
      setLastName(userInfo.last_name?? '');
    }
  }, []);
  return (
    <UserContext.Provider value={{ experience, setExperience , socials, setSocials, goals, setGoals, competitors, setCompetitors , customSettings, setCustomSettings, pages, setPages , siderbar, setSiderbar, mail, setMail ,firstName , setFirstName, lastName, setLastName, userId, setUserId, avatar, setAvatar }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
