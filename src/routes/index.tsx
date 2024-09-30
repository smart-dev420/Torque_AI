import { createBrowserRouter, Outlet } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Step1 } from "../pages/login/step1";
import { Step2 } from "../pages/login/step2";
import { Step3 } from "../pages/login/step3";
import { Step4 } from "../pages/login/step4";
import { Step5 } from "../pages/login/step5";
import { Step6 } from "../pages/login/step6";
import { PageLayout } from "../pages/PageLayout";
import { Dashboard } from "../pages/dashboard";
import { Strategies } from '../pages/strategies';
import {Analaytics} from '../pages/analytics';
import { Campaigns } from "../pages/campaigns";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Step1 />,
    errorElement: <NotFound />,
  },
  {
    path: "/login/step2",
    element: <Step2 />,
    errorElement: <NotFound />,
  },
  {
    path: "/login/step3",
    element: <Step3 />,
    errorElement: <NotFound />,
  },
  {
    path: "/login/step4",
    element: <Step4 />,
    errorElement: <NotFound />,
  },
  {
    path: "/login/step5",
    element: <Step5 />,
    errorElement: <NotFound />,
  },
  {
    path: "/login/step6",
    element: <Step6 />,
    errorElement: <NotFound />,
  },
  {
    path: "",
    element: (
      <PageLayout>
        <Outlet />
      </PageLayout>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <NotFound />,
      },
      {
        path: "campaigns",
        element: <Campaigns />,
        errorElement: <NotFound />,
      },
      {
        path: "strategies",
        element: <Strategies/>,
        errorElement: <NotFound />,
      },
      {
        path: "creatives",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "analytics",
        element: <Analaytics/>,
        errorElement: <NotFound />,
      },
      {
        path: "reports",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "settings",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "support",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "terms",
        element: <></>,
        errorElement: <NotFound />,
      },
    ],
  },
]);
