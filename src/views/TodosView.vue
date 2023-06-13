<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TodoCreator from '../components/TodoCreator.vue';
import TodoItem from '../components/TodoItem.vue';
import { ref } from 'vue';
const todos = ref([])
const createTodo = (todo) => {
  const newTodo = {
    task: todo,
    isCompleted: false
  }
  todos.value.push(newTodo)
}
const handleComplete = (index) => {
  todos.value[index].isCompleted = !todos.value[index].isCompleted
}
const handleDelete = (index) => {
  todos.value.splice(index, 1)
}
</script>

<template>
  <main>
    <TheWelcome />
    <TodoCreator @create-todo="createTodo" />
    <ul>
      <li v-for="(todo, index) in todos">
        <TodoItem :todo="todo, index" @toggle-complete="handleComplete" @delete-todo="handleDelete"></TodoItem>
      </li>
    </ul>
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
    width: 50%;
  }
}

ul {
  margin-top: 20px;
  padding: 0;
}

li {
  list-style: none;
  margin-bottom: 20px;
}
</style>