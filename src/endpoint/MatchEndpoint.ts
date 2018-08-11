import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { Match, MatchList, MatchTimeline } from '../interface/Match'
import { ContextType, HTTPMethod } from '../request/ContextType'


class MatchEndpoint extends Endpoint {

    /**
     * GET /lol/match/v3/matches/{matchId}
     */
    public async getMatchs(matchID: number): Promise<RequestResult<Match>> {
        const endpointURL = `/lol/match/v3/matches/${matchID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Match>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/match/v3/matchlists/by-account/${accountId}
     */
    public async getMatchlistsByAccount(accountID: number): Promise<RequestResult<MatchList>> {
        const endpointURL = `/lol/match/v3/matchlists/by-account/${accountID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<MatchList>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/match/v3/timelines/by-match/${matchId}
     */
    public async getTimelinesByMatch(matchID: number): Promise<RequestResult<MatchTimeline>> {
        const endpointURL = `/lol/match/v3/timelines/by-match/${matchID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<MatchTimeline>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/match/v3/matches/by-tournament-code/${tournamentCode}/ids
     */
    public async getMatchIDsByTournamentCode(tournamentCode: number): Promise<RequestResult<Array<number>>> {
        const endpointURL = `/lol/match/v3/matches/by-tournament-code/${tournamentCode}/ids`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Array<number>>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/match/v3/matches/${matchId}/by-tournament-code/${tournamentCode}
     */
    public async getMatchsByTournamentCode(matchID:number, tournamentCode: number): Promise<RequestResult<Match>> {
        const endpointURL = `/lol/match/v3/matches/${matchID}/by-tournament-code/${tournamentCode}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Match>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default MatchEndpoint