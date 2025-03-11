import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import DashboardLayout from "./pages/DashboardLayout";
import ApiManagement from "./pages/ApiManagement";
import Credits from "./pages/Credits";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        path: "/app",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/api-key",
        element: (
          <ProtectedRoute>
            <ApiManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/support",
        element: (
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        ),
      },

      {
        path: "/app/credits",
        element: (
          <ProtectedRoute>
            <Credits />
          </ProtectedRoute>
        ),
      },
      {
        path: "/app/settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
