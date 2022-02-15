<template>
  <div class="list-sort">
    <select class="sort-select" v-model="sortType" @change="onChangeSort">
      <option value="default">По умолчанию</option>
      <option value="name">По наименованию</option>
      <option value="min">По цене min</option>
      <option value="max">По цене max</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ListSort',
  data: () => ({
    sortType: 'default',
  }),
  methods: {
    onChangeSort() {
      this.$emit('editSortType', this.sortType);
    }
  }
}
</script>

<style scoped>
.list-sort{
  position: absolute;
  top: -3rem;
  right: 0;
}
.sort-select{
  color: #B4B4B4;
  font-size: 0.7rem;
  outline: none;
  border-radius: 0.33rem;
  border: 1px solid #EEE;
  border-top: none;
  box-shadow: 0 0.1rem 0.4rem #EEE;
  box-sizing: border-box;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  width: 7.625rem;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .list-sort{
    position: relative;
    padding-top: 1rem;
    top: 0;
    left: 0;
  }
}
</style>
