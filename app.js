require('module-alias/register')

const express = require('express')
const app = express()

const appConfig = require('./app-config.json')

app.use(express.json())

const healthcheckRouter = require('./routes/healthcheck-router')


app.use('/', healthcheckRouter)
// app.use('/users', usersRouter)

console.log(`App is currently listening at port [${appConfig.port}]\n`)
app.listen(appConfig.port)