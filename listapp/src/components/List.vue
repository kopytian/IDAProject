<template>
  <div>
    <transition name="fade">
      <div v-if="list.length > 0" class="list-wrap">
        <ListSort @edit-sort-type="sortType = $event"/>
        <transition-group name="fade">
          <ListItem v-for="item in sortedList" :key="item.id" :item="item" @deleteItem ="deleteItem"/>
        </transition-group>
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
    }
  },
  computed: {
    sortedList () {
      let list = this.list;

      switch(this.sortType){
        case 'name': return list.slice().sort(sortByName);
        case 'min': return list.slice().sort(sortByLowPrice);
        case 'max': return list.slice().sort(sortByHighPrice);
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .list-wrap{
    grid-template-columns: 1fr;
    width: 100%;
    grid-auto-rows: auto;
  }
}
@media only screen and (min-device-width: 480px) and (max-device-width: 1024px) {
  .list-wrap{
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
    width: 60vw;
  }
}
</style>