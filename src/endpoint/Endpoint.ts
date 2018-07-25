import { RegionType } from '../configuration/region'

interface Endpoint {
    endpointURL: string
    regionType: RegionType
    apiKey: string
}

export default Endpoint