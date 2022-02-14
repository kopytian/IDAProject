<template>
  <div>
    <transition>
      <div v-if="list.length > 0" class="list-wrap">
        <ListSort @edit-sort-type="sortType = $event"/>
        <ListItem v-for="item in sortedList" :key="item.id" :item="item" />
      </div>
      <div class="list-empty-message" v-else>Товаров нет, добавьте их c помощью формы.</div>
    </transition>
  </div>
</template>

<script>
import ListSort from './ListSort.vue';
import ListItem from './ListItem.vue';

let sortByName = function (d1, d2) {return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1;};
let sortByLowPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
let sortByHighPrice = function (d1, d2) { return (d1.price < d2.price) ? 1 : -1; };

export default {
  name: 'List',
  components: {
    ListSort,
    ListItem
  },
  data: () => ({
    sortType: 'default',
  }),
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
  },
  computed: {
    sortedList () {
      let list = this.list;
      switch(this.sortType){
        case 'name': return list.sort(sortByName);
        case 'min': return list.sort(sortByLowPrice);
        case 'max': return list.sort(sortByHighPrice);
        default: return list;
      }
    }
  }
}
</script>

<style scoped>
.list-wrap{
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(26.5rem, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  position: relative;
  width: 64.25rem;
}
</style>