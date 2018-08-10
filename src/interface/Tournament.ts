/**
 * TOURNAMENT-V3 || TOURNAMENT-STUB-V3
 * https://developer.riotgames.com/api-methods/#tournament-v3
 * https://developer.riotgames.com/api-methods/#tournament-stub-v3
 */

 export interface LobbyEventWrapper {
    eventList: Array<LobbyEvent>
 }

 export interface TournamentCode {
    map: string
    code: string
    spectators: string
    region: string
    providerId: number
    teamSize: number
    participants: Array<number>
    pickType: string
    tournamentId: number
    lobbyName: string
    password: string
    id: number
    metaData: string
 }

 export interface LobbyEvent {
    eventType: string
    summonerId: string
    timestamp: string
 }