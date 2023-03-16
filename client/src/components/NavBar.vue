<template>
  <nav>
    <router-link to="/welcome">Home</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/">Log Out</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>

</style>