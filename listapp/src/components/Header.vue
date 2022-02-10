<template>
  <h2 class="admin-title">
    {{ title }}
  </h2>
</template>

<script>
export default {
name: 'Header',
data: () => ({
  title: 'Добавление товара'
}),
}
</script>

<style scoped>
h2{
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 600;
  box-sizing: border-box;
  padding: 2rem 0 1rem;
}
</style>