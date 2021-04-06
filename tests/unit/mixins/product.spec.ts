import { useProductMixin } from '@/mixins'
import makeServer from '@/server'
import { Server } from 'miragejs/server'

makeServer()

describe('useProductMixin', () => {
  let server: Server

  beforeEach(() => {
    server = makeServer('test')
  })

  afterEach(() => {
    server.shutdown()
  })

  it('should contain a list of products after calling the function fetchProducts', async () => {
    const { products, fetchProducts } = useProductMixin()
    server.createList('product', 2)

    expect(products.value).toHaveLength(0)

    await fetchProducts()
    expect(products.value).toHaveLength(2)
  })

  it('should save a new product by calling the saveProduct function', async () => {
    const { products, saveProduct } = useProductMixin()
    expect(products.value).toHaveLength(0)

    await saveProduct({
      title: 'my title',
      description: 'my description',
      image: 'img url',
      value: 200
    })
    expect(products.value).toHaveLength(1)
  })

  // TODO: ...
})
