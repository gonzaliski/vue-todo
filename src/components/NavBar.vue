<script setup>
defineProps({
  msg: "string",
  required: true
})
</script>
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />

    <div>
      <h1 class="green">{{ msg }}</h1>
      <h3>
        To-do list con Vue.js
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
        <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      </h3>
    </div>
  </header>
</template>


<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;

  h1,
  h3 {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  header {

    h1,
    h3 {
      text-align: left;
    }
  }

  .logo {
    width: 50px;
    height: 50px;

  }
}

.logo {
  display: block;
  width: 60px;
  height: 60px;
}</style>