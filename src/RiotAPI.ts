import { Region, RegionType } from './configuration/region'

import StatusEndpoint from './endpoint/StatusEndpoint';

export class RiotAPI {

    private key: string
    private region: RegionType

    public statusEndpoint: StatusEndpoint

    constructor(apiKey: string, regionType: RegionType) {
        this.key = apiKey
        this.region = regionType

        this.statusEndpoint = new StatusEndpoint(this.region, apiKey)
    }
}