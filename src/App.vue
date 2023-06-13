<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="nav-links">
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Tareas</RouterLink>
        <RouterLink to="/todosDone">Completas</RouterLink>
      </nav>
    </div>
  </div>
  <div class="content-container">
    <RouterView />
  </div>
</template>

<style scoped>
.nav-links {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.content-container {
  display: flex;
  place-items: center;
}
</style>
