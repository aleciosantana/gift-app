<template>
  <div class="h-screen flex flex-col" :class="{ dark }">
    <header>
      <div class="relative h-14">
        <nav class="bg-white shadow dark:bg-gray-800 absolute left-0 right-0">
          <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
              <div>
                <router-link to="/" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Gift</router-link>
              </div>

              <!-- Mobile menu button -->
              <div class="flex md:hidden">
                <button @click="hidden = !hidden" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                      <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="test__nav-links items-center md:flex" :class="{ hidden }">
              <div class="flex flex-col md:flex-row md:mx-6">
                <router-link to="/home" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Home</router-link>
                <router-link to="/dashboard" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Dashboard</router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
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

export default defineComponent({
  setup () {
    const dark = ref(true)
    const hidden = ref(true)

    return { dark, hidden }
  }
})
</script>
