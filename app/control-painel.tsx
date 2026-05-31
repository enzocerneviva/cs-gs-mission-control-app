import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Button,
    Text,
    TextInput,
    View,
} from "react-native";

import { useFleet } from "@/context/FleetContext";
import { useLogs } from "@/context/LogContext";
import type {
    OrbitalStability,
    SystemStatus,
} from "@/types/satellite";

const ControlPanel = () => {
    const { fleet, setFleet } = useFleet();
    const { addLog } = useLogs();

    const [selectedSatelliteId, setSelectedSatelliteId] =
        useState("");

    const [energy, setEnergy] = useState("");

    const [communication, setCommunication] =
        useState(true);

    const [systemStatus, setSystemStatus] =
        useState<SystemStatus>("operational");

    const [orbitalStability, setOrbitalStability] =
        useState<OrbitalStability>("stable");

    useEffect(() => {
        if (fleet.length === 0) return;

        const satellite = fleet[0];

        setSelectedSatelliteId(satellite.id);
        setEnergy(satellite.energy.toString());
        setCommunication(
            satellite.communication
        );
        setSystemStatus(
            satellite.systemStatus
        );
        setOrbitalStability(
            satellite.orbitalStability
        );
    }, [fleet]);

    const handleSatelliteChange = (
        satelliteId: string
    ) => {
        const satellite = fleet.find(
            (sat) => sat.id === satelliteId
        );

        if (!satellite) return;

        setSelectedSatelliteId(
            satellite.id
        );

        setEnergy(
            satellite.energy.toString()
        );

        setCommunication(
            satellite.communication
        );

        setSystemStatus(
            satellite.systemStatus
        );

        setOrbitalStability(
            satellite.orbitalStability
        );
    };

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

        const previousSatellite =
            fleet.find(
                (sat) =>
                    sat.id ===
                    selectedSatelliteId
            );

        if (!previousSatellite) return;

        const updatedFleet = fleet.map(
            (satellite) => {
                if (
                    satellite.id ===
                    selectedSatelliteId
                ) {
                    return {
                        ...satellite,
                        energy: energyValue,
                        communication,
                        systemStatus,
                        orbitalStability,
                    };
                }

                return satellite;
            }
        );

        setFleet(updatedFleet);

        if (
            previousSatellite.energy !==
            energyValue
        ) {
            addLog(
                `${previousSatellite.name} energia alterada para ${energyValue}%`
            );
        }

        if (
            previousSatellite.communication !==
            communication
        ) {
            addLog(
                communication
                    ? `${previousSatellite.name} recuperou comunicação`
                    : `${previousSatellite.name} perdeu comunicação`
            );
        }

        if (
            previousSatellite.systemStatus !==
            systemStatus
        ) {
            addLog(
                `${previousSatellite.name} status alterado para ${systemStatus}`
            );
        }

        if (
            previousSatellite.orbitalStability !==
            orbitalStability
        ) {
            addLog(
                `${previousSatellite.name} estabilidade orbital alterada para ${orbitalStability}`
            );
        }

        alert(
            "Satélite atualizado com sucesso."
        );
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
                Selecione um satélite
            </Text>

            <Picker
                selectedValue={
                    selectedSatelliteId
                }
                onValueChange={
                    handleSatelliteChange
                }
            >
                {fleet.map((satellite) => (
                    <Picker.Item
                        key={satellite.id}
                        label={satellite.name}
                        value={satellite.id}
                    />
                ))}
            </Picker>

            <Text>Energia</Text>

            <TextInput
                value={energy}
                onChangeText={setEnergy}
                keyboardType="numeric"
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 12,
                }}
            />

            <Text>Comunicação</Text>

            <Picker
                selectedValue={communication}
                onValueChange={
                    setCommunication
                }
            >
                <Picker.Item
                    label="Online"
                    value={true}
                />

                <Picker.Item
                    label="Offline"
                    value={false}
                />
            </Picker>

            <Text>Status Operacional</Text>

            <Picker
                selectedValue={
                    systemStatus
                }
                onValueChange={
                    setSystemStatus
                }
            >
                <Picker.Item
                    label="Operational"
                    value="operational"
                />

                <Picker.Item
                    label="Failure"
                    value="failure"
                />

                <Picker.Item
                    label="Offline"
                    value="offline"
                />
            </Picker>

            <Text>
                Estabilidade Orbital
            </Text>

            <Picker
                selectedValue={
                    orbitalStability
                }
                onValueChange={
                    setOrbitalStability
                }
            >
                <Picker.Item
                    label="Stable"
                    value="stable"
                />

                <Picker.Item
                    label="Degraded"
                    value="degraded"
                />

                <Picker.Item
                    label="Critical"
                    value="critical"
                />
            </Picker>

            <Button
                title="Salvar Alterações"
                onPress={
                    updateSatellite
                }
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