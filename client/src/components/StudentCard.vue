<template>
  <div class=".grid">
    <div v-if="courses" class="student-card">
      <h2>{{ student.name }}</h2>
      <h5>{{ student.email }}</h5>
      <h5>Student ID: {{ student.id }}</h5>
      <h5>Courses:</h5>
      <div v-for="course in courses" :key="course.id">
        <h5>{{ course.name }}:</h5>
        <h5 v-if="course.Student_Course.grade === 4">A</h5>
        <h5 v-else-if="course.Student_Course.grade === 3">B</h5>
        <h5 v-else-if="course.Student_Course.grade === 2">C</h5>
        <h5 v-else-if="course.Student_Course.grade === 1">D</h5>
        <h5 v-else-if="course.Student_Course.grade === 0">F</h5>
      </div>
    </div>
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
  mounted() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const res = await Client.get(`/courses/student/${this.student.id}`)
      this.courses = (res.data.course_list)
    },
    getOverallGpa() {
      let overall = 0
      for (let i = 0; i < this.courses?.length; i++) {
        overall += this.courses[i]?.Student_Course.grade
      }
      const solution = ((overall)/this.courses?.length)
      return solution
    }
  }
}
</script>

<style>
.student-card {
  border: solid #21212138 1rem;
  margin: 5em;
}
.student-card:hover {
  transform: scaleY(1.1);
}
</style>