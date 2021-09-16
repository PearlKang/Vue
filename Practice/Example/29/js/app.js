var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    message2: '헬로우 뷰쩜 제이에스',
    uid: '10',
    flag: true
  },
  methods: {
    clickBtn() {
      console.log("hi");
    },
    clickBtn2: function() {
      console.log("hi2");
    }
  }
});
