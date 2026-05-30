export type SystemStatus = "operational" | "failure" | "offline";

export type OrbitalStability = "stable" | "degraded" | "critical";

export type Satellite = {
    id: string;
    name: string;
    systemStatus: SystemStatus;
    energy: number;
    communication: boolean;
    orbitalStability: OrbitalStability;
};