'use strict'

const fastify = require('fastify')

const totalMonthlyCost = require('../src/total-monthly-cost-per-delivery')
const regionSurcharges = require('../src/region-surcharges')

const onRequest = (request, reply, next) => {
  reply.header('Access-Control-Allow-Origin', '*')
  reply.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'])
  reply.header('Access-Control-Allow-Credentials', true)
  reply.header('X-API-version', '2020-11-08')
  return next()
}

const queryStringJsonSchema = {
  type: 'object',
  properties: {
    contract: {type: 'string',},
    region: {type: 'string'},
    bottlesPerMonth: {type: 'integer', minimum: 1},
  },
  required: ['contract', 'region', 'bottlesPerMonth'],
}

const schema = {
  querystring: queryStringJsonSchema
}

const prepare = ({logLevel = 'info'} = {}) => {
  const instance = fastify( {
    logger: {level: logLevel},
  })
  instance.addHook('onRequest', onRequest)
  instance.get('/', (request, reply) => reply.send({
    api: 'Total monthly cost',
    version: '2020-11-08',
    status: 'apparently ok :)',
  }))
  instance.get('/monthly', {schema}, (request, reply) => {
    const {contract, region, bottlesPerMonth} = request.query
    const regionSurcharge = regionSurcharges.get(region)
    const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
    return reply.send({
      total,
    })
  })
  return instance
}

module.exports = prepare
