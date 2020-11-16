const axios = require('axios')

const prepare = require('../src/total-monthly-cost-http-server')

const server = prepare()

let costService
beforeAll(async () => {
  const url = await server.listen()
  const port = url.split(':')[2]
  costService = axios.create({baseURL: `http://localhost:${port}/`})
})

afterAll(async () => {
  await server.close()
})

test('ping', async () => {
  const response = await costService.get('/')
  expect(response.status).toBe(200)
  expect(response.data.api).toBe('Total monthly cost')
})

test('request cost', async () => {
  const response = await costService
    .get('/monthly?contract=one-off&region=London&bottlesPerMonth=1')
  expect(response.status).toBe(200)
  expect(response.data).toEqual({total: 49.33})
})

test('wrong endpoint', async () => {
  await expect(costService.get('/missing')).rejects.toThrow('404')
})

test('missing params', async () => {
  await expect(costService.get('/monthly?contract=one-off')).rejects.toThrow('400')
})

test('mixed API validation errors', async () => {
  await expect(costService.get('/monthly?contract=one-off&region=London&bottlesPerMonth=0')).rejects.toThrow('400')
})
