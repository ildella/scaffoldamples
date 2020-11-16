const jsonObjectToMap = json => {
  const map = new Map()
  for (const value in json) {
    map.set(value, json[value])
  }
  return map
}

module.exports = {
  jsonObjectToMap,
}
