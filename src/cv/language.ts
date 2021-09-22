type Level = "B1" | "B2" | "C1"

export type Language = {
    name: string,
    listening: Level,
    reading: Level,
    spokenInteraction: Level,
    spokenProduction: Level,
    writing: Level
}