const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HealthcheckSchema = new Schema({
  version: { type: String, required: true, maxLength: 100},
  message: { type: String, required: true, maxLength: 100}
})

module.exports = mongoose.model("Healthcheck", HealthcheckSchema)