import React from "react";
import {
    Text,
    View,
} from "react-native";

import { colors } from "@/theme/colors";

type Props = {
    title: string;
    value: number;
};

const MetricCard = ({
    title,
    value,
}: Props) => {
    return (
        <View
            style={{
                backgroundColor: colors.card,
                borderRadius: 16,
                padding: 16,
                marginBottom: 12,
                borderWidth: 1,
                borderColor: colors.border,
            }}
        >
            <Text
                style={{
                    color: colors.textSecondary,
                    fontSize: 12,
                    textTransform: "uppercase",
                }}
            >
                {title}
            </Text>

            <Text
                style={{
                    color: colors.text,
                    fontSize: 32,
                    fontWeight: "bold",
                    marginTop: 8,
                }}
            >
                {value}
            </Text>
        </View>
    );
};

export default MetricCard;