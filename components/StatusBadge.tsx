import React from "react";
import { Text } from "react-native";

type Props = {
    label: string;
};

const StatusBadge = ({ label }: Props) => {
    return (
        <Text
            style={{
                fontWeight: "bold",
            }}
        >
            {label}
        </Text>
    );
};

export default StatusBadge; 