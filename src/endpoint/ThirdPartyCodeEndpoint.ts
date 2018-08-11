import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { ContextType, HTTPMethod } from '../request/ContextType'

class ThirdPartyCodeEndpoint extends Endpoint {

    /**
     * GET /lol/platform/v3/third-party-code/by-summoner/{summonerId}
     */
    public async getThirdPartyCodeBySummoner(summonerID: number): Promise<RequestResult<string>> {
        const endpointURL = `/lol/platform/v3/third-party-code/by-summoner/${summonerID}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<string>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default ThirdPartyCodeEndpoint