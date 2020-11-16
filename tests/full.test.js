jest.setTimeout(1500)
const totalMonthlyCost = require('../w/total-monthly-cost/src/total-monthly-cost-per-delivery')
const regionSurcharges = require('../w/total-monthly-cost/src/region-surcharges')
const regionFromPostcode = require('../w/region-from-postcode/src/postcode-io-wrapper')

const example1 = () => ({
  contract: 'one-off',
  bottlesPerMonth: 1,
  postcode: 'N16LB',
})

test('1 bottle, at 40£ a month, one off package: 49.33 for London', async () => {
  const {contract, bottlesPerMonth, postcode} = example1()
  const {region} = await regionFromPostcode(postcode)
  const regionSurcharge = regionSurcharges.get(region)
  const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
  expect(total).toBe(49.33)
})

const example2 = () => ({
  contract: '18-month',
  bottlesPerMonth: 1,
  postcode: 'N16LB',
})

test('1 bottle, at 18 month package for London', async () => {
  const {contract, bottlesPerMonth, postcode} = example2()
  const {region} = await regionFromPostcode(postcode)
  const regionSurcharge = regionSurcharges.get(region)
  const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
  expect(total).toBe(26.57)
})

// test('10 bottles, at 18£ a month, twelve months package; 237.35 for Highlands', async () => {
//   const contract = '12-month'
//   const bottlesPerMonth = 10
//   const postcode = 'PA38'
//   const {region} = await regionFromPostcode(postcode)
//   const regionSurcharge = regionSurcharges.get(region)
//   const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
//   expect(total).toBe(237.35)
// })
