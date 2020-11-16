'use strict'

const fastify = require('fastify')

const regionFromPostcode = require('./region-from-postcode')

const onRequest = (request, reply, next) => {
  reply.header('Access-Control-Allow-Origin', '*')
  reply.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'])
  reply.header('Access-Control-Allow-Credentials', true)
  reply.header('X-API-version', '2020-11-08')
  return next()
}

const prepare = ({logLevel = 'warn'} = {}) => {
  const instance = fastify( {
    logger: {level: logLevel},
  })
  instance.addHook('onRequest', onRequest)
  instance.get('/', (request, reply) => reply.send({
    api: 'Region from Postcode',
    version: '2020-11-08',
    status: 'apparently ok :)',
  }))
  instance.get('/:code', async (request, reply) => {
    const {code} = request.params
    try {
      const {region} = await regionFromPostcode(code)
      return reply.send({
        region,
      })
    } catch {
      const error = new Error(`region not find for postcode ${code}`)
      error.statusCode = 404
      throw error
    }
  })
  instance.setErrorHandler((error, request, reply) => {
    const status = error.statusCode || 500
    return reply.status(status).send({ok: false})
  })
  return instance
}

module.exports = prepare
