import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { Summoner } from '../interface/Summoner'
import { ContextType, HTTPMethod } from '../request/ContextType'

class SummonerEndpoint extends Endpoint {
   
    /**
     * GET /lol/summoner/v3/summoners/by-account/${accountId}
     */
    public async getSummonersByAccount(accountID: number): Promise<RequestResult<Summoner>> {
        const endpointURL = `/lol/summoner/v3/summoners/by-account/${accountID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Summoner>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/summoner/v3/summoners/by-name/${summonerName}
     */
    public async getSummonersByName(summonerName: string): Promise<RequestResult<Summoner>> {
        const endpointURL = `/lol/summoner/v3/summoners/by-name/${summonerName}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Summoner>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/summoner/v3/summoners/${summonerId}
     */
    public async getSummoners(summonerID: number): Promise<RequestResult<Summoner>> {
        const endpointURL = `/lol/summoner/v3/summoners/${summonerID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Summoner>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default SummonerEndpoint