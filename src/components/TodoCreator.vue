<script setup>
import { reactive } from 'vue';
const emit = defineEmits(["create-todo"])

const todo = reactive({
    value: "",
    invalid: null,
    errMsg: ""
})
const addTodo = (e) => {
    if (todo.value !== null) {
        emit("create-todo", todo.value)
        todo.value = null
    }
    todo.invalid = true
    todo.errMsg = "No has escrito ninguna tarea!"
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <label>Crear tarea nueva</label>
        <div class="creator-input__container">
            <input class="creator__input" placeholder="Nombre de la tarea" :value="todo.value"
                @input="event => todo.value = event.target.value">
            <button class="creator__button" type="submit">Crear</button>
        </div>
    </form>
</template>


<style lang="scss" scoped>
@import '../assets/variables';

.creator-input__container {
    display: flex;
    gap: 10px;
    width: 100%;
    max-width: 70vw;
}

.creator__input {
    border-radius: 4px;
    border-style: none;
    width: 100%;
    padding-left: 0.5rem;
}

.creator__button {
    padding: 0.5rem;
    border-style: none;
    border-radius: 4px;
    background-color: $green-main;

    &:hover {
        transition: all ease-in-out 200ms;
        color: white;
    }
}
</style>