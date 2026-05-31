import React from "react";
import {
    Text,
    View,
} from "react-native";

import { colors } from "@/theme/colors";

type Props = {
    label: string;
};

const StatusBadge = ({
    label,
}: Props) => {
    const getColor = () => {
        const value =
            label.toLowerCase();

        if (
            value.includes("operational") ||
            value.includes("online") ||
            value.includes("stable")
        ) {
            return colors.success;
        }

        if (
            value.includes("degraded")
        ) {
            return colors.warning;
        }

        return colors.danger;
    };

    return (
        <View
            style={{
                alignSelf: "flex-start",
                backgroundColor:
                    getColor(),
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 20,
                marginTop: 6,
            }}
        >
            <Text
                style={{
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                {label}
            </Text>
        </View>
    );
};

export default StatusBadge;