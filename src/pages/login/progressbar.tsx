import { Variants } from "framer-motion";
import React from "react";

export const ProgressBar: React.FC<{ step: number }> = ({ step }) => {
  const totalSteps = 6;

  return (
    <div className="w-full h-[8px] flex flex-row gap-[8px] pt-[30px] pb-[32px]">
      {Array.from({ length: totalSteps }).map((_, index) => {
        return (
          <div
            key={index}
            className={`h-[8px] w-full ${
              index === 6 || index === step ? "bg-[#6775F0]" : "bg-[#141414]"
            } ${index === 0 ? "rounded-l-lg" : ""} ${
              index === totalSteps - 1 ? "rounded-r-lg" : ""
            }`}
          />
        );
      })}
    </div>
  );
};

export const pageVariant: Variants = {
  initial: {
      // x: '60%',
      opacity: 0
  },
  initial2: {
      // x: '100%',
      opacity: 0
  },
  animate: {
      x: '0%',
      opacity: 1,
      transition: {
          type: 'tween',
          duration: 0.6,
          ease: 'easeInOut'
      }
  },
  exit: {
      x: '-60%',
      opacity: 0,
      transition: {
          duration: 0.6,
          ease: 'easeInOut'
      }
  },
  exit2: {
      x: '60%',
      opacity: 0,
      transition: {
          duration: 0.6,
          ease: 'easeInOut'
      }
  }
}
