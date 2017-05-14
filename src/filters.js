import Vue from 'vue';
import moment from 'moment';

Vue.filter('ucwords' , value => value.charAt(0).toUpperCase() + value.slice(1) );

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm');
  }
});
