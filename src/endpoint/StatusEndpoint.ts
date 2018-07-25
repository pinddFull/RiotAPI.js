import Endpoint from '../endpoint/Endpoint'
import RequestContext from '../request/RequestContext'

import { ShardStatus } from '../interface/status'
import { RegionType } from '../configuration/region'

class StatusEndpoint implements Endpoint {

    endpointURL: string
    regionType: RegionType
    apiKey: string

    constructor(regionType: RegionType, apiKey: string) {
        this.endpointURL = 'lol/status/v3/shard-data'
        this.regionType = regionType
        this.apiKey = apiKey
    }

    /**
     * GET /lol/status/v3/shard-data
     */
    public async subscribe(): Promise<ShardStatus> {
        
        let request = new RequestContext<ShardStatus>(this.endpointURL, this.regionType, this.apiKey)

        return request.dataRequest()
    }
}

export default StatusEndpoint