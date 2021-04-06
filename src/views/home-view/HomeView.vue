<template>
  <section class="container p-6 mx-auto">
    <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Products</h2>

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
import { defineComponent } from 'vue'
import HomeProductCard from './components/HomeProductCard.vue'
import { useProductMixin } from '@/mixins'

export default defineComponent({
  components: { HomeProductCard },
  setup () {
    const { products, fetchProducts } = useProductMixin()

    fetchProducts()

    return { products }
  }
})
</script>
