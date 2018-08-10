import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { LeagueList, LeaguePosition } from '../interface/League'
import { RegionType } from '../configuration/Region'
import { ContextType, HTTPMethod } from '../request/ContextType'
import { Config } from '../configuration/Config'

class LeagueEndpoint implements Endpoint {

    regionType: RegionType
    apiKey: string
    config: Config

    constructor(regionType: RegionType, apiKey: string, config: Config) {
        this.regionType = regionType
        this.apiKey = apiKey
        this.config = config
    }

    /**
     * GET /lol/league/v3/challengerleagues/by-queue/{queue}
     * 
     * queue - 'RANKED_SOLO_5x5' | 'RANKED_FLEX_TT' | 'RANKED_FLEX_SR'
     */
    public async getChallengerLeagues(queue: string): Promise<RequestResult<LeagueList>> {
        const endpointURL = `/lol/league/v3/challengerleagues/by-queue/${queue}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<LeagueList>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/league/v3/leagues/{leagueId}
     * 
     * leagueID - The UUID of the league.
     */
    public async getLeagues(leagueID: string): Promise<RequestResult<LeagueList>> {
        const endpointURL = `/lol/league/v3/leagues/${leagueID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<LeagueList>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/league/v3/masterleagues/by-queue/{queue}
     * 
     * queue - 'RANKED_SOLO_5x5' | 'RANKED_FLEX_TT' | 'RANKED_FLEX_SR'
     */
    public async getMasterLeagues(queue: string): Promise<RequestResult<LeagueList>> {
        const endpointURL = `/lol/league/v3/masterleagues/by-queue/${queue}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<LeagueList>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/league/v3/positions/by-summoner/{summonerId}
     */
    public async getPositionsBySummoner(summonerID: number): Promise<RequestResult<[LeaguePosition]>> {
        const endpointURL = `/lol/league/v3/positions/by-summoner/${summonerID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<[LeaguePosition]>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default LeagueEndpoint