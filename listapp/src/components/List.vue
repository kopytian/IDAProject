<template>
  <div class="list-wrap">
    <ListSort/>
    <div class="list-item">
      <img src="https://i.ibb.co/j3ZGd7T/img.png" alt="" class="list-item-img" />
      <div class="list-item-name">Наименование товара</div>
      <div class="list-item-description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк.
      </div>
      <div class="list-item-price">
        <span class="list-item-price-number">10000</span> руб.
      </div>
    </div>
    <div class="list-item">
      <img src="https://i.ibb.co/j3ZGd7T/img.png" alt="" class="list-item-img" />
      <div class="list-item-name">Наименование товара</div>
      <div class="list-item-description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк.
      </div>
      <div class="list-item-price">
        <span class="list-item-price-number">10000</span> руб.
      </div>
    </div>
    <div class="list-item">
      <img src="https://i.ibb.co/j3ZGd7T/img.png" alt="" class="list-item-img" />
      <div class="list-item-name">Наименование товара</div>
      <div class="list-item-description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк.
      </div>
      <div class="list-item-price">
        <span class="list-item-price-number">10000</span> руб.
      </div>
    </div>
  </div>
</template>

<script>
import ListSort from './ListSort.vue';

export default {
  name: 'List',
  components: {
    ListSort
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
.list-item{
  background-color: #FFFEFB;
  border: none;
  border-radius: 0.33rem;
  height: 26.5rem;
  overflow: hidden;
  position: relative;
  width: 20.75rem;
}
.list-item-img{
  margin-bottom: 0.75rem;
  width: 100%;
}
.list-item-name{
  font-size: 1.25rem;
  font-weight: 500;
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
  font-weight: 500;
  padding: 0 1rem;
  position: absolute;
  left: 0;
  bottom: 1.5rem;
}
</style>