import React from "react";
import { Text, View } from "react-native";

import { mockFleet } from "@/data/mockFleet";
import SatelliteCard from "../components/SatteliteCard";

const Dashboard = () => {
    return (
        <View style={{ padding: 16 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Central de Missões Espaciais
            </Text>

            {mockFleet.map((satellite) => (
                <SatelliteCard
                    key={satellite.id}
                    name={satellite.name}
                    energy={satellite.energy}
                    communication={satellite.communication}
                    systemStatus={satellite.systemStatus}
                />
            ))}
        </View>
    );
};

export default Dashboard;