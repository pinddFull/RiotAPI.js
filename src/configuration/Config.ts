export interface Config {
    requestOptions: RequestOptions
}

export interface RequestOptions {
    numberOfRetries: number,
    retryDelay: number
}