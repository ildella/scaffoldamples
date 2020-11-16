const {jsonObjectToMap} = require('./utils')

const contractPricingMatrix = jsonObjectToMap({
  'one-off': 40,
  'rolling': 30,
  '6-month': 20,
  '12-month': 18,
  '18-month': 15,
})

const VAT = 0.2
const freeShipmentTreshold = 30
const FREE_SHIPMENT_COST = 0
const basicDeliverySurcharge = 7.24

const totalMonthlyCost = ({contract, bottlesPerMonth, regionSurcharge}) => {
  const costPerMonth = contractPricingMatrix.get(contract) * bottlesPerMonth
  const vat = costPerMonth * VAT
  const deliverySurcharge = costPerMonth >= freeShipmentTreshold
    ? FREE_SHIPMENT_COST
    : basicDeliverySurcharge
  const total = costPerMonth + vat + deliverySurcharge + regionSurcharge
  return {total, costPerMonth, vat, deliverySurcharge, regionSurcharge}
}

module.exports = totalMonthlyCost
