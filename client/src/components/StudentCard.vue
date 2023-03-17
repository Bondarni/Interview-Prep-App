<template>
  <div class="student-card">
    <h2>{{ student.name }}</h2>
    <h5>{{ student.email }}</h5>
    <h5>Student ID: {{ student.id }}</h5>
    <h5>courses</h5>
  </div>
</template>

<script>
import Client from '../services/api'
export default {
  
  name: 'StudentCard',
  props: ['student'],
  components: {

  },
  data: () => ({
    courses: []
  }),
  mounted(){
    this.getCourses()
  },
  methods: {
    async getCourses() {
        const res = await Client.get(`/courses/student/${this.student.id}`)
        console.log(res.data)
      }
  }
}
</script>

<style>
.student-card {
  border: solid #21212138 1rem;
  margin: 5em;
}
</style>