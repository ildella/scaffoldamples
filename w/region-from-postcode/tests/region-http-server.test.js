const axios = require('axios')

const prepare = require('../src/region-http-server')

const server = prepare()

let regionService
beforeAll(async () => {
  const url = await server.listen()
  const port = url.split(':')[2]
  regionService = axios.create({baseURL: `http://localhost:${port}/`})
})

afterAll(async () => {
  await server.close()
})

test('smoke http test', async () => {
  const response = await regionService.get('/')
  expect(response.status).toBe(200)
  expect(response.data.api).toBe('Region from Postcode')
})

test('PA33 -> Highlands', async () => {
  const response = await regionService.get('/PA33')
  expect(response.status).toBe(200)
  const {region} = response.data
  expect(region).toBe('Highlands')
})

test('TD15 -> Highlands', async () => {
  const response = await regionService.get('/TD15')
  expect(response.status).toBe(200)
  const {region} = response.data
  expect(region).toBe('Industrial Scotland')
})

test('London', async () => {
  const response = await regionService.get('/N16LB')
  expect(response.status).toBe(200)
  const {region} = response.data
  expect(region).toBe('London')
})

test('missing postcode', async () => {
  await expect(regionService.get('/missing')).rejects.toThrow('404')
})
