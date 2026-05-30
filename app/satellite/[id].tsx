import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { mockFleet } from "@/data/mockFleet";

const SatelliteDetails = () => {
    const { id } = useLocalSearchParams();

    const satellite = mockFleet.find(
        (sat) => sat.id === id
    );

    if (!satellite) {
        return (
            <View>
                <Text>Satélite não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={{ padding: 16 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Detalhes da Missão
            </Text>

            <Text>Nome: {satellite.name}</Text>

            <Text>Energia: {satellite.energy}%</Text>

            <Text>
                Comunicação:
                {satellite.communication
                    ? " Online"
                    : " Offline"}
            </Text>

            <Text>
                Status: {satellite.systemStatus}
            </Text>

            <Text>
                Estabilidade Orbital:
                {" "}
                {satellite.orbitalStability}
            </Text>
        </View>
    );
};

export default SatelliteDetails;