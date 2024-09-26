import { createHashRouter } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import {Step1} from '../pages/login/step1';
import {Step2} from '../pages/login/step2';
export const router = createHashRouter([
    {
      path: "/login",
      element: (
        <Step1/>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/login/step2",
      element: (
        <Step2/>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/",
      element: (
        <Step1/>
      ),
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <></>,
          errorElement: <NotFound />,
        },
      ],
    },

  ]);