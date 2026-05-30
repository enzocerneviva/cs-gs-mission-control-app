import React from "react";
import { Text, View } from "react-native";

type SatelliteCardProps = {
    name: string;
    energy: number;
    communication: boolean;
    systemStatus: string;
};

const SatelliteCard = ({
    name,
    energy,
    communication,
    systemStatus,
}: SatelliteCardProps) => {
    return (
        <View
            style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 12,
                marginBottom: 12,
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 8,
                }}
            >
                {name}
            </Text>

            <Text>Energia: {energy}%</Text>

            <Text>
                Comunicação: {communication ? "Online" : "Offline"}
            </Text>

            <Text>Status: {systemStatus}</Text>
        </View>
    );
};

export default SatelliteCard;