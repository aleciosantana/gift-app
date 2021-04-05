<template>
  <div class="relative h-14">
    <nav class="bg-white shadow dark:bg-gray-800 absolute left-0 right-0">
      <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <div>
            <router-link to="/" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Gift</router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button @click="hidden = !hidden" type="button" class="text__nav-hamburger text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const hidden = ref(true)

    return { hidden }
  }
})
</script>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-indigo-600 dark:text-indigo-400;
}
</style>
