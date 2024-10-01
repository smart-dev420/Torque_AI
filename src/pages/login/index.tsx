
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from "./step4";
import { Step5 } from "./step5";
import { Step6 } from "./step6";
import { imageAssets } from '../../utils/constant';
import { ProgressBar } from "./progressbar";
import { useState } from "react";
export const Index = () => {

  const [pages, setPages] = useState(0);

  const renderStep = () => {
    switch(pages) {
      case 0:
        return <Step1 setPages={setPages} />;
      case 1:
        return <Step2 setPages={setPages} />;
      case 2:
        return <Step3 setPages={setPages} />;
      case 3:
        return <Step4 setPages={setPages} />;
      case 4:
        return <Step5 setPages={setPages} />;
      case 5:
        return <Step6 setPages={setPages} />;
      default:
        return <Step1 setPages={setPages} />;
    }
  };

  return (
    <div className='bg-[#000] w-full min-h-screen'>
      <div className="max-w-[600px] w-full flex-col mx-[auto]">
        <div className='pt-[64px] '>
          <img src={imageAssets.logo} alt='Torque AI' className='mx-[auto] max-w-[210px] max-h-[50px]' />
        </div>
        <div className='mt-[64px] rounded-[8px] bg-[#141414] max-h-[680px] h-full flex-col text-center	px-[40px]'>
          {
            renderStep()
          }
        </div>
        <ProgressBar step={pages} />
      </div>
    </div>
  )
}