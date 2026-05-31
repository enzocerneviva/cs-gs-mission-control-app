import { router } from "expo-router";
import React, { useState } from "react";
import {
    Button,
    Text,
    TextInput,
    View,
} from "react-native";

import { useFleet } from "@/context/FleetContext";
import { useLogs } from "@/context/LogContext";

const ControlPanel = () => {
    const { fleet, setFleet } = useFleet();
    const { addLog } = useLogs();

    const [energy, setEnergy] = useState("");

    const updateSatellite = () => {
        const energyValue = Number(energy);

        if (
            isNaN(energyValue) ||
            energyValue < 0 ||
            energyValue > 100
        ) {
            alert(
                "A energia deve estar entre 0 e 100."
            );
            return;
        }

        const updatedFleet = fleet.map(
            (satellite) => {
                if (satellite.id === "1") {
                    return {
                        ...satellite,
                        energy: energyValue,
                    };
                }

                return satellite;
            }
        );

        console.log(updatedFleet);
        setFleet(updatedFleet);

        addLog(
            `Energia do SAT-01 alterada para ${energyValue}%`
        );

        setEnergy("");
    };

    return (
        <View style={{ padding: 16 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Painel de Controle
            </Text>

            <Text>
                Atualizar energia do SAT-01
            </Text>

            <TextInput
                value={energy}
                onChangeText={setEnergy}
                keyboardType="numeric"
                placeholder="Digite um valor"
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginVertical: 10,
                }}
            />

            <Button
                title="Salvar"
                onPress={updateSatellite}
            />

            <Button
                title="Voltar ao Dashboard"
                onPress={() =>
                    router.push("/")
                }
            />
        </View>
    );
};

export default ControlPanel;