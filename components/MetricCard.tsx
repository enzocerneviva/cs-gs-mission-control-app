import React from "react";
import { Text, View } from "react-native";

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
                borderWidth: 1,
                borderRadius: 8,
                padding: 12,
                marginBottom: 10,
            }}
        >
            <Text>{title}</Text>

            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                }}
            >
                {value}
            </Text>
        </View>
    );
};

export default MetricCard;