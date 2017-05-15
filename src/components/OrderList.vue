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
            <a href="#" @click.prevent="sortBy(column)">{{column}}</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in ordersFiltered">
          <td class="order-table__status" v-bind:class="['order-table__status--' + toLower(item.status)]"><span></span>{{item.status}}</td>
          <td class="order-table__codigo">{{item.externalId}}</td>
          <td class="order-table__meio" v-bind:class="['order-table__meio--' + toLower(item.payments[0].fundingInstrument.method)]"><span></span>{{item.payments[0].fundingInstrument.method}}</td>
          <td class="order-table__valor">{{formatPrice(item.amount.total)}}</td>
          <td class="order-table__atualizado">{{item.updatedAt | formatDate}}</td>
          <td class="order-table__cliente"><b>{{item.customer.fullname}}</b></br>{{item.customer.email}}</td>
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
                keys: ['customer.fullname'],
                sort: ['desc']
            },
            filter: '',
            columns: ['status', 'externalId', 'payments[0].fundingInstrument.method', 'amount.total', 'updatedAt', 'customer.fullname']
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
        },
        toLower(value) {
          return value.toLowerCase();
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
        return _.sumBy(store.state.orders, 'amount.total');
      }
    }
  }
</script>
