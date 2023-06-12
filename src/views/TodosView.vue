<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TodoCreator from '../components/TodoCreator.vue';
import { ref } from 'vue';
const todos = ref([])
const createTodo = (todo) => {
  todos.value.push(todo)
}
</script>

<template>
  <main>
    <TheWelcome />
    <TodoCreator @create-todo="createTodo" />

  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  width: max-content;
}

@media(min-width:550px) {
  main {
    display: block;
    width: 100%;
  }
}
</style>