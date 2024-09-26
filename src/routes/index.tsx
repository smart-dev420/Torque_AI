import { createHashRouter, Outlet } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { PageLayout } from "../pages/PageLayout";

export const router = createHashRouter([
    {
      path: "/login",
      element: (
        <></>
      ),
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
          path: "",
          element: <></>,
          errorElement: <NotFound />,
        },
      ],
    },

  ]);