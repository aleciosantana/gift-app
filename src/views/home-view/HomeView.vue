<template>
  <section class="container p-6 mx-auto">
    <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Sale</h2>

    <div class="flex">
      <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <home-product-card
          v-for="product in saleProducts"
          :key="product.id"
          :product="product"
        ></home-product-card>
      </div>
    </div>
  </section>

  <section class="container p-6 mx-auto">
    <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Other Products</h2>

    <div class="flex">
      <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <home-product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></home-product-card>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HomeProductCard from './components/HomeProductCard.vue'
import { useProductMixin } from '@/mixins'
import { Product } from '@/types'
import axios from 'axios'

// TODO: Remover isso; colocar em um arquivo de constantes
const SALE_API = process.env.VUE_APP_API

export default defineComponent({
  components: { HomeProductCard },
  setup () {
    const { products, fetchProducts } = useProductMixin()
    const saleProducts = ref<Product[]>([]);

    (async (): Promise<void> => {
      const { data: _products } = await axios.get(SALE_API)

      saleProducts.value = _products

      console.log(saleProducts.value)
    })()

    fetchProducts()

    return { products, saleProducts }
  }
})
</script>
