import type { Satellite } from "../types/satellite";

export const mockFleet: Satellite[] = [
    {
        id: "SAT-01",
        name: "Satélite 1",
        systemStatus: "operational",
        energy: 100,
        communication: true,
        orbitalStability:  "stable",
    },
    {
        id: "SAT-02",
        name: "Satélite 2",
        systemStatus: "operational",
        energy: 70,
        communication: false,
        orbitalStability:  "stable",
    },
    {
        id: "SAT-03",
        name: "Satélite 3",
        systemStatus: "failure",
        energy: 0,
        communication: true,
        orbitalStability:  "degraded",
    }
]