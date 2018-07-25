import axios from 'axios'

import { RegionType } from '../configuration/region'

class RequestContext<T> {

    url: string
    key: string

    constructor(endpointURL: string, regionType: RegionType, apiKey: string) {
        this.url = this.bindURL(endpointURL, regionType)
        this.key = apiKey
    }

    public dataRequest(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            console.log(this.url)
            axios.get(this.url, {
                params: {
                    api_key: this.key
                }
            }).then((response) => {
                let model: T = <T>response.data
                resolve(model)
            }).catch((error: Error) => {
                reject(error)
            })
        })
    }

    private bindURL(endpointURL: string, regionType: RegionType): string {
        let replace = `https://${regionType.host}/${endpointURL}`

        return replace
    }
}

export default RequestContext