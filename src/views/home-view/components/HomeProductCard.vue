<template>
  <div class="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2 h-32 overflow-hidden">
      <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white truncate">{{ product.title }}</h1>
      <p class="mt-1 text-sm text-gray-600 overflow-ellipsis overflow-hidden dark:text-gray-400">{{ product.description }}</p>
    </div>

    <img class="object-cover w-full h-48 mt-2" :src="product.image">

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 class="text-lg font-bold text-white">${{ product.value }}</h1>
      <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Adicionar</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@/types'

export default defineComponent({
  props: {
    product: Object as PropType<Product>
  }
})
</script>
