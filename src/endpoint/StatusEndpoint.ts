import Endpoint from './Endpoint'
import RequestContext from '../request/RequestContext'

import { ShardStatus } from '../interface/status'
import { RegionType } from '../configuration/Region'
import { ContextType, HTTPMethod } from '../request/ContextType'
import { Config } from '../configuration/Config'

class StatusEndpoint implements Endpoint {

    regionType: RegionType
    apiKey: string
    config: Config

    constructor(regionType: RegionType, apiKey: string, config: Config) {
        this.regionType = regionType
        this.apiKey = apiKey
        this.config = config
    }

    /**
     * GET /lol/status/v3/shard-data
     */
    public async subscribe(): Promise<ShardStatus> {
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