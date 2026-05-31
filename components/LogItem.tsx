import React from "react";
import {
    Text,
    View,
} from "react-native";

type Props = {
    timestamp: string;
    message: string;
};

const LogItem = ({
    timestamp,
    message,
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
            <Text
                style={{
                    fontWeight: "bold",
                }}
            >
                {timestamp}
            </Text>

            <Text>{message}</Text>
        </View>
    );
};

export default LogItem;