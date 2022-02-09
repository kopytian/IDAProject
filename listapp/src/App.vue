<template>
<div class="admin-wrap">
  <Header />
  <AddForm />
</div>
</template>

<script>
import AddForm from './components/AddForm.vue';
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    AddForm
  }
}
</script>

<style scoped>
.admin-wrap{
  color: #3F3F3F;
  font: 16px/1.25rem 'Source Sans Pro', sans-serif;
  background-color: #E5E5E5;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100vw;
  overflow: hidden;
}
</style>
