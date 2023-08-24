const express = require('express')
const router = express.Router()
const HealthcheckBusinessFlow = require('@root/routes/business-flow/healthcheck-business-flow')

let healthcheckBusinessFlow = new HealthcheckBusinessFlow()

router.get('/', async function (req, res) {
  let response = await healthcheckBusinessFlow.GetHealthcheck()
  if (response.status) {
    res.status(response.status).send(response.errorMessage)
  } else {
    res.send(response.body)
  }
})

module.exports = router;