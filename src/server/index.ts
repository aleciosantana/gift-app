import { createServer, Server, Factory, Model } from 'miragejs'
import Faker from 'faker'
const makeServer = (environment: 'development' | 'test' = 'development'): Server => {
  return createServer({
    environment,
    // namespace: 'api',
    // urlPrefix: process.env.VUE_APP_API,
    models: {
      products: Model
    },
    seeds (server) {
      server.createList('product', 3)
    },
    factories: {
      product: Factory.extend({
        value: () => Faker.finance.account(3),
        title: () => Faker.commerce.productName(),
        image: () => Faker.image.image(),
        description: () => Faker.commerce.productDescription()
      })
    },
    routes () {
      this.passthrough(process.env.VUE_APP_API)

      this.get('/products', (schema) => {
        return schema.all('products').models
      })

      this.post('/products', (schema, request) => {
        const product = JSON.parse(request.requestBody)

        return schema.create('products', product).attrs
      })
    }
  })
}

export default makeServer
