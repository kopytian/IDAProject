<template>
<div class="admin-wrap">
  <Header />
  <div class="content-wrap">
    <AddForm @submitForm="submitForm" />
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
    list: [
      {
        name: "Наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 10000,
        id: 1
      },
      {
        name: "Первое наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 1000,
        id: 2
      },
      {
        name: "Сначала наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 10000,
        id: 3
      },
      {
        name: "Другое наименование товара",
        url: "https://i.ibb.co/j3ZGd7T/img.png",
        description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
        price: 100,
        id: 4
      },
    ]
  }),
  methods: {
    submitForm(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.list.push(newObj);
    },
    deleteItem(id) {
      const deleteIndex = this.list.findIndex(item => item.id === id);
      this.list.splice(deleteIndex, 1);
    }
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
  justify-content: flex-start;
  flex-wrap: nowrap;
}
</style>
