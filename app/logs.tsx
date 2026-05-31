import { router } from 'expo-router';
import React from "react";
import {
    Button,
    ScrollView,
    Text
} from "react-native";

import LogItem from '@/components/LogItem';
import { useLogs } from "@/context/LogContext";

const Logs = () => {
    const { logs } = useLogs();

    return (
        <ScrollView style={{ padding: 16 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Histórico de Operações
            </Text>

            {logs.length === 0 ? (
                <Text>
                    Nenhum log registrado.
                </Text>
            ) : (
                logs.map((log) => (
                    <LogItem
                        key={log.id}
                        timestamp={log.timestamp}
                        message={log.message}
                    />
                ))
            )}

        <Button
            title="Voltar ao Dashboard"
            onPress={() =>
                router.push("/")
            }
        />

        </ScrollView>
    );
};

export default Logs;