import React from "react";
import {
    ScrollView,
    Text
} from "react-native";

import { colors } from "@/theme/colors";

type Props = {
    timestamp: string;
    message: string;
};

const LogItem = ({
    timestamp,
    message,
}: Props) => {
    return (
        <ScrollView
            style={{
                backgroundColor:
                    colors.card,
                borderRadius: 14,
                padding: 14,
                marginBottom: 10,
                borderWidth: 1,
                borderColor:
                    colors.border,
            }}
        >
            <Text
                style={{
                    color:
                        colors.textSecondary,
                    fontSize: 12,
                    marginBottom: 6,
                }}
            >
                {timestamp}
            </Text>

            <Text
                style={{
                    color: colors.text,
                }}
            >
                {message}
            </Text>
        </ScrollView>
    );
};

export default LogItem;