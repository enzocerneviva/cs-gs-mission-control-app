import { Stack } from "expo-router";

import { FleetProvider } from "@/context/FleetContext";

export default function Layout() {
    return (
        <FleetProvider>
            <Stack />
        </FleetProvider>
    );
}