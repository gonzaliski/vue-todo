<script setup>

</script>

<template>
  <h2>Esta es mi primer app en Vue.js</h2>
</template>

<style lang="scss" scoped>
h2 {
  background: rgb(0, 16, 36);
  background: linear-gradient(90deg, rgb(19, 91, 181) 0%, rgba(93, 241, 83, 1) 35%, rgba(0, 212, 255, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 200% auto;
  animation: gradient 10s ease infinite;
  text-align: center;
  color: transparent;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
