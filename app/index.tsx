import React from "react";
import { Text, View } from "react-native";

import SatelliteCard from "@/components/SatelliteCard";
import { useFleet } from "@/context/FleetContext";

const Dashboard = () => {

    const { fleet } = useFleet();

    const monitoredSatellites = fleet.length;

    const operationalSatellites = fleet.filter(
        (satellite) => satellite.systemStatus === "operational"
    ).length;

    const lowEnergySatellites = fleet.filter(
        (satellite) => satellite.energy < 20
    ).length;

    const offlineSatellites = fleet.filter(
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

            {fleet.map((satellite) => (
                <SatelliteCard
                    key={satellite.id}
                    id={satellite.id}
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