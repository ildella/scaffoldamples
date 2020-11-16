jest.setTimeout(1500)

const regionFromPostcode = require('../src/region-from-postcode')

test('success - from postcode', async () => {
  const {region} = await regionFromPostcode('N16LB')
  expect(region).toBe('London')
})

test('success - from local matrix', async () => {
  const {region} = await regionFromPostcode('PA33')
  expect(region).toBe('Highlands')
})

test('failure', async () => {
  await expect(regionFromPostcode('missing')).rejects.toThrow()
})
