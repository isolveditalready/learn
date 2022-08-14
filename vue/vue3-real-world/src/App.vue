<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="app">

      <nav>
        <RouterLink :to="{name: 'EventList'}">Events</RouterLink> |
        <RouterLink :to="{name: 'About'}">About</RouterLink>
      </nav>
      <router-View></router-View>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a { 
  font-weight: bold;
  color: #2c3e50;
  margin: 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}


</style>