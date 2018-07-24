import { Region, RegionType } from './configuration/region'

class RiotAPI {

    private key: string
    private region: RegionType

    constructor(apiKey: string, regionType: RegionType) {
        this.key = apiKey
        this.region = regionType
    }
}

export default RiotAPI