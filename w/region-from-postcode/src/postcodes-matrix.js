const regions = {
  'Industrial Scotland': ['TD14', 'TD15'],
  'Scottish Offshore': ['ZE1', 'ZE2', 'ZE3'],
  'Highlands': ['PA33', 'P38'],
}

const matrix = new Map()
Object
  .entries(regions)
  .flatMap(([region, postcodes]) => postcodes.map(code => ({code, region})))
  // .map(({code, region}) => ({[code]: region}))
  .forEach(({code, region}) => matrix.set(code, region))

module.exports = matrix
