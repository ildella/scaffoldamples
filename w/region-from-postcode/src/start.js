const regionHttpServer = require('./region-http-server')

const start = async () => {
  const server = regionHttpServer()
  const url = await server.listen(9200)
  console.log(`Region HTTP server started --> ${url}`)
}

start()
