<template>
  <div class="student-card">
    <h2>{{ student.name }}</h2>
    <h5>{{ student.email }}</h5>
    <h5>Student ID: {{ student.id }}</h5>
    <h5>courses</h5>
  </div>
</template>

<script>
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
        const res = await Client.get(`/courses/student/${student.id}`)
        res.data = res.data.sort((a,b) => a.name - b.name)
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