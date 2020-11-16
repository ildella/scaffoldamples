const awsLambdaFastify = require('aws-lambda-fastify')
const init = require('./region-http-server')

const proxy = awsLambdaFastify(init())

exports.handler = proxy
