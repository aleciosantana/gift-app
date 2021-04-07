<template>
  <div class="absolute bg-gray-700 bg-opacity-80 bottom-0 top-0 right-0 left-0 flex justify-center items-center">
    <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">New Product</h2>

        <router-link to="/dashboard" class="px-2 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>

      <form @submit.prevent="submitForm(product)">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="title">Title</label>
            <input id="title" v-model="product.title" placeholder="Product Name" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="description">Description</label>
            <input id="description" v-model="product.description" placeholder="Lorem ipsum dolor sit amet." class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="value">Value</label>
            <input id="value" type="number" v-model="product.value" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="image">Image URL</label>
            <input id="image" v-model="product.image" placeholder="https://picsum.photos/200/300" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>
        </div>

        <div class="flex justify-end mt-6 space-x-2">
          <router-link to="/dashboard" class="px-6 py-2 leading-5 text-gray-600 hover:text-white transition-colors duration-200 transform bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</router-link>
          <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { useProductMixin } from '@/mixins'
import { Product } from '@/types'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  emits: ['saveProduct'],
  setup (props, { emit }) {
    const { push } = useRouter()
    const { saveProduct } = useProductMixin()

    const product = ref<Product>({
      title: '',
      value: 0,
      image: '',
      description: ''
    })

    const submitForm = async (p: Product): Promise<void> => {
      const _product = await saveProduct({ ...p })

      emit('saveProduct', _product)
      push('/dashboard')
    }

    return { product, submitForm }
  }
})
</script>
