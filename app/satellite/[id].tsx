import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

import AppHeader from "@/components/AppHeader";
import { useFleet } from "@/context/FleetContext";
import { colors } from "@/theme/colors";

const SatelliteDetails = () => {
    const { id } = useLocalSearchParams();
    const { fleet } = useFleet();

    const satellite = fleet.find(
        (sat) => sat.id === id
    );

    if (!satellite) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: colors.text }}>
                    Satélite não encontrado
                </Text>
            </View>
        );
    }

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
            {<AppHeader title={satellite.name} />}
            <View style={{ marginBottom: 20 }}>
                <Text
                    style={{
                        color: colors.primary,
                        fontSize: 12,
                        letterSpacing: 2,
                    }}
                >
                    SATELLITE MODULE
                </Text>

                <Text
                    style={{
                        color: colors.text,
                        fontSize: 26,
                        fontWeight: "bold",
                    }}
                >
                    {satellite.name}
                </Text>
            </View>

            {/* STATUS GRID */}
            <View
                style={{
                    backgroundColor: colors.card,
                    padding: 16,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                    marginBottom: 12,
                }}
            >
                <Text style={{ color: colors.textSecondary }}>
                    Energia
                </Text>

                <Text
                    style={{
                        color: colors.text,
                        fontSize: 22,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}
                >
                    {satellite.energy}%
                </Text>

                <View
                    style={{
                        height: 8,
                        backgroundColor: "#222",
                        borderRadius: 10,
                    }}
                >
                    <View
                        style={{
                            width: `${satellite.energy}%`,
                            height: "100%",
                            backgroundColor:
                                satellite.energy < 20
                                    ? "#EF4444"
                                    : "#22C55E",
                            borderRadius: 10,
                        }}
                    />
                </View>
            </View>

            {/* SYSTEM STATUS */}
            <View
                style={{
                    backgroundColor: colors.card,
                    padding: 16,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                    marginBottom: 12,
                }}
            >
                <Text style={{ color: colors.textSecondary }}>
                    Sistema
                </Text>

                <Text style={{ color: colors.text }}>
                    Status: {satellite.systemStatus}
                </Text>

                <Text style={{ color: colors.text }}>
                    Comunicação:{" "}
                    {satellite.communication
                        ? "Online"
                        : "Offline"}
                </Text>
            </View>

            {/* ORBITAL */}
            <View
                style={{
                    backgroundColor: colors.card,
                    padding: 16,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                }}
            >
                <Text style={{ color: colors.textSecondary }}>
                    Estabilidade Orbital
                </Text>

                <Text
                    style={{
                        color: colors.text,
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                >
                    {satellite.orbitalStability}
                </Text>
            </View>
        </ScrollView>
    );
};

export default SatelliteDetails;