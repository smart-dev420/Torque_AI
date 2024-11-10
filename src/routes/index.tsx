import { createBrowserRouter, Outlet } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import {Index} from '../pages/login/index'
import { PageLayout } from "../pages/PageLayout";
import { Dashboard } from "../pages/dashboard";
import { Strategies } from '../pages/strategies';
import {Analaytics} from '../pages/analytics';
import { Campaigns } from "../pages/campaigns";
import { Creatives } from "../pages/creatives";
import { Reports } from "../pages/reports";
import { Register } from "../pages/login/register";
import Settings from "../pages/settings";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
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
        element: <Creatives />,
        errorElement: <NotFound />,
      },
      {
        path: "analytics",
        element: <Analaytics/>,
        errorElement: <NotFound />,
      },
      {
        path: "reports",
        element: <Reports />,
        errorElement: <NotFound />,
      },
      {
        path: "settings",
        element: <Settings/>,
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
