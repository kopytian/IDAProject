<template>
<div class="admin-wrap">
  <Header />
  <div class="content-wrap">
    <AddForm />
    <List />
  </div>
</div>
</template>

<script>
import AddForm from './components/AddForm.vue';
import Header from './components/Header.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  components: {
    Header,
    AddForm,
    List
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
.content-wrap{
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
}
</style>
