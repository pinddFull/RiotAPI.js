const { RiotAPI, Region } = require('../lib/index.js')

let region = Region.kr
let config = {
    requestOptions: {
        shouldRetry: false,
        numberOfRetries: 3,
        retryDelay: 1000
    }
}

let api = new RiotAPI("Your api key", region, config)

api.Status.subscribe().then((result) => {
    console.log(result.rateManager.getUsage())
    console.log(result.model.services[0].name)
})