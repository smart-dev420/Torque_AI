import { ReactNode, useEffect } from "react";
import { SideBar } from "./layout/sidebar";
import { Navbar } from "./layout/navbar";
import { useRouter } from "../routes/hooks";

export const PageLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [router]);

    return (
      <div className={`flex flex-row min-h-screen`}>
        <SideBar />
        <div className="flex flex-col w-full  p-[16px]">
          <Navbar />
          {children}
        </div>
      </div>
    );
  };
