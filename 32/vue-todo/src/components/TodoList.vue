<template>
  <section>
    <ul>
      <!-- <li>할일 1</li>
      <li>할일 2</li>
      <li>할일 3</li> -->
      <li v-for="todoItem in todoItems">{{ todoItem }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
}
</script>

<style>
</style>
