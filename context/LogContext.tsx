import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

type LogEntry = {
    id: string;
    message: string;
    timestamp: string;
};

type LogContextType = {
    logs: LogEntry[];
    addLog: (message: string) => void;
};

const LogContext = createContext<LogContextType | null>(
    null
);

export const LogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [logs, setLogs] = useState<LogEntry[]>([]);

    useEffect(() => {
        const loadLogs = async () => {
            try {
                const storedLogs =
                    await AsyncStorage.getItem("logs");

                if (storedLogs) {
                    setLogs(JSON.parse(storedLogs));
                }
            } catch (error) {
                console.error(
                    "Erro ao carregar logs:",
                    error
                );
            }
        };

        loadLogs();
    }, []);

    useEffect(() => {
        const saveLogs = async () => {
            try {
                await AsyncStorage.setItem(
                    "logs",
                    JSON.stringify(logs)
                );
            } catch (error) {
                console.error(
                    "Erro ao salvar logs:",
                    error
                );
            }
        };

        saveLogs();
    }, [logs]);

    const addLog = (message: string) => {
        const newLog: LogEntry = {
            id: Date.now().toString(),
            message,
            timestamp: new Date().toLocaleString(),
        };

        setLogs((previousLogs) => [
            newLog,
            ...previousLogs,
        ]);
    };

    return (
        <LogContext.Provider
            value={{
                logs,
                addLog,
            }}
        >
            {children}
        </LogContext.Provider>
    );
};

export const useLogs = () => {
    const context = useContext(LogContext);

    if (!context) {
        throw new Error(
            "useLogs deve ser usado dentro do LogProvider"
        );
    }

    return context;
};