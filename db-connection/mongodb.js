const appConfig = require('@root/app-config.json')
const mongoose = require('mongoose')
const healthcheckModel = require('@root/models/healthcheck')
let db = mongoose.connection

mongoose.connect(appConfig.connectionString.mongodb)
  .then(async () => {
    const healthcheck = await healthcheckModel.findOne({})
    if (!healthcheck) {
      let healthcheck = new healthcheckModel({
        version: "latest",
        message: "I'm fine, thank you :>"
      }) 
      await healthcheck.save()
    }
  })
  .catch((error) => {
    if (error) throw error
  })

module.exports = mongoose
