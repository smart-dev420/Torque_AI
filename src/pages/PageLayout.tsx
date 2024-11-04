import { ReactNode, useEffect } from "react";
import { SideBar } from "./layout/sidebar";
import { Navbar } from "./layout/navbar";
import { useNavigate } from "react-router-dom";

export const PageLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() =>{
    console.log(localStorage.getItem("initSetting"))
    if(localStorage.getItem("initSetting"))
      navigate('/dashboard')
    else
      navigate('/')
  }, [])

  return (
    <div className={`flex flex-row min-h-screen`}>
      <SideBar />
      <div className="flex flex-col w-full md:m-[32px] p-[16px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
