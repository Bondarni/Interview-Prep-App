<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view header="Of Course!"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  background-color: rgb(87, 157, 154);
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #21212138;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3em;
}

header nav a {
  margin: 0 1em;
}
</style>
