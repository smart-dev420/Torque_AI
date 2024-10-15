import { ReactNode, useEffect, useState } from "react";
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
      navigate('/login')
  }, [])

  return (
    <div className={`flex flex-row min-h-screen`}>
      <SideBar />
      <div className="flex flex-col w-full m-[32px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
