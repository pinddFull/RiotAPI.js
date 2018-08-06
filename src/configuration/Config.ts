export interface Config {
    requestOptions: RequestOptions
}

export interface RequestOptions {
    shouldRetry: boolean,
    numberOfRetries: number,
    retryDelay: number
}