import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'
import RequestResult from '../request/RequestResult'

import { ShardStatus } from '../interface/status'
import { ContextType, HTTPMethod } from '../request/ContextType'

class StatusEndpoint extends Endpoint {

    /**
     * GET /lol/status/v3/shard-data
     */
    public async subscribe(): Promise<RequestResult<ShardStatus>> {
        const endpointURL = `/lol/status/v3/shard-data`

        const context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }
        
        const request = new RequestContext<ShardStatus>(context, this.apiKey, this.config.requestOptions)

        return request.dataRequest()
    }
}

export default StatusEndpoint