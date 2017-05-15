import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      view: 'tabela',
      orders: [{
        status: 'ativo',
        codigo: 'ABC123',
        meio: 'boleto',
        valor: 239.00,
        atualizado: '2016-11-15T04:34:46.928Z',
        cliente: 'Maude Glover',
        email: 'abc@gmail.com'
      }, {
        status: 'inativo',
        codigo: 'DEF123',
        meio: 'credito',
        valor: 239.67,
        atualizado: '2016-10-15T04:34:46.928Z',
        cliente: 'Patrick Hodges',
        email: 'def@gmail.com'
      }, {
        status: 'ativo',
        codigo: 'GHI123',
        meio: 'boleto',
        valor: 5000.99,
        atualizado: '2015-11-15T04:52:46.928Z',
        cliente: 'Dustin Underwood',
        email: 'ghi@gmail.com'
      }, {
        status: 'ativo',
        codigo: 'JKL123',
        meio: 'debito',
        valor: 230.00,
        atualizado: '2016-11-18T04:34:46.928Z',
        cliente: 'Inez Knight',
        email: 'jkl@gmail.com'
      }]
    }
  })
