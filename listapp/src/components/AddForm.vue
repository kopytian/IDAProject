<template>
  <div class="form-wrap" :model="formData" ref="addItemForm">
    <div class="form-success-message" ref="formSuccesssMessage">
      Новый товар добавлен
    </div>
    <div class="form-item">
      <label class="form-label form-item-required">Наименование товара</label>
      <input class="form-input" :class="{'form-input-error' : !formData.name.length}" v-model="formData.name" type="text" placeholder="Введите наименование товара" />
      <transition name="fade">
        <span class="form-error" v-show="!formData.name.length">
        {{ errors.name.message }}
        </span>
      </transition>
    </div>
    <div class="form-item">
      <label class="form-label">Описание товара</label>
      <textarea class="form-textarea" v-model="formData.description" placeholder="Введите описание товара"></textarea>
    </div>
    <div class="form-item">
      <label class="form-label form-item-required" >Ссылка на изображение товара</label>
      <input type="url" v-model="formData.url" class="form-input" :class="{'form-input-error' : !formData.url.length}" placeholder="Введите ссылку" />
      <transition name="fade">
        <span class="form-error" v-show="!formData.url.length">
          {{ errors.url.message }}
        </span>
      </transition>
    </div>
    <div class="form-item">
      <label class="form-label form-item-required">Цена товара</label>
      <input type="number" v-model.number="formData.price" class="form-input" :class="{'form-input-error' : !String(formData.price).length}" placeholder="Введите цену" />
      <transition name="fade">
        <span class="form-error" v-if="formData.price < 0">
          {{ errors.price.message[2] }}
        </span>
        <span class="form-error" v-else-if="!String(formData.price).length">
          {{ errors.price.message[1] }}
        </span>
      </transition>
    </div>
    <div class="form-item">
      <button class="form-submit" :class="{ 'form-submit-active': isFormFull }"  @click="checkForm">Добавить товар</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data: () => ({
    formData: {
      name: '',
      url: '',
      desciption: '',
      price: ''
    },
    errors: {
      name: {
        message: 'Поле является обязательным'
      },
      url: {
        message: 'Поле является обязательным'
      },
      price: {
        message: {
          1: 'Поле является обязательным',
          2:  'Значение должно быть положительным'
        }
      }
    }
  }),
  computed: {
    isFormFull() {
      if (this.formData.name.length && this.formData.url.length && String(this.formData.price).length) {
      return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    checkForm: function (event) {
      event.preventDefault();
      if (this.isFormFull) {
        this.$emit('submitForm', { ...this.formData });
        this.formData = Object.fromEntries(
          Object.entries(this.formData).map(([key, ]) => [key,'']));
        this.$refs.formSuccesssMessage.display = 'block';
      }
    }
  }
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
  position: relative;
  width: 20.75rem;
}
.form-item{
  box-sizing: border-box;
  padding-bottom: 1rem;
  position: relative;
}
.form-item:last-child{
  padding-bottom: 0;
  padding-top: 0.5rem;
}
.form-label{
  font-size: 0.625rem;
  line-height: 0.75rem;
  display: block;
  margin-bottom: 0.2rem;
}
.form-item-required:after{
  content: '*';
  color: #FF8484;
  font-size: 0.75rem;
  font-weight: 600;
}
.form-input,
.form-textarea{
  font-size: 0.75rem;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.25rem;
  outline: none;
  border-radius: 0.33rem;
  border: 1px solid #EEE;
  box-shadow: 0 0.1rem 0.4rem #EEE;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  width: 100%;
}
.form-textarea{
  height: 6.75rem;
  resize: none;
}
.form-input-error{
  border-color: #FF8484;
}
.form-error{
  font-size: 0.5rem;
  color: #FF8484;
  line-height: 1rem;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
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
.form-submit-active{
  color: #FFF;
  background-color: #7BAE73;
}
.form-success-message{
  background-color: #7BAE73;
  border-radius: 0.625rem;
  box-sizing: border-box;
  display: none;
  position: absolute;
  bottom: 0.5rem;
  left: 0;
  padding: 1rem 1.5rem;
  text-align: center;
  width: 20.75rem;
  z-index: 2;
  transition-property: display;
  transition-duration: 3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
