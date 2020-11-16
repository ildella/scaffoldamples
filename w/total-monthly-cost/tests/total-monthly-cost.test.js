/*
    The Price depends on:
  - The length of the contract (Dropdown 1B in 'Cost to customer')
  - How many bottles per month will be delivered (3B)

    Contract length Price
              One-off 40
              Rolling 30
              6 month 20
              12 month  18
              18 month  15

  - Assume VAT constant at 20%
  - Note that in 6B there is a check, if the monthly price is above 30£ there's no surcharge of 7.24£ for shipment
  - There is another surcharge per Region (Column C,D) - there's many ways to figure out a region from a postcode,
      find a free one and implement it
  - In order to make the project 'more interesting' please use a 'mono repo' structure where both
      backend and frontend are in the same repo, the backend will calculate the region either calling an external service
      or figuring it out with other rules for a given postcode, in our first iteration we used postcodes.io
  - In Screenshots sheet you can find how the service currently look like,
      feel free to just have input fields for the bare minimum requirements (Postcode, Quantity and Package type)
*/

const totalMonthlyCost = require('../src/total-monthly-cost-per-delivery')
const regionSurcharges = require('../src/region-surcharges')

const example1 = () => ({
  contract: 'one-off',
  bottlesPerMonth: 1,
  region: 'London',
})

test('1 bottle, at 40£ a month, one off package: 49.33 for London', () => {
  const {contract, region, bottlesPerMonth} = example1()
  const regionSurcharge = regionSurcharges.get(region)
  const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
  expect(total).toBe(49.33)
})

test('10 bottles, at 18£ a month, twelve months package; 217.33 for London', () => {
  const contract = '12-month'
  const bottlesPerMonth = 10
  const region = 'London'
  const regionSurcharge = regionSurcharges.get(region)
  const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
  expect(total).toBe(217.33)
})

test('10 bottles, at 18£ a month, twelve months package; 237.35 for Inverness (Highlands)', () => {
  const contract = '12-month'
  const bottlesPerMonth = 10
  const region = 'Highlands'
  const regionSurcharge = regionSurcharges.get(region)
  const {total} = totalMonthlyCost({contract, bottlesPerMonth, regionSurcharge})
  expect(total).toBe(237.35)
})
