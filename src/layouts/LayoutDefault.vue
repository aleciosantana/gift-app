<template>
  <div class="h-screen flex flex-col" :class="{ dark }">
    <header>
      <the-navbar></the-navbar>
    </header>
    <div class="flex-1 overflow-auto bg-gray-50 dark:bg-gray-600">
      <slot></slot>
    </div>
    <the-dark-mode v-model="dark"></the-dark-mode>
  </div>
</template>
<script lang="ts" >
import { defineComponent, ref } from 'vue'
import TheNavbar from '@/shared/TheNavbar.vue'
import TheDarkMode from '@/shared/TheDarkMode.vue'

export default defineComponent({
  components: { TheNavbar, TheDarkMode },
  setup () {
    const dark = ref(true)

    return { dark }
  }
})
</script>
