/**
 * SPECTATOR-V3
 * https://developer.riotgames.com/api-methods/#spectator-v3
 */

export interface CurrentGameInfo {
    gameId: number
    gameStartTime: number
    platformId: string
    gameMode: string
    mapId: number
    gameType: string
    bannedChampions: Array<BannedChampion>
    observers: Observer
    participants: Array<CurrentGameParticipant>
    gameLength: number
    gameQueueConfigId: number
}

export interface FeaturedGames {
    clientRefreshInterval: number
    gameList: Array<FeaturedGameInfo>
}

export interface FeaturedGameInfo {
    gameId: number
    gameStartTime: number
    platformId: string
    gameMode: string
    mapId: number
    gameType: string
    bannedChampions: Array<BannedChampion>
    observers: Observer
    participants: Array<Participant>
    gameLength: number
    gameQueueConfigId: number
}

export interface BannedChampion {
    pickTurn: number
    championId: number
    teamId: number
}

export interface Observer {
    encryptionKey: string
}

export interface CurrentGameParticipant {
    profileIconId: number
    championId: number
    summonerName: string
    gameCustomizationObjects: Array<GameCustomizationObject>
    bot: boolean
    perks: Perks
    spell2Id: number
    teamId: number
    spell1Id: number
    summonerId: number
}

export interface GameCustomizationObject {
    category: string
    content: string
}
 
export interface Perks {
    perkStyle: number
    perkIds: Array<number>
    perkSubStyle: number
}

export interface Participant {
    profileIconId: number
    championId: number
    summonerName: string
    bot: boolean
    spell2Id: number
    teamId: number
    spell1Id: number
}