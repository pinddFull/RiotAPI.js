import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { Champion, ChampionList } from '../interface/Champion'
import { ContextType, HTTPMethod } from '../request/ContextType'

class ChampionEndpoint extends Endpoint {

    /**
     * GET /lol/platform/v3/champions
     */
    public async getChampions(): Promise<RequestResult<ChampionList>> {
        const endpointURL = `/lol/platform/v3/champions`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<ChampionList>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }

    /**
     * GET /lol/platform/v3/champions/${id}
     */
    public async getChampionsByID(id: number): Promise<RequestResult<Champion>> {
        const endpointURL = `/lol/platform/v3/champions/${id}`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }

        const request = new RequestContext<Champion>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default ChampionEndpoint