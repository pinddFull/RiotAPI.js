/**
 * CHAMPION-V3
 * https://developer.riotgames.com/api-methods/#champion-v3
 */

export interface ChampionList {
    champions: Array<Champion>
}

export interface Champion {
    rankedPlayEnabled: boolean
    botEnabled: boolean
    botMmEnabled: boolean
    active: boolean
    freeToPlay: boolean
    id: number
}