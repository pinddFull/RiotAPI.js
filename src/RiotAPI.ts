import { RegionType } from './configuration/Region'
import { Config } from './configuration/Config'

import StatusEndpoint from './endpoint/StatusEndpoint'
import LeagueEndpoint from './endpoint/LeagueEndpoint'

export class RiotAPI {

    private key: string
    private region: RegionType

    public Status: StatusEndpoint
    public League: LeagueEndpoint

    constructor(apiKey: string, region: RegionType, config?: Config) {
        const guardConfig = this.unwrapConfig(config)

        this.key = apiKey
        this.region = region

        this.Status = new StatusEndpoint(region, apiKey, guardConfig)
        this.League = new LeagueEndpoint(region, apiKey, guardConfig)
    }

    private unwrapConfig(config?: Config): Config {
        const defaultConfig: Config = {
            requestOptions: {
                retryDelay: 1000,
                numberOfRetries: 3
            }
        }

        return config || defaultConfig
    }
}