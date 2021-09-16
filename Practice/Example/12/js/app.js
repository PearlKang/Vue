Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

Vue.component('sibling-component', {
  template: '<p>{{ propsdata }}</p>',
  props: ['propsdata']
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'HaHaHaHaHaHaHaHaHaHaHa'
  }
});
