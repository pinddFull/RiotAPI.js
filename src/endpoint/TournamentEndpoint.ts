import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { TournamentCode, LobbyEventWrapper } from '../interface/Tournament'
import { ContextType, HTTPMethod } from '../request/ContextType'

class TournamentEndpoint extends Endpoint {

    /**
     * POST /lol/tournament/v3/codes
     * 
     * Body parameters exmaple
     *  {
            spectatorType: 'LOBBYONLY',
            teamSize: 5,
            pickType: 'BLIND_PICK',
            allowedSummonerIds: [
                0
            ],
            mapType: 'SUMMONERS_RIFT',
            metadata: ""
        }
     * 
     */
    public async createTournamentCodes(tournamentID: number, count?: number, body?: { [key: string]: any }): Promise<RequestResult<Array<string>>> {
        const endpointURL = `/lol/tournament/v3/codes`
        
        const parameter = {
            tournamentId: tournamentID,
            count: count
        }

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.post,
            regionType: this.regionType,
            body: body
        }

        const request = new RequestContext<Array<string>>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * PUT /lol/tournament/v3/codes/{tournamentCode}
     * 
     * Body paramters example
     *  {
            spectatorType: 'LOBBYONLY',
            pickType: 'BLIND_PICK',
            allowedSummonerIds: [
                0
            ],
            mapType: 'SUMMONERS_RIFT'
        }
     */
    public async updateTournamentCodes(tournamentCode: string, body?: { [key: string]: any }): Promise<RequestResult<void>> {
        const endpointURL = `/lol/tournament/v3/codes/${tournamentCode}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.put,
            regionType: this.regionType,
            body: body
        }

        const request = new RequestContext<void>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/tournament/v3/codes/{tournamentCode}
     */
    public async getTournamentCodes(tournamentCode: string): Promise<RequestResult<TournamentCode>> {
        const endpointURL = `/lol/tournament/v3/codes/${tournamentCode}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<TournamentCode>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/tournament/v3/lobby-events/by-code/{tournamentCode}
     */
    public async getLobbyEventsByCode(tournamentCode: string): Promise<RequestResult<LobbyEventWrapper>> {
        const endpointURL = `/lol/tournament/v3/lobby-events/by-code/${tournamentCode}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<LobbyEventWrapper>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * POST /lol/tournament/v3/providers
     */
    public async createProviders(url: string, region: string): Promise<RequestResult<number>> {
        const endpointURL = `/lol/tournament/v3/providers`

        const body = {
            url: url,
            region: region
        }

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.post,
            regionType: this.regionType,
            body: body
        }

        const request = new RequestContext<number>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * POST /lol/tournament/v3/tournaments
     */
    public async createTournaments(providerID: number, name: string): Promise<RequestResult<number>> {
        const endpointURL = `/lol/tournament/v3/tournaments`

        const body = {
            providerID: providerID,
            name: name
        }

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.post,
            regionType: this.regionType,
            body: body
        }

        const request = new RequestContext<number>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default TournamentEndpoint