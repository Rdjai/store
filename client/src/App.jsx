import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./component/layout/AppLayout";
import NotFoundPage from "./component/NotFoundPage";
import Home from "./component/pages/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import StoreList from "./component/pages/Stores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/stores",
        element: <StoreList />,
      },
      // {
      //   path: "/saved",
      //   element: <SaveJob />,
      // },
      // {
      //   path: "/deatils/:id",
      //   element: <JobDeatils />,
      // },

      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },

      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },

      // {
      //   path: "/recruiter/dashboard",
      //   element: <Dashboard />,
      // },
      // {
      //   path: "/recruiter/company/create",
      //   element: <CompanyCreate />,
      // },
      // {
      //   path: "//recruiter/job/create",
      //   element: <JobPost />,
      // },
      // {
      //   path: "/recruiter/company/:id",
      //   element: <CompanySetup />,
      // },
      // {
      //   path: "/recruiter/jobs/:id/applicants",
      //   element: <Applicants />,
      // },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
