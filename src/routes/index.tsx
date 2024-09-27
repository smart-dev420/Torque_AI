import { createBrowserRouter, Outlet } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Step1 } from "../pages/login/step1";
import { Step2 } from "../pages/login/step2";
import { Step3 } from "../pages/login/step3";
import { Step4 } from "../pages/login/step4";
import { Step5 } from "../pages/login/step5";
import { Step6 } from "../pages/login/step6";
import { PageLayout } from "../pages/PageLayout";
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
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "campaigns",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "strategies",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "creatives",
        element: <></>,
        errorElement: <NotFound />,
      },
      {
        path: "analytics",
        element: <></>,
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
