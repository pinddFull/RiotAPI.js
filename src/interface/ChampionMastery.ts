/**
 * CHAMPION-MASTERY-V3
 * https://developer.riotgames.com/api-methods/#champion-mastery-v3
 */

 export interface ChampionMastery {
    chestGranted: boolean
    championLevel: number
    championPoints: number
    championId: number
    playerId: number
    championPointsUntilNextLevel: number
    tokensEarned: number
    championPointsSinceLastLevel: number
    lastPlayTime: number
 }