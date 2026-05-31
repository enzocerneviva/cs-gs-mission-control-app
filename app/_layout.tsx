import { Stack } from "expo-router";

import { FleetProvider } from "@/context/FleetContext";
import { LogProvider } from "@/context/LogContext";

export default function Layout() {
    return (
        <FleetProvider>
            <LogProvider>
                <Stack />
            </LogProvider>
        </FleetProvider>
    );
}