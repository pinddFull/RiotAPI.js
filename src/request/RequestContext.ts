
import { RegionType } from '../configuration/region'

class RequestContext<T> {

    url: string

    constructor(endpointURL: string, regionType: RegionType) {
        this.url = this.bindURL(endpointURL, regionType)
    }

    public dataRequest(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            // request code
        })
    }

    private bindURL(endpointURL: string, regionType: RegionType): string {
        let replace = `https://${regionType.host}/${endpointURL}`

        return replace
    }
}

export default RequestContext