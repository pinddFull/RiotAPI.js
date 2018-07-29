import Endpoint from '../endpoint/Endpoint'
import RequestContext from '../request/RequestContext'

import { LeagueList, LeaguePosition } from '../interface/League'
import { RegionType } from '../configuration/region'
import { ContextType, HTTPMethod } from '../request/ContextType';

class LeagueEndpoint implements Endpoint {

    regionType: RegionType
    apiKey: string

    constructor(regionType: RegionType, apiKey: string) {
        this.regionType = regionType
        this.apiKey = apiKey
    }

    /**
     * GET /lol/league/v3/challengerleagues/by-queue/{queue}
     * 
     * queue - 'RANKED_SOLO_5x5' | 'RANKED_FLEX_TT' | 'RANKED_FLEX_SR'
     */
    public async getChallengerLeagues(queue: string): Promise<LeagueList> {
        let endpointURL = `/lol/league/v3/challengerleagues/by-queue/${queue}`

        let context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        let request = new RequestContext<LeagueList>(context, this.apiKey)

        return request.dataRequest()
    }

    /**
     * GET /lol/league/v3/leagues/{leagueId}
     * 
     * leagueID - The UUID of the league.
     */
    public async getLeagues(leagueID: string): Promise<LeagueList> {
        let endpointURL = `/lol/league/v3/leagues/${leagueID}`

        let context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        let request = new RequestContext<LeagueList>(context, this.apiKey)

        return request.dataRequest()
    }

    /**
     * GET /lol/league/v3/masterleagues/by-queue/{queue}
     * 
     * queue - 'RANKED_SOLO_5x5' | 'RANKED_FLEX_TT' | 'RANKED_FLEX_SR'
     */
    public async getMasterLeagues(queue: string): Promise<LeagueList> {
        let endpointURL = `/lol/league/v3/masterleagues/by-queue/${queue}`

        let context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        let request = new RequestContext<LeagueList>(context, this.apiKey)

        return request.dataRequest()
    }

    /**
     * GET /lol/league/v3/positions/by-summoner/{summonerId}
     */
    public async getPositionsBySummoner(summonerID: number): Promise<[LeaguePosition]> {
        let endpointURL = `/lol/league/v3/positions/by-summoner/${summonerID}`

        let context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        let request = new RequestContext<[LeaguePosition]>(context, this.apiKey)

        return request.dataRequest()
    }
}

export default LeagueEndpoint