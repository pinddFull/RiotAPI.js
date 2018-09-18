import { RegionType } from '../configuration/Region'
import { Config } from '../configuration/Config'

class Endpoint {
    regionType: RegionType
    apiKey: string
    config: Config

    constructor(regionType: RegionType, apiKey: string, config: Config) {
        this.regionType = regionType
        this.apiKey = apiKey
        this.config = config
    }
}

export default Endpoint