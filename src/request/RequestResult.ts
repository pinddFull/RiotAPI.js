import RateManager from '../util/RateManager'

class RequestResult<T> {

    model: T
    rateManager: RateManager

    constructor(model: T, rateManager: RateManager) {
        this.model = model
        this.rateManager = rateManager
    }
}

export default RequestResult