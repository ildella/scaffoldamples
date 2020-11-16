const http = require('k6/http')
const {sleep, check} = require('k6')

module.exports.options = {
  vus: 20,
  duration: '2s',
}

module.exports.default = () => {
  const baseUrl = 'http://localhost:9200/N16LB'
  const res = http.get(baseUrl)
  check(res, {
    'is status 200': r => r.status === 200,
    [`GET ${baseUrl} -> 200`]: r => r.status === 200,
  })
  sleep(1)
}
