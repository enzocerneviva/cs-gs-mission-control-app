import React, {
    createContext,
    useContext,
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
            "useLogs deve ser usado dentro de LogProvider"
        );
    }

    return context;
};