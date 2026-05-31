import { router } from 'expo-router';
import React from "react";
import {
    Button,
    ScrollView,
    Text,
    View
} from "react-native";

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
                    <View
                        key={log.id}
                        style={{
                            borderWidth: 1,
                            borderRadius: 8,
                            padding: 12,
                            marginBottom: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            {log.timestamp}
                        </Text>

                        <Text>{log.message}</Text>

                    </View>
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