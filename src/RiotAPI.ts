import { RegionType } from './configuration/region'

import StatusEndpoint from './endpoint/StatusEndpoint'
import LeagueEndpoint from './endpoint/LeagueEndpoint'

export class RiotAPI {

    private key: string
    private region: RegionType

    public statusEndpoint: StatusEndpoint
    public leagueEndpoint: LeagueEndpoint

    constructor(apiKey: string, region: RegionType) {
        this.key = apiKey
        this.region = region

        this.statusEndpoint = new StatusEndpoint(region, apiKey)
        this.leagueEndpoint = new LeagueEndpoint(region, apiKey)
    }
}