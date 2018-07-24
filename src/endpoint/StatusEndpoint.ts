import Endpoint from '../endpoint/Endpoint'

import ShardStatus from '../interface/status'
import RequestContext from '../request/RequestContext'
import { RegionType } from '../configuration/region'

class StatusEndpoint implements Endpoint {

    endpointURL: string
    regionType: RegionType

    constructor(regionType: RegionType) {
        this.endpointURL = 'status/v3/shard-data'
        this.regionType = regionType
    }

    /**
     * GET /lol/status/v3/shard-data
     */
    public async subscribe(): Promise<ShardStatus> {
        
        let request = new RequestContext<ShardStatus>(this.endpointURL, this.regionType)

        let result = await request.dataRequest()

        return result
    }
}

export default StatusEndpoint