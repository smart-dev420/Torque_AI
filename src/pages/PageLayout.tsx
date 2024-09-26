import { ReactNode } from "react";

export const PageLayout: React.FC<{
  children: ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor = "bg-transparent" }) => (
  <div
    className={`flex flex-col justify-center items-center max-w-[1920px] ${backgroundColor}`}
  >
    <div className={`w-full ${backgroundColor}`}>
      {children}
    </div>
  </div>
);