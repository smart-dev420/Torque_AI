import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

import {Step1} from './step1';
import {Step2} from './step2';
import {Step3} from './step3';
import {Step4} from "./step4";
import {Step5} from "./step5";
import {Step6} from "./step6";
export const Index = () => {
    const location = useLocation()

    return(
    <div>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/login/" element={<Step1 />} />
              <Route path="/login/step2" element={<Step2 />} />
              <Route path="/login/step3" element={<Step3 />} />
              <Route path="/login/step4" element={<Step4 />} />
              <Route path="/login/step5" element={<Step5 />} />
              <Route path="/login/step6" element={<Step6 />} />
            </Routes>
          </AnimatePresence>
    </div>
    )
}