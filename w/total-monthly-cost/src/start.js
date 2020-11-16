const regionHttpServer = require('./total-monthly-cost-http-server')

const start = async () => {
  const server = regionHttpServer()
  const url = await server.listen(9202)
  console.log(`Region HTTP server started --> ${url}`)
}

start()
