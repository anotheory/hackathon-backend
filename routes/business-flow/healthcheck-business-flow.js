const mongoose = require('@root/db-connection/mongodb')
const healthcheckModel = require('@root/models/healthcheck')

class HealthcheckBusinessFlow {
  constructor () {

  }

  async GetHealthcheck () {
    let healthcheckResponse = {}
    try {
      let healthcheck = await healthcheckModel.findOne()
      healthcheckResponse.body = this._MapHealthcheckResponse(healthcheck)
    } catch (err) {
      healthcheckResponse.status = 500
      healthcheckResponse.errorMessage = err 
    }
    return healthcheckResponse
  }

  _MapHealthcheckResponse (healthcheckModel) {
    return {
      version: healthcheckModel.version,
      message: healthcheckModel.message
    }
  }
}

module.exports = HealthcheckBusinessFlow