<template>
  <div class="h-screen flex flex-col" :class="{ dark }">
    <header>
      <the-navbar></the-navbar>
    </header>
    <div class="flex-1 overflow-auto bg-gray-50 dark:bg-gray-600">
      <slot></slot>
    </div>
    <button @click="dark = !dark" class="absolute w-12 h-12 flex items-center justify-center bottom-4 right-4 p-4 rounded-full text-white bg-gray-900">
      <svg v-if="dark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  </div>
</template>
<script lang="ts" >
import { defineComponent, ref } from 'vue'
import TheNavbar from '@/shared/TheNavbar.vue'

export default defineComponent({
  components: { TheNavbar },
  setup () {
    const dark = ref(true)

    return { dark }
  }
})
</script>
