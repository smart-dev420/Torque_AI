import { ReactNode } from "react";
import { SideBar } from "./layout/sidebar";
import { Navbar } from "./layout/navbar";

export const PageLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
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
