const axios = require('axios')
const postcodes = axios.create({baseURL: 'https://api.postcodes.io/postcodes/'})

module.exports = async postcode => {
  const response = await postcodes.get(postcode)
  const {region} = response.data.result
  return {region}
}
