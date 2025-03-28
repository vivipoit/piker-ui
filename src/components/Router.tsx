import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Dashboard } from "../pages/Dashboard.tsx"
import { Manage } from "../pages/Manage.tsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="manage" element={<Manage />} />
        </Route>
    )
)

export const Router: React.FC = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default Router;