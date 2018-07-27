import axios, { AxiosRequestConfig } from 'axios'

import { ContextType } from './ContextType'
import { RegionType } from '../configuration/region'

class RequestContext<T> {

    key: string
    context: ContextType

    constructor(context: ContextType, apiKey: string) {
        this.context = context
        this.key = apiKey
    }

    public dataRequest(): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let context = this.context
            let url = this.bindURL(context.path, context.regionType)

            // Putting api key to params
            let params = context.params || {}
            params.api_key = this.key

            let axiosConfig: AxiosRequestConfig = {
                url: url,
                method: context.method,
                params: params,
            }

            axios(axiosConfig).then((response) => {
                let result: T = <T>response.data
                resolve(result)
            }).catch((error: Error) => reject(error))
        })
    }

    private bindURL(endpointURL: string, regionType: RegionType): string {
        let replace = `https://${regionType.host}/${endpointURL}`

        return replace
    }
}

export default RequestContext