import { Suspense, lazy } from "react";
import { useLocation, useRoutes } from "react-router-dom";

//Guards
import AuthGuard from "@Guards/AuthGuard";
import GuestGuard from "@Guards/GuestGuard";

//Layouts
import DashboardLayout from "@Layouts/dashboard";

//Components
import LoadingScreen from "@Components/LoadingScreen";

//Pages
import Login from "@Pages/auth/login/Login";
import Register from "@Pages/auth/register/Register";

const Loadable = (Component: any) => (props: Object) => {
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: "integration", element: <Integration /> },
        {
          path: "supports",
          children: [
            { path: "pdf", element: <Pdf /> },
            { path: "video", element: <Video /> },
          ],
        },
      ],
    },
  ]);
}

//Lazy loading pages
const Integration = Loadable(
  lazy(() => import("@Pages/dashboard/integration/Integration"))
);
const Pdf = Loadable(lazy(() => import("@Pages/dashboard/supports/Pdf")));
const Video = Loadable(lazy(() => import("@Pages/dashboard/supports/Video")));
