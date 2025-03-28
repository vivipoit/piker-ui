import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { Navigation } from "./Navigation";

export const Layout = () => {
    return (
        <>
            <AppShell.Navbar p="md">
                <Navigation />
            </AppShell.Navbar>
            
            <Outlet />
        </>
    );
};

export default Layout;