jest.setTimeout(1500)

const postcodeIoWrapper = require('../src/postcode-io-wrapper')

test('success', async () => {
  const {region} = await postcodeIoWrapper('N16LB')
  expect(region).toBe('London')
})

test('postcode.io does not have this code...', async () => {
  await expect(postcodeIoWrapper('PA38')).rejects.toThrow('404')
})

test('wrong postcode', async () => {
  await expect(postcodeIoWrapper('missing')).rejects.toThrow('404')
})
