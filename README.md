# RiotAPI.grab

RiotAPI.grab is wrapper for the League of Legends public API.
By default, it is written and supported in typescript. Deployment is not yet complete.
[Reference to this official document.](https://developer.riotgames.com/api-methods/)

[![NPM](https://nodei.co/npm/riotapi-grab.png)](https://nodei.co/npm/riotapi-grab/)

[![Build Status](https://travis-ci.org/pinddFull/RiotAPI.grab.svg?branch=master)](https://travis-ci.org/pinddFull/RiotAPI.grab)
[![APICoverage](https://img.shields.io/badge/API%20Coverage-All%20clear-green.svg)]()

# Installation

## npm

```sh
npm i --save riotapi-grab
```

# Quick start🛵

```javascript
const { RiotAPI, Region } = require('../lib/index.js')

const riotAPI = new RiotAPI("API key", Region.kr)

riotAPI.Status
    .getStatus()
    .then((result) => {
        /* Rate manager */
        const rateManager = result.rateManager
        /* The data is returned to result.model */
        const data = result.model

        /*
            [ 'app_rate_limit | 10/s: 0.00% used',
            'app_rate_limit_count | 600/s: 0.00% used' ] 
         */
        console.log(rateManager.getUsages())

        console.log(data.locales)
    })

    .getSummonersByName("SKT T1 Faker")
    .then((result) => {
        const data = result.model

        console.log(data.summonerLevel)
    }).catch((error) => {
        console.log(error)
    })
```
The result values are returned with the model and the rate manager.
```javascript
result.model /* Result data */
result.rateManager /* Manager for corresponding API */
```

# Configuration

## Region

Region list. use it as a guide.
```javascript
{
    br: {
        platform: 'BR1',
        host: 'br1.api.riotgames.com'
    },
    eune: {
        platform: 'EUN1',
        host: 'eun1.api.riotgames.com'
    },
    euw: {
        platform: 'EUW1',
        host: 'euw1.api.riotgames.com'
    },
    jp: {
        platform: 'JP1',
        host: 'jp1.api.riotgames.com'
    },
    kr: {
        platform: 'KR',
        host: 'kr.api.riotgames.com'
    },
    lan: {
        platform: 'LA1',
        host: 'la1.api.riotgames.com'
    },
    las: {
        platform: 'LA2',
        host: 'la2.api.riotgames.com'
    },
    na: {
        platform: 'NA1',
        host: 'na1.api.riotgames.com'
    },
    oce: {
        platform: 'OC1',
        host: 'oc1.api.riotgames.com'
    },
    tr: {
        platform: 'TR1',
        host: 'tr1.api.riotgames.com'
    },
    ru: {
        platform: 'RU',
        host: 'ru.api.riotgames.com'
    },
    pbe: {
        platform: 'PBE1',
        host: 'pbe1.api.riotgames.com'
    }
}
```

## Request retries
If not, the timeout is 1000 ms and 3 retries by default.

```javascript
const { RiotAPI, Region } = require('../lib/index.js')

const config = {
    requestOptions: {
        shouldRetry: true,

        // maximum amount of retries
        numberOfRetries: 3,

        // Required when API exponentially slow
        retryDelay: 1000
    }
}

const riotAPI = new RiotAPI("API key", Region.kr, config)
```

## Rate Manager
Provides management of API usage and restrictions. 
It's not yet available, but it can be checked for monitoring.
```javascript

RiotAPI.Status
    .getStatus()
    .then((result) => {
        let rateManager = result.rateManager

        /*
            [ 'app_rate_limit | 10/s: 0.00% used',
            'app_rate_limit_count | 600/s: 0.00% used' ] 
         */
        rateManager.getUsages()
    })
```


# Methods
A list of implementations as indicated in the official document.
If anything is missing, please make an issue.
```javascript
/* CHAMPION-V3 */
RiotAPI.Champion.getChampions()
RiotAPI.Champion.getChampionsByID(id: number)

/* CHAMPION-MASTERY-V3 */
RiotAPI.ChampionMastery.getChampionMasteriesBySummoner(summonerID: number)
RiotAPI.ChampionMastery.getChampionMasteriesBySummonerByChampion(summonerID: number, championID: number)
RiotAPI.ChampionMastery.getChampionMasteryScoresBySummoner(summonerID: number)

/* LEAGUE-V3 */
RiotAPI.League.getChallengerLeagues(queue: string)
RiotAPI.League.getLeagues(leagueID: string)
RiotAPI.League.getMasterLeagues(queue: string)
RiotAPI.League.getPositionsBySummoner(summonerID: number)

/* MATCH-V3 */
RiotAPI.Match.getMatchIDsByTournamentCode(tournamentCode: number)
RiotAPI.Match.getMatchlistsByAccount(accountID: number)
RiotAPI.Match.getMatchs(matchID: number)
RiotAPI.Match.getMatchsByTournamentCode(matchID: number, tournamentCode: nymber)
RiotAPI.Match.getTimelinesByMatch(matchID: number)

/* SPECTATOR-V3 */
RiotAPI.Spectator.getActiveGamesBySummoner(summonerID: number)
RiotAPI.Spectator.getFeaturedGames()

/* LOL-STATUS-V3 */
RiotAPI.Status.getStatus()

/* SUMMONER-V3 */
RiotAPI.Summoner.getSummoners(summonerID: number)
RiotAPI.Summoner.getSummonersByAccount(accountID: number)
RiotAPI.Summoner.getSummonersByName(summonerName: string)

/* THIRD-PARTY-CODE-V3 */
RiotAPI.ThirdParty.getThirdPartyCodeBySummoner(summonerID: number)

/* TOURNAMENT-STUB-V3 */
RiotAPI.TournamentStub.createProviders(url: string, region: string)
RiotAPI.TournamentStub.createTournamentCodes(tournamentCode: number, count: number?, body: object?)
RiotAPI.TournamentStub.createTournaments(providerID: number, name: string)
RiotAPI.TournamentStub.getLobbyEventsByCode(tournamentCode: string)

/* TOURNAMENT-V3 */
RiotAPI.Tournament.createProviders(url: string, region: string)
RiotAPI.Tournament.createTournamentCodes(tournamentID: number, count: number?, body: object?)
RiotAPI.Tournament.createTournaments(providerID: number, name: string)
RiotAPI.Tournament.getLobbyEventsByCode(tournamentCode: string)
RiotAPI.Tournament.getTournamentCodes(tournamentCode: string)
RiotAPI.Tournament.updateTournamentCodes(tournamentCode: string, body: object?)
```
