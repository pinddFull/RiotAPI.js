import { RegionType } from './configuration/region'
import Config from './Config'

import StatusEndpoint from './endpoint/StatusEndpoint'
import LeagueEndpoint from './endpoint/LeagueEndpoint'

export class RiotAPI {

    private key: string
    private region: RegionType
    
    private config?: Config

    public Status: StatusEndpoint
    public League: LeagueEndpoint

    constructor(apiKey: string, region: RegionType, config?: Config) {
        this.key = apiKey
        this.region = region
        this.config = config

        this.Status = new StatusEndpoint(region, apiKey)
        this.League = new LeagueEndpoint(region, apiKey)
    }
}