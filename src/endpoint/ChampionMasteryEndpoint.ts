import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { ChampionMastery } from '../interface/ChampionMastery'
import { ContextType, HTTPMethod } from '../request/ContextType'

class ChampionMasteryEndpoint extends Endpoint {

    /**
     * GET /lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}
     */
    public async getChampionMasteriesBySummoner(summonerID: number): Promise<RequestResult<Array<ChampionMastery>>> {
        const endpointURL = `/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Array<ChampionMastery>>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}
     */
    public async getChampionMasteriesBySummonerByChampion(summonerID: number, championID: number): Promise<RequestResult<ChampionMastery>> {
        const endpointURL = `/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerID}/by-champion/${championID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<ChampionMastery>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/champion-mastery/v3/scores/by-summoner/{summonerId}
     */
    public async getChampionMasteryScoresBySummoner(summonerID: number): Promise<RequestResult<number>> {
        const endpointURL = `/lol/champion-mastery/v3/scores/by-summoner/${summonerID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<number>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default ChampionMasteryEndpoint