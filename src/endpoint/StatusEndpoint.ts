import Endpoint from '../endpoint/Endpoint'
import RequestContext from '../request/RequestContext'

import { ShardStatus } from '../interface/status'
import { RegionType } from '../configuration/region'
import { ContextType, HTTPMethod } from '../request/ContextType';

class StatusEndpoint implements Endpoint {

    regionType: RegionType
    apiKey: string

    constructor(regionType: RegionType, apiKey: string) {
        this.regionType = regionType
        this.apiKey = apiKey
    }

    /**
     * GET /lol/status/v3/shard-data
     */
    public async subscribe(): Promise<ShardStatus> {
        let endpointURL = `/lol/status/v3/shard-data`

        let context: ContextType = {
            path: endpointURL,
            method: HTTPMethod.get,
            regionType: this.regionType
        }
        
        let request = new RequestContext<ShardStatus>(context, this.apiKey)

        return request.dataRequest()
    }
}

export default StatusEndpoint