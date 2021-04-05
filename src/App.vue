<template>
  <layout-default>
    <router-view/>
  </layout-default>
</template>
<script lang="ts" >
import { defineComponent } from 'vue'
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default defineComponent({
  components: { LayoutDefault }
})
</script>
