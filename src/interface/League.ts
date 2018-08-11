/**
 * LEAGUE-V3
 * https://developer.riotgames.com/api-methods/#league-v3
 */

export interface LeagueList {
    leagueId: string
    tier: string
    entries: Array<LeagueItem>
    queue: string
    name: string
 }

export interface LeaguePosition {
    rank: string
    queueType: string
    hotStreak: boolean
    miniSeries: MiniSeries
    wins: number
    veteran: boolean
    losses: number
    freshBlood: boolean
    leagueId: string
    playerOrTeamName: string
    inactive: boolean
    playerOrTeamId: string
    leagueName: string
    tier: string
    leaguePoints: number
}

export interface LeagueItem {
     rank: string
     hotStreak: boolean
     miniSeries: MiniSeries
     wins: number
     veteran: boolean
     losses: number
     freshBlood: boolean
     playerOrTeamName: string
     inactive: boolean
     playerOrTeamId: string
     leaguePoints: number
}

export interface MiniSeries {
    wins: number
    losses: number
    target: number
    progress: string
}