<template>
  <div class="list-item">
    <img :src=item.url alt="" height="200" class="list-item-img" />
    <div class="list-item-name">{{item.name}}</div>
    <div class="list-item-description">
      {{item.description}}
    </div>
    <div class="list-item-price">
      <span class="list-item-price-number">{{ thousands_separators(item.price) }}</span> руб.
    </div>
    <div class="list-item-delete" :id="item.id" @click="onClickDelete(item.id)"></div>
  </div>
</template>

<script>
import { thousands_separators } from '../helpers/forNumber';

export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onClickDelete(id) {
      this.$emit('deleteItem', id);
    },
    thousands_separators
  }
}
</script>

<style scoped>
.list-item{
  background-color: #FFFEFB;
  border: none;
  border-radius: 0.33rem;
  height: 26.5rem;
  position: relative;
  width: 20.75rem;
}
.list-item-img{
  height: auto;
  margin-bottom: 1rem;
  width: 100%;
}
.list-item-name{
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
  box-sizing: border-box;
  margin-bottom: 1rem;
  max-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
}
.list-item-description{
  margin-bottom: 1rem;
  max-height: 6.25rem;
  overflow: hidden;
  padding: 0 1rem;
}
.list-item-price{
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1rem;
  position: absolute;
  left: 0;
  bottom: 2rem;
}
.list-item-delete{
  cursor: pointer;
  display: none;
  height: 32px;
  width: 32px;
  background: url(../assets/delete.png) no-repeat center center #FF8484;
  border-radius: 10px;
  position: absolute;
  top: -8px;
  right: -6px;
}
.list-item:hover .list-item-delete{
  display: block;
}
@media only screen and (min-device-width: 480px) and (max-device-width: 1024px) {
  .list-item{
    width: 29.5vw;
  }
}
</style>