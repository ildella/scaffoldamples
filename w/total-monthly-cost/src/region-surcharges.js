const {jsonObjectToMap} = require('./utils')

const regionSuchargeMatrix = jsonObjectToMap({
  'London': 1.33,
  'Devon & Cornwall': 1.6,
  'Grampians': 8.54,
  'Highlands': 21.35,
  'Isle of Wight': 7.47,
  'Industrial Scotland': 1.07,
  'Northern Ireland': 21.58,
  'Dublin': 25.85,
})

module.exports = regionSuchargeMatrix
