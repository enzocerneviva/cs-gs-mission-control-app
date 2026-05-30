import React, {
    createContext,
    useContext,
    useState,
} from "react";

import { mockFleet } from "@/data/mockFleet";
import type { Satellite } from "@/types/satellite";

type FleetContextType = {
    fleet: Satellite[];
    setFleet: React.Dispatch<
        React.SetStateAction<Satellite[]>
    >;
};

const FleetContext = createContext<FleetContextType | null>(null);

export const FleetProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    console.log("FleetProvider foi criado");

    const [fleet, setFleet] = useState(mockFleet);

    return (
        <FleetContext.Provider
            value={{
                fleet,
                setFleet,
            }}
        >
            {children}
        </FleetContext.Provider>
    );
};

export const useFleet = () => {
    const context = useContext(FleetContext);

    if (!context) {
        throw new Error(
            "useFleet deve ser usado dentro do FleetProvider"
        );
    }

    return context;
};