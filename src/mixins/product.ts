import { Product } from '@/types'
import axios from 'axios'
import { Ref, ref } from 'vue'

interface ProductMixin {
  products: Ref<Product[]>,
  fetchProducts: () => Promise<Product[]>
  saveProduct: (product: Product) => Promise<Product>
}

export default (): ProductMixin => {
  const products = ref<Product[]>([])

  const fetchProducts = async (): Promise<Product[]> => {
    const { data: _products } = await axios.get('/products')

    products.value = _products as Product[]

    return _products
  }

  const saveProduct = async (product: Product): Promise<Product> => {
    const { data: _product } = await axios.post('/products', product)

    products.value = [...products.value, _product]

    return _product
  }

  return { products, fetchProducts, saveProduct }
}
