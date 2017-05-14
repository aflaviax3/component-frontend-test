// Import Vue and the component being tested
import Vue from 'vue'
import App from '../src/App.vue'

describe('App', function () {

  it('Should create object base on localStorage', function() {
    expect(typeof App.methods.showView).toBe('function')
  });

});
