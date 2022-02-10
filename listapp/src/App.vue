<template>
<div class="admin-wrap">
  <Header />
  <div class="content-wrap">
    <AddForm />
    <List :list="list" @deleteItem="deleteItem" />
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
  },
  data: () => ({
    list: {
      1: {
        name: "Наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 10000,
        id: 1
      },
      2: {
        name: "Наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 10000,
        id: 2
      },
      3: {
        name: "Наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 10000,
        id: 3
      },
      4: {
        name: "Наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 10000,
        id: 4
      },
    }
  }),
  methods: {
    deleteItem(id) {
      delete this.list[id];
    },
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
