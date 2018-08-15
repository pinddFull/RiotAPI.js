import { RegionType } from './configuration/Region'
import { Config } from './configuration/Config'

import StatusEndpoint from './endpoint/StatusEndpoint'
import LeagueEndpoint from './endpoint/LeagueEndpoint'
import ChampionEndpoint from './endpoint/ChampionEndpoint'
import ChampionMasteryEndpoint from './endpoint/ChampionMasteryEndpoint'
import MatchEndpoint from './endpoint/MatchEndpoint'
import SummonerEndpoint from './endpoint/SummonerEndpoint'
import SpectatorEndpoint from './endpoint/SpectatorEndpoint'
import ThirdPartyCodeEndpoint from './endpoint/ThirdPartyCodeEndpoint'
import TournamentEndpoint from './endpoint/TournamentEndpoint'
import TournamentStubEndpoint from './endpoint/TournamentStubEndpoint'

export class RiotAPI {

    private key: string
    private region: RegionType

    public readonly Status: StatusEndpoint
    public readonly League: LeagueEndpoint
    public readonly Champion: ChampionEndpoint
    public readonly ChampionMastery: ChampionMasteryEndpoint
    public readonly Match: MatchEndpoint
    public readonly Summoner: SummonerEndpoint
    public readonly Spectator: SpectatorEndpoint
    public readonly ThirdParty: ThirdPartyCodeEndpoint
    public readonly Tournament: TournamentEndpoint
    public readonly TournamentStub: TournamentStubEndpoint

    constructor(apiKey: string, region: RegionType, config?: Config) {
        const guardConfig = this.unwrapConfig(config)

        this.key = apiKey
        this.region = region

        this.Status = new StatusEndpoint(region, apiKey, guardConfig)
        this.League = new LeagueEndpoint(region, apiKey, guardConfig)
        this.Champion = new ChampionEndpoint(region, apiKey, guardConfig)
        this.ChampionMastery = new ChampionMasteryEndpoint(region, apiKey, guardConfig)
        this.Match = new MatchEndpoint(region, apiKey, guardConfig)
        this.Summoner = new SummonerEndpoint(region, apiKey, guardConfig)
        this.Spectator = new SpectatorEndpoint(region, apiKey, guardConfig)
        this.ThirdParty = new ThirdPartyCodeEndpoint(region, apiKey, guardConfig)
        this.Tournament = new TournamentEndpoint(region, apiKey, guardConfig)
        this.TournamentStub = new TournamentStubEndpoint(region, apiKey, guardConfig)
    }

    private unwrapConfig(config?: Config): Config {
        const defaultConfig: Config = {
            requestOptions: {
                shouldRetry: false,
                retryDelay: 1000,
                numberOfRetries: 3
            }
        }

        return config || defaultConfig
    }
}