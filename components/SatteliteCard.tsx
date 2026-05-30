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
                padding: 12,
                marginVertical: 8,
                borderRadius: 8,
            }}
        >
            <Text>{name}</Text>

            <Text>Energia: {energy}%</Text>

            <Text>
                Comunicação: {communication ? "Online" : "Offline"}
            </Text>

            <Text>Status: {systemStatus}</Text>
        </View>
    );
};

export default SatelliteCard;