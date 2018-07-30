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
        let context = this.context
        let baseURL = `https://${context.regionType.host}`

        // Putting api key to params
        let params = context.params || {}
        params.api_key = this.key

        let axiosConfig: AxiosRequestConfig = {
            url: context.path,
            baseURL: baseURL,
            method: context.method,
            params: params,
        }

        return this.onNext(axiosConfig)
    }

    private onNext(config: AxiosRequestConfig): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            axios(config).then((response) => {
                // Binding to model
                let result: T = <T>response.data
                
                resolve(result)
            }).catch((error: Error) => reject(error))
        })
    }
}

export default RequestContext