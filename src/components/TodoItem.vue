<script setup>
import { ref } from 'vue';
const active = ref(false)
defineProps({
    todo: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})
const setActive = () => {
    active.value = true
}
defineEmits(["toggle-complete", "delete-todo"])
</script>
<template>
    <div class="todo-item" :class="{ done: todo.isCompleted }" @mouseover="setActive" @mouseout="() => active = false">
        <h4>{{ todo.task }}</h4>
        <div class="actions-container">
            <font-awesome-icon v-show="active" icon="fa-solid fa-trash" class="delete-icon"
                @click="$emit('delete-todo', index)" />
            <input type="checkbox" :checked="todo.isCompleted" @input="$emit('toggle-complete', index)">
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '../assets/variables';

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 4px;

    &.done {
        transition: border-color 0.5s ease-out;
        border-color: $green-main
    }
}

h4 {
    max-width: 70%;
}

input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    /* background-color: $green-main; */
    /* color: $green-main; */
    font: inherit;
    width: 1.2em;
    height: 1.2em;
    border: 0.15em solid white;
    border-radius: 100%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked {
        border-color: $green-main;

    }

    &:checked::before {
        background-color: $green-main;
        transform: scale(1);
    }
}

.actions-container {
    display: flex;
    align-items: stretch;
    gap: 10px;

    & .delete-icon:hover {
        transition: 500ms transform ease-in-out;
        transform: scale(1.2);
        cursor: pointer;
        color: #FF3C33;
    }
}
</style>