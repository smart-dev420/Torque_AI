import React from "react";

export const ProgressBar: React.FC<{ step: number }> = ({ step }) => {
  const totalSteps = 6;

  return (
    <div className="w-full h-[8px] flex flex-row gap-[8px] pt-[60px] pb-[32px]">
      {Array.from({ length: totalSteps }).map((_, index) => {
        return (
          <div
            key={index}
            className={`h-[8px] w-full ${
              index === step ? "bg-[#6775F0]" : "bg-[#141414]"
            } ${index === 0 ? "rounded-l-lg" : ""} ${
              index === totalSteps - 1 ? "rounded-r-lg" : ""
            }`}
          />
        );
      })}
    </div>
  );
};
