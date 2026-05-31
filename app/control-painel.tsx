import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import AppHeader from "@/components/AppHeader";
import { useFleet } from "@/context/FleetContext";
import { useLogs } from "@/context/LogContext";
import { colors } from "@/theme/colors";
import type {
    OrbitalStability,
    SystemStatus,
} from "@/types/satellite";

/**
 * 🔘 CONTROLLED SELECTOR (UI consistente cross-platform)
 */
const OptionSelector = ({
    label,
    value,
    options,
    onChange,
}: {
    label: string;
    value: any;
    options: { label: string; value: any }[];
    onChange: (value: any) => void;
}) => {
    return (
        <View style={{ marginBottom: 12 }}>
            <Text
                style={{
                    color: colors.textSecondary,
                    fontSize: 12,
                    marginBottom: 6,
                    letterSpacing: 1,
                }}
            >
                {label}
            </Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                {options.map((opt) => {
                    const selected = opt.value === value;

                    return (
                        <Pressable
                            key={String(opt.value)}
                            onPress={() => onChange(opt.value)}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 12,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: selected
                                    ? colors.primary
                                    : colors.border,
                                backgroundColor: selected
                                    ? colors.primary
                                    : colors.card,
                            }}
                        >
                            <Text
                                style={{
                                    color: selected ? "white" : colors.text,
                                    fontWeight: "600",
                                    fontSize: 12,
                                }}
                            >
                                {opt.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
};

const ControlPanel = () => {
    const { fleet, setFleet } = useFleet();
    const { addLog } = useLogs();

    const [selectedSatelliteId, setSelectedSatelliteId] = useState("");

    const [energy, setEnergy] = useState("");
    const [communication, setCommunication] = useState(true);
    const [systemStatus, setSystemStatus] = useState<SystemStatus>("operational");
    const [orbitalStability, setOrbitalStability] = useState<OrbitalStability>("stable");

    useEffect(() => {
        if (fleet.length === 0) return;

        const satellite = fleet[0];

        setSelectedSatelliteId(satellite.id);
        setEnergy(satellite.energy.toString());
        setCommunication(satellite.communication);
        setSystemStatus(satellite.systemStatus);
        setOrbitalStability(satellite.orbitalStability);
    }, [fleet]);

    const handleSatelliteChange = (satelliteId: string) => {
        const satellite = fleet.find((sat) => sat.id === satelliteId);
        if (!satellite) return;

        setSelectedSatelliteId(satellite.id);
        setEnergy(satellite.energy.toString());
        setCommunication(satellite.communication);
        setSystemStatus(satellite.systemStatus);
        setOrbitalStability(satellite.orbitalStability);
    };

    const updateSatellite = () => {
        const energyValue = Number(energy);

        if (isNaN(energyValue) || energyValue < 0 || energyValue > 100) {
            alert("A energia deve estar entre 0 e 100.");
            return;
        }

        const previousSatellite = fleet.find(
            (sat) => sat.id === selectedSatelliteId
        );

        if (!previousSatellite) return;

        const updatedFleet = fleet.map((satellite) => {
            if (satellite.id === selectedSatelliteId) {
                return {
                    ...satellite,
                    energy: energyValue,
                    communication,
                    systemStatus,
                    orbitalStability,
                };
            }
            return satellite;
        });

        setFleet(updatedFleet);

        if (previousSatellite.energy !== energyValue) {
            addLog(`${previousSatellite.name} energia alterada para ${energyValue}%`);
        }

        if (previousSatellite.communication !== communication) {
            addLog(
                communication
                    ? `${previousSatellite.name} recuperou comunicação`
                    : `${previousSatellite.name} perdeu comunicação`
            );
        }

        if (previousSatellite.systemStatus !== systemStatus) {
            addLog(`${previousSatellite.name} status alterado para ${systemStatus}`);
        }

        if (previousSatellite.orbitalStability !== orbitalStability) {
            addLog(
                `${previousSatellite.name} estabilidade orbital alterada para ${orbitalStability}`
            );
        }

        alert("Satélite atualizado com sucesso.");
    };

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: colors.background }}
            contentContainerStyle={{ padding: 16 }}
        >
            {<AppHeader title="Control Painel" />}
            <Text style={{ color: colors.primary, fontSize: 12, letterSpacing: 2 }}>
                CONTROL SYSTEM
            </Text>

            <Text
                style={{
                    color: colors.text,
                    fontSize: 26,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Mission Control Painel
            </Text>

            {/* SATELLITE */}
            <OptionSelector
                label="SATÉLITE"
                value={selectedSatelliteId}
                onChange={handleSatelliteChange}
                options={fleet.map((s) => ({
                    label: s.name,
                    value: s.id,
                }))}
            />

            {/* ENERGY */}
            <Text style={{ color: colors.textSecondary, fontSize: 12, marginBottom: 6 }}>
                ENERGY LEVEL
            </Text>

            <TextInput
                value={energy}
                onChangeText={setEnergy}
                keyboardType="numeric"
                placeholder="0 - 100"
                placeholderTextColor={colors.textSecondary}
                style={{
                    backgroundColor: colors.card,
                    color: colors.text,
                    padding: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: colors.border,
                    marginBottom: 12,
                }}
            />

            {/* COMMUNICATION */}
            <OptionSelector
                label="COMMUNICATION"
                value={communication}
                onChange={setCommunication}
                options={[
                    { label: "Online", value: true },
                    { label: "Offline", value: false },
                ]}
            />

            {/* STATUS */}
            <OptionSelector
                label="SYSTEM STATUS"
                value={systemStatus}
                onChange={setSystemStatus}
                options={[
                    { label: "Operational", value: "operational" },
                    { label: "Failure", value: "failure" },
                    { label: "Offline", value: "offline" },
                ]}
            />

            {/* ORBITAL */}
            <OptionSelector
                label="ORBITAL STABILITY"
                value={orbitalStability}
                onChange={setOrbitalStability}
                options={[
                    { label: "Stable", value: "stable" },
                    { label: "Degraded", value: "degraded" },
                    { label: "Critical", value: "critical" },
                ]}
            />

            {/* SAVE */}
            <Pressable
                onPress={updateSatellite}
                style={{
                    backgroundColor: colors.primary,
                    padding: 14,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            >
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Salvar Alterações
                </Text>
            </Pressable>

            {/* BACK */}
            <Pressable
                onPress={() => router.push("/")}
                style={{
                    backgroundColor: colors.card,
                    padding: 14,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: colors.border,
                }}
            >
                <Text
                    style={{
                        color: colors.text,
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Voltar ao Dashboard
                </Text>
            </Pressable>
        </ScrollView>
    );
};

export default ControlPanel;