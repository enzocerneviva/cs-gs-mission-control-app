import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "@/components/AppHeader";
import LogItem from "@/components/LogItem";
import { useLogs } from "@/context/LogContext";
import { colors } from "@/theme/colors";

const Logs = () => {
    const { logs } = useLogs();

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: colors.background,
            }}
            contentContainerStyle={{
                padding: 16,
            }}
        >
            {<AppHeader title="Logs History" />}
            <View style={{ marginBottom: 20 }}>
                <Text
                    style={{
                        color: colors.primary,
                        fontSize: 12,
                        letterSpacing: 2,
                    }}
                >
                    SYSTEM LOGS
                </Text>

                <Text
                    style={{
                        color: colors.text,
                        fontSize: 26,
                        fontWeight: "bold",
                    }}
                >
                    Histórico de Operações
                </Text>
            </View>

            {/* EMPTY STATE */}
            {logs.length === 0 ? (
                <View
                    style={{
                        backgroundColor: colors.card,
                        padding: 16,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: colors.border,
                    }}
                >
                    <Text style={{ color: colors.text }}>
                        Nenhum log registrado.
                    </Text>
                </View>
            ) : (
                <View>
                    {logs.map((log) => (
                        <LogItem
                            key={log.id}
                            timestamp={log.timestamp}
                            message={log.message}
                        />
                    ))}
                </View>
            )}

            {/* BACK BUTTON */}
            <Pressable
                onPress={() => router.push("/")}
                style={{
                    backgroundColor: colors.primary,
                    padding: 14,
                    borderRadius: 10,
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Voltar ao Dashboard
                </Text>
            </Pressable>
        </ScrollView>
    );
};

export default Logs;