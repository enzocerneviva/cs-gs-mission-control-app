import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import AppHeader from "@/components/AppHeader";
import MetricCard from "@/components/MetricCard";
import SatelliteCard from "@/components/SatelliteCard";
import { useFleet } from "@/context/FleetContext";
import { colors } from "@/theme/colors";

const Dashboard = () => {
    const { fleet } = useFleet();

    const monitoredSatellites = fleet.length;

    const operationalSatellites = fleet.filter(
        (sat) => sat.systemStatus === "operational"
    ).length;

    const lowEnergySatellites = fleet.filter(
        (sat) => sat.energy < 20
    ).length;

    const offlineSatellites = fleet.filter(
        (sat) => !sat.communication
    ).length;

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
            {<AppHeader title="Mission Control" showBack={false} />}
            <View style={{ marginBottom: 20 }}>
                <Text
                    style={{
                        color: colors.primary,
                        fontSize: 12,
                        letterSpacing: 2,
                    }}
                >
                    GS MISSION CONTROL
                </Text>

                <Text
                    style={{
                        color: colors.text,
                        fontSize: 28,
                        fontWeight: "bold",
                    }}
                >
                    Fleet Overview
                </Text>
            </View>

            {/* KPI GRID */}
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ width: "48%" }}>
                    <MetricCard
                        title="Monitorados"
                        value={monitoredSatellites}
                    />
                </View>

                <View style={{ width: "48%" }}>
                    <MetricCard
                        title="Operacionais"
                        value={operationalSatellites}
                    />
                </View>

                <View style={{ width: "48%" }}>
                    <MetricCard
                        title="Energia Baixa"
                        value={lowEnergySatellites}
                    />
                </View>

                <View style={{ width: "48%" }}>
                    <MetricCard
                        title="Offline"
                        value={offlineSatellites}
                    />
                </View>
            </View>

            {/* SATELLITES */}
            <View style={{ marginTop: 20 }}>
                <Text
                    style={{
                        color: colors.text,
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}
                >
                    Active Satellites
                </Text>

                {fleet.map((satellite) => (
                    <SatelliteCard
                        key={satellite.id}
                        {...satellite}
                    />
                ))}
            </View>

            {/* NAVIGATION */}
            <View style={{ marginTop: 20 }}>
                <Pressable
                    onPress={() =>
                        router.push("/control-painel")
                    }
                    style={{
                        backgroundColor: colors.primary,
                        padding: 14,
                        borderRadius: 10,
                        marginBottom: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        Open Control Painel
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() =>
                        router.push("/logs")
                    }
                    style={{
                        backgroundColor: colors.card,
                        padding: 14,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: colors.border,
                    }}
                >
                    <Text
                        style={{
                            color: colors.text,
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        View Logs
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Dashboard;