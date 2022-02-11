<template>
  <div>
    <transition>
      <div v-if="Object.keys(list).length > 0" class="list-wrap">
        <ListSort/>
        <ListItem v-for="(item, prop) in list" :key="prop" :item="list[prop]" />
      </div>
      <div class="list-empty-message" v-else>Товаров нет, добавьте их c помощью формы.</div>
    </transition>
  </div>
</template>

<script>
import ListSort from './ListSort.vue';
import ListItem from './ListItem.vue';


export default {
  name: 'List',
  components: {
    ListSort,
    ListItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onMouseUp: () => {

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