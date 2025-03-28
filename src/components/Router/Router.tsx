import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout"
import { Dashboard } from "../../pages/Dashboard"
import { Manage } from "../../pages/Manage"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "manage", element: <Manage /> },
      ],
    },
]);

export const Router: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default Router;