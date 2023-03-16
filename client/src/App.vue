<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-view header="Of Course!"></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
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
</style>
