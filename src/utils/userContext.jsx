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
  const [mail , setMail] = useState('');
  const [first_name , setFirst_name] = useState('');
  const [last_name , setLast_name] = useState('');
  return (
    <UserContext.Provider value={{ experience, setExperience , socials, setSocials, goals, setGoals, competitors, setCompetitors , customSettings, setCustomSettings, pages, setPages , siderbar, setSiderbar, mail, setMail ,first_name , setFirst_name, last_name, setLast_name }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
