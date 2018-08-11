/**
 * Match-V3
 * https://developer.riotgames.com/api-methods/#match-v3
 */

export interface Match {
    seasonId: number
    queueId: number
    gameId: number
    participantIdentities: Array<ParticipantIdentity>
    gameVersion: string
    platformId: string
    gameMode: string
    mapId: number
    gameType: string
    teams: Array<TeamStats>
    participants: Array<Participant>
    gameDuration: number
    gameCreation: number
 }

export interface MatchTimeline {
    frames: Array<MatchFrame>
    frameInterval: number
}

export interface MatchFrame {
    timestamp: number
    participantFrames: Map<number, MatchParticipantFrame>
    events: Array<MatchEvent>
}

export interface MatchParticipantFrame {
    totalGold: number
    teamScore: number
    participantId: number
    level: number
    currentGold: number
    minionsKilled: number
    dominionScore: number
    position: MatchPosition
    xp: number
    jungleMinionsKilled: number
}

export interface MatchEvent {
    eventType: string
    towerType: string
    teamId: number
    ascendedType: string
    killerId: number
    levelUpType: string
    pointCaptured: string
    assistingParticipantIds: Array<number>
    wardType: string
    monsterType: string
    type: string
    skillSlot: number
    victimId: number
    timestamp: number
    afterId: number
    monsterSubType: string
    laneType: string
    itemId: number
    participantId: number
    buildingType: string
    creatorId: number
    position: MatchPosition
}

export interface MatchPosition {
    x: number
    y: number
}

export interface MatchList {
    matches: Array<MatchReference>
    totalGames: number
    startIndex: number
    endIndex: number
}

export interface MatchReference {
     lane: string
     gameId: number
     champion: number
     platformId: string
     season: number
     queue: number
     role: string
     timestamp: number
}

export interface ParticipantIdentity {
    player: Player
    participantId: number
}

export interface Player {
    currentPlatformId: string
    summonerName: string
    matchHistoryUri: string
    platformId: string
    currentAccountId: number
    profileIcon: number
    summonerId: number
    accountId: number
}

export interface TeamStats {
    firstDragon: boolean
    firstInhibitor: boolean
    bans: Array<TeamBans>
    baronKills: number
    firstRiftHerald: boolean
    firstBaron: boolean
    riftHeraldKills: number
    firstBlood: boolean
    teamId: number
    firstTower: boolean
    vilemawKills: number
    inhibitorKills: number
    towerKills: number
    dominionVictoryScore: number
    win: string
    dragonKills: number
}

export interface TeamBans {
    pickTurn: number
    championId: number
}

export interface Participant {
    stats: ParticipantStats
    participantId: number
    runes: Array<Rune>
    timeline: ParticipantTimeline
    teamId: number
    spell2Id: number
    masteries: Array<Mastery>
    highestAchievedSeasonTier: string
    spell1Id: number
    championId: number
}

export interface ParticipantStats {
    firstBloodAssist: boolean
    visionScore: number
    magicDamageDealtToChampions: number
    damageDealtToObjectives: number
    totalTimeCrowdControlDealt: number
    longestTimeSpentLiving: number
    perk1Var1: number
    perk1Var3: number
    perk1Var2: number
    tripleKills: number
    perk3Var3: number
    nodeNeutralizeAssist: number
    perk3Var2: number
    playerScore9: number
    playerScore8: number
    kills: number
    playerScore1: number
    playerScore0: number
    playerScore3: number
    playerScore2: number
    playerScore5: number
    playerScore4: number
    playerScore7: number
    playerScore6: number
    perk5Var1: number
    perk5Var3: number
    perk5Var2: number
    totalScoreRank: number
    neutralMinionsKilled: number
    damageDealtToTurrets: number
    physicalDamageDealtToChampions: number
    nodeCapture: number
    largestMultiKill: number
    perk2Var2: number
    perk2Var3: number
    totalUnitsHealed: number
    perk2Var1: number
    perk4Var1: number
    perk4Var2: number
    perk4Var3: number
    wardsKilled: number
    largestCriticalStrike: number
    largestKillingSpree: number
    quadraKills: number
    teamObjective: number
    magicDamageDealt: number
    item2: number
    item3: number
    item0: number
    neutralMinionsKilledTeamJungle: number
    item6: number
    item4: number
    item5: number
    perk1: number
    perk0: number
    perk3: number
    perk2: number
    perk5: number
    perk4: number
    perk3Var1: number
    damageSelfMitigated: number
    magicalDamageTaken: number
    firstInhibitorKill: boolean
    trueDamageTaken: number
    nodeNeutralize: number
    assists: number
    combatPlayerScore: number
    perkPrimaryStyle: number
    goldSpent: number
    trueDamageDealt: number
    participantId: number
    totalDamageTaken: number
    physicalDamageDealt: number
    sightWardsBoughtInGame: number
    totalDamageDealtToChampions: number
    physicalDamageTaken: number
    totalPlayerScore: number
    win: boolean
    objectivePlayerScore: number
    totalDamageDealt: number
    item1: number
    neutralMinionsKilledEnemyJungle: number
    deaths: number
    wardsPlaced: number
    perkSubStyle: number
    turretKills: number
    firstBloodKill: boolean
    trueDamageDealtToChampions: number
    goldEarned: number
    killingSprees: number
    unrealKills: number
    altarsCaptured: number
    firstTowerAssist: boolean
    firstTowerKill: boolean
    champLevel: number
    doubleKills: number
    nodeCaptureAssist: number
    inhibitorKills: number
    firstInhibitorAssist: boolean
    perk0Var1: number
    perk0Var2: number
    perk0Var3: number
    visionWardsBoughtInGame: number
    altarsNeutralized: number
    pentaKills: number
    totalHeal: number
    totalMinionsKilled: number
    timeCCingOthers: number
}

export interface Rune {
    runeId: number
    rank: number
}

export interface ParticipantTimeline {
    lane: string
    participantId: number
    csDiffPerMinDeltas: Map<string, number>
    goldPerMinDeltas: Map<string, number>
    xpDiffPerMinDeltas: Map<string, number>
    creepsPerMinDeltas: Map<string, number>
    xpPerMinDeltas: Map<string, number>
    role: string
    damageTakenDiffPerMinDeltas: Map<string, number>
    damageTakenPerMinDeltas: Map<string, number>
}

export interface Mastery {
    masteryId: number
    rank: number
}