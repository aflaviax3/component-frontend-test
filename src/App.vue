<template>
  <div v-show="view == 'tabela'">
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
  /* write sass here */
  @import './styles/main.scss'
</style>
