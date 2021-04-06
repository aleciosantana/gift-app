<template>
  <table class="app-table">
    <slot></slot>
  </table>
</template>

<style lang="postcss">
table.app-table {
  @apply border-collapse bg-white rounded-md shadow-lg dark:bg-gray-800 w-full
}

.app-table thead tr {
  @apply font-bold text-white bg-gray-800 dark:bg-gray-700 border-b-8 border-white dark:border-gray-800
}

.app-table thead th {
  @apply px-4 py-2
}

.app-table thead th:first-child {
  @apply rounded-tl-md
}
.app-table thead th:last-child {
  @apply rounded-tr-md
}

.app-table tbody tr {
  @apply border-t hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700  text-sm text-gray-600 dark:text-white
}

.app-table tbody td {
  @apply px-4 py-3
}

.app-table tbody tr:last-child td:first-child {
  @apply rounded-bl-md
}

.app-table tbody tr:last-child td:last-child {
  @apply rounded-br-md
}
</style>
