import React from "react";
import { Text, View } from "react-native";

import SatelliteCard from "@/components/SatelliteCard";
import { mockFleet } from "@/data/mockFleet";

const Dashboard = () => {
    const monitoredSatellites = mockFleet.length;

    const operationalSatellites = mockFleet.filter(
        (satellite) => satellite.systemStatus === "operational"
    ).length;

    const lowEnergySatellites = mockFleet.filter(
        (satellite) => satellite.energy < 20
    ).length;

    const offlineSatellites = mockFleet.filter(
        (satellite) => !satellite.communication
    ).length;

    return (
        <View style={{ padding: 16 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Central de Monitoramento Espacial
            </Text>

            <View
                style={{
                    borderWidth: 1,
                    padding: 12,
                    marginBottom: 20,
                    borderRadius: 8,
                }}
            >
                <Text>Satélites monitorados: {monitoredSatellites}</Text>

                <Text>Satélites operando: {operationalSatellites}</Text>

                <Text>Satélites com energia baixa: {lowEnergySatellites}</Text>

                <Text>Satélites sem comunicação: {offlineSatellites}</Text>
            </View>

            {mockFleet.map((satellite) => (
                <SatelliteCard
                    key={satellite.id}
                    name={satellite.name}
                    energy={satellite.energy}
                    communication={satellite.communication}
                    systemStatus={satellite.systemStatus}
                />
            ))}
        </View>
    );
};

export default Dashboard;