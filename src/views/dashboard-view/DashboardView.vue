<template>
  <section class="container p-6 mx-auto">
    <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">Ofertas</h2>

    <div class="mt-4">
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppTable from '@/components/AppTable.vue'
import { useProductMixin } from '@/mixins'

export default defineComponent({
  components: { AppTable },
  setup () {
    const { products, fetchProducts } = useProductMixin()

    fetchProducts()

    return { products }
  }
})
</script>
