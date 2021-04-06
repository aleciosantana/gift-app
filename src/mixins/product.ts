import { Product } from '@/types'
import axios from 'axios'
import { Ref, ref } from 'vue'

interface ProductMixin {
  products: Ref<Product[]>,
  fetchProducts: () => Promise<void>
  saveProduct: (product: Product) => Promise<void>
}

export default (): ProductMixin => {
  const products = ref<Product[]>([])

  const fetchProducts = async (): Promise<void> => {
    const { data } = await axios.get('/products')
    products.value = data as Product[]
  }

  const saveProduct = async (product: Product): Promise<void> => {
    const { data } = await axios.post('/products', product)

    products.value = [...products.value, data]
  }

  return { products, fetchProducts, saveProduct }
}
