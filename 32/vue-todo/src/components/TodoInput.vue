<template>
  <!-- <div>input</div> -->
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      //1//consolae.log(this.newTodoItem);
      //2//localStorage.setItem(this.newTodoItem, this.newTodoItem);
      if(this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(value, value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style>
</style>
