<template>
  <section class="container p-6 mx-auto">
    <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Dashboard</h2>

    <div class="mt-4">
      <div class="py-2 flex justify-end">
        <router-link to="/dashboard/create" class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">Add Product</router-link>
      </div>
      <app-table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td class="text-right">$ {{ product.value }}</td>
          </tr>
        </tbody>
      </app-table>
    </div>
    <router-view @save-product="setProduct"></router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppTable from '@/components/AppTable.vue'
import { useProductMixin } from '@/mixins'
import { Product } from '@/types'

export default defineComponent({
  components: { AppTable },
  setup () {
    const { products, fetchProducts } = useProductMixin()

    fetchProducts()

    const setProduct = (_product: Product): void => {
      products.value = [...products.value, _product]
    }

    return { products, setProduct }
  }
})
</script>
