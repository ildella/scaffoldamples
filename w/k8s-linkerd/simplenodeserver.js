const http = require('http')
const port = 4546
console.log(`Startin up server on port ${port}`)

const handleRequest = (request, response) => {
  console.log('Received request for URL: ' + request.url)
  response.writeHead(200)
  response.end('Hello Linkerd\n')
}
const www = http.createServer(handleRequest)
www.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
