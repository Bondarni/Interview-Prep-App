<template>
    <div class="welcomesection">
      <h1>Welcome, User!</h1>
      <h3>Choose an option below;</h3>
      <div class="chooselist">
        <div @click="this.$router.push('/students')">Students List</div>
        <div @click="this.$router.push('/courses')">Courses List</div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'WelcomePage',
    components: {},
    data: () => ({
      students: [],
      courses: []
    }),
    mounted() {
      // this.getStudents()
      // this.getCourses()
    },
    methods: {
      async getStudents() {
        const res = await axios.get('')
        this.students = res.data
      },
      async getCourses() {
        const res = await axios.get('')
        this.courses = res.data
      }
    }
  }
</script>

<style>

</style>