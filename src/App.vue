<template>
  <router-link to="/">Main</router-link>
  <br />
  <router-link to="info">Informasi</router-link>
  <br />
  <router-link to="generate">Generate</router-link>
  <router-view />
</template>

<script>
//import Main from './components/Main'
export default {
  name: "App",
  components: {
    //  Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
