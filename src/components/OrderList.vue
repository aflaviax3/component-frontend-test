<template lang="html">
  <div class="container">
    <div class="header">
      <span class="header-info"><span class="header-info__totals">{{totalOrders}}</span> pedidos encontrados</span>
      <span class="header-info">no valor total de <span class="header-info__totals">R$ {{formatPrice(total)}}</span></span>
    </div>
    <table class="table order-table">
      <thead>
        <tr>
          <th v-for="column in columns">
            <a href="#" @click.prevent="sortBy(column)">{{column | ucwords}}</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in ordersFiltered">
          <td class="order-table__status" v-bind:class="['order-table__status--' + item.status]">{{item.status}}</td>
          <td class="order-table__codigo">{{item.codigo}}</td>
          <td class="order-table__meio" v-bind:class="['order-table__meio--' + item.meio]">{{item.meio}}</td>
          <td class="order-table__valor">{{formatPrice(item.valor)}}</td>
          <td class="order-table__atualizado">{{item.atualizado | formatDate}}</td>
          <td class="order-table__cliente"><span></span>{{item.cliente}}</br>{{item.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import _ from 'lodash';
  import store from '../vuex/store';

  export default {
    name: 'orderList',
    data(){
        return {
            ordem: {
                keys: ['status', 'codigo', 'meio', 'R$', 'atualizado', 'cliente'],
                sort: ['desc', 'desc', 'desc', 'desc', 'desc', 'desc']
            },
            filter: '',
            columns: ['status', 'codigo', 'meio', 'R$', 'atualizado', 'cliente']
        };
    },
    methods: {
        sortBy(column){
            this.ordem.keys = column;
            this.ordem.sort = this.ordem.sort == 'desc' ? 'asc' : 'desc';
        },
        formatPrice(value) {
            var val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    computed: {
      orders(){
        return store.state.orders;
      },
      ordersFiltered() {
        return _.orderBy(store.state.orders, this.ordem.keys, this.ordem.sort);
      },
      totalOrders() {
         return _.size(store.state.orders);
      },
      total() {
        return _.sumBy(store.state.orders, 'valor');
      }
    }
  }
</script>

<style lang="css">
</style>
