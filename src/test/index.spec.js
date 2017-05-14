// Import Vue and the component being tested
import Vue from 'vue'
var App = require('../src/App.vue');

describe('App', function () {

  it('Should create object base on localStorage', function() {
    expect(typeof App.showView).toBe('function')
  });

});
