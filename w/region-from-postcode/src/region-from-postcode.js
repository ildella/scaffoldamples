// const axios = require('axios')

const postcodeIoWrapper = require('../src/postcode-io-wrapper')
const postcodesMatrix = require('./postcodes-matrix')

const findCodeWithFallback = async postcode => {
  try {
    const {region} = await postcodeIoWrapper(postcode)
    return {region}
  } catch {
    const region = postcodesMatrix.get(postcode)
    return {region}
  }

}

module.exports = async postcode => {
  const {region} = await findCodeWithFallback(postcode)
  if (!region) {
    throw new Error(`region not find for postcode ${postcode}`)
  }
  return {region}
}
