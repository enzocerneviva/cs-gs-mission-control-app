import { colors } from "@/theme/colors";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import StatusBadge from "./StatusBadge";

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
                    backgroundColor: colors.card,
                    borderRadius: 16,
                    padding: 16,
                    marginBottom: 14,
                    borderWidth: 1,
                    borderColor: colors.border,
                }}
            >
                <Text
                    style={{
                        color: colors.text,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}
                >
                    {name}
                </Text>

                <Text
                    style={{
                        color: colors.textSecondary,
                        marginTop: 10,
                    }}
                >
                    Energia
                </Text>

                <View
                    style={{
                        height: 10,
                        backgroundColor: "#222",
                        borderRadius: 10,
                        overflow: "hidden",
                        marginTop: 4,
                        marginBottom: 12,
                    }}
                >
                    <View
                        style={{
                            width: `${energy}%`,
                            height: "100%",
                            backgroundColor:
                                energy < 20
                                    ? colors.danger
                                    : colors.success,
                        }}
                    />
                </View>

                <StatusBadge
                    label={
                        communication
                            ? "Online"
                            : "Offline"
                    }
                />

                <StatusBadge
                    label={systemStatus}
                />
            </View>
        </Pressable>
    );
};

export default SatelliteCard;