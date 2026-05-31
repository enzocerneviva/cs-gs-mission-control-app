import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useContext,
    useEffect,
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
    const [fleet, setFleet] = useState<Satellite[]>([]);

    useEffect(() => {
        const loadFleet = async () => {
            try {
                const storedFleet =
                    await AsyncStorage.getItem("fleet");

                if (storedFleet) {
                    setFleet(JSON.parse(storedFleet));
                } else {
                    setFleet(mockFleet);
                }
            } catch (error) {
                console.error(
                    "Erro ao carregar frota:",
                    error
                );

                setFleet(mockFleet);
            }
        };

        loadFleet();
    }, []);

    useEffect(() => {
        const saveFleet = async () => {
            try {
                await AsyncStorage.setItem(
                    "fleet",
                    JSON.stringify(fleet)
                );
            } catch (error) {
                console.error(
                    "Erro ao salvar frota:",
                    error
                );
            }
        };

        if (fleet.length > 0) {
            saveFleet();
        }
    }, [fleet]);

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