import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "@mantine/core";

export const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Tabs orientation="vertical" placement="right" value={location.pathname} onChange={(path) => navigate(path)}>
            <Tabs.List>
                <Tabs.Tab value="/">Dashboard</Tabs.Tab>
                <Tabs.Tab value="/manage">Manage</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
};

export default Navigation;