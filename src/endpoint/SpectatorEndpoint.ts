import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { CurrentGameInfo, FeaturedGames } from '../interface/Spectator'
import { ContextType, HTTPMethod } from '../request/ContextType'

class SpectatorEndpoint extends Endpoint {
   
    /**
     * GET /lol/spectator/v3/active-games/by-summoner/${summonerId}
     */
    public async getActiveGamesBySummoner(summonerID: number): Promise<RequestResult<CurrentGameInfo>> {
        const endpointURL = `/lol/spectator/v3/active-games/by-summoner/${summonerID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<CurrentGameInfo>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/spectator/v3/featured-games
     */
    public async getFeaturedGames(): Promise<RequestResult<FeaturedGames>> {
        const endpointURL = `/lol/spectator/v3/featured-games`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<FeaturedGames>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default SpectatorEndpoint