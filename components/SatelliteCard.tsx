import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

type SatelliteCardProps = {
    id: string;
    name: string;
    energy: number;
    communication: boolean;
    systemStatus: string;
};

const SatelliteCard = ({
    id,
    name,
    energy,
    communication,
    systemStatus,
}: SatelliteCardProps) => {
    return (
        <Pressable
            onPress={() => router.push(`/satellite/${id}`)}
        >
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
        </Pressable>
    );
};

export default SatelliteCard;