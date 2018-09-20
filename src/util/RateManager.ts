
type LimitCount = { 
    usageCount: number
    perSecond: number
}

enum RateCountHeader {
    app_rate_limit = 'x-app-rate-limit',
    app_rate_limit_count = 'x-app-rate-limit-count',
    method_rate_limit = 'x-method-rate-limit',
    method_rate_limit_count = 'x-method-rate-limit-count'
}

class RateManager {

    private headers: any

    constructor(headers: any) {
        this.headers = headers
    }

    public getUsages(): Array<string> {

        const limitStringKeys = Object.keys(RateCountHeader).filter(k => typeof RateCountHeader[k as any] === "string")
        const limitStringList = limitStringKeys.map(k => RateCountHeader[k as any])

        let result: { [key: string]: Array<LimitCount> } = {}

        limitStringList.forEach(element => {
            let limitText: string = this.headers[element]

            if (limitText) {
                result[element] = this.splitSecond(limitText)
            }
        })

        const limits = result[RateCountHeader.method_rate_limit]
        const counts = result[RateCountHeader.method_rate_limit_count]

        const rates = limits.map((limit, i) => {
            const rate = counts[i].usageCount / limit.usageCount
            const showRate = rate.toFixed(2)
            return `${limitStringKeys[i]} | ${limit.perSecond}/s: ${showRate}% used`
        })

        return rates
    }

    private splitSecond(limitText: string): Array<LimitCount> {
        const limitList = limitText.split(',')

        return limitList.map(this.convertLimitCount)
    }

    private convertLimitCount(element: string): LimitCount {
        const elements = element.split(':')
        const usageCount = Number(elements[0])
        const perSecond = Number(elements[1])

        return { usageCount, perSecond }
    }
}

export default RateManager