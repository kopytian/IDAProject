<template>
  <div class="list-sort">
    <select class="sort-select">
      <option >По умолчанию</option>
      <option>По цене max</option>
      <option>По цене min</option>
      <option>По наименованию</option>
    </select>
  </div>
</template>

<script>
export default {
name: 'ListSort'
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
</style>
