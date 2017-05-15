<template>
  <div v-show="view == 'pedidos'">
    <order-list></order-list>
  </div>
</template>

<script>
import OrderList from './components/OrderList'
import store from './vuex/store';

export default {
  name: 'app',
  components: {
    "order-list": OrderList,
  },
  computed:{
      view(){
          return store.state.view;
      }
  },
  methods: {
      showView(view){
          this.view = view;
      }
  }
};
</script>

<style lang="sass">
  @import './styles/main.scss'
</style>
