<template>
  <div class="form-wrap">
    <div class="form-item">
      <label class="form-label form-item-required">Наименование товара</label>
      <input class="form-input" type="text" placeholder="Введите наименование товара" />
    </div>
    <div class="form-item">
      <label class="form-label">Описание товара</label>
      <textarea class="form-textarea" placeholder="Введите описание товара"></textarea>
    </div>
    <div class="form-item">
      <label class="form-label form-item-required">Ссылка на изображение товара</label>
      <input type="url" class="form-input" placeholder="Введите ссылку" />
    </div>
    <div class="form-item">
      <label class="form-label form-item-required">Цена товара</label>
      <input type="number" class="form-input" placeholder="Введите" />
    </div>
    <div class="form-item">
      <input class="form-submit" type="submit" value="Добавить товар"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-wrap{
  background-color: #FFFEFB;
  border-radius: 0.33rem;
  box-sizing: border-box;
  margin-right: 1rem;
  padding: 1.5rem;
  width: 20.75rem;
}
.form-item{
  margin-bottom: 1rem;
}
.form-item:last-child{
  margin-bottom: 0;
}
.form-label{
  font-size: 0.625rem;
  line-height: 1.1rem;
  display: block;
}
.form-item-required:after{
  content: '*';
  color: #FF8484;
}
.form-input,
.form-textarea{
  font-size: 0.75rem;
  line-height: 1.25rem;
  outline: none;
  border-radius: 0.33rem;
  border: none;
  box-shadow: 0 0.1rem 0.4rem #EEE;
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
}
.form-textarea{
  height: 6.75rem;
  resize: none;
}
::placeholder {
  color: #B4B4B4;
  font: 0.75rem/1.25rem 'Source Sans Pro', sans-serif;
}
.form-submit{
  color: #B4B4B4;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 0.625rem;
  border: none;
  box-sizing: border-box;
  display: block;
  padding: 0.5rem;
  width: 100%;
  background-color: #EEE;
}
</style>
