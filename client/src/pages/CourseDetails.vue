<template>
  <div>
    <h1>{{ courseDetails.name }}</h1>
    <div v-for="student in students" :key="student.id">
      <h5>{{ student.name }}</h5>
      <h5 v-if="student.Student_Course.grade === 4">Grade: A</h5>
      <h5 v-else-if="student.Student_Course.grade === 3">Grade: B</h5>
      <h5 v-else-if="student.Student_Course.grade === 2">Grade: C</h5>
      <h5 v-else-if="student.Student_Course.grade === 1">Grade: D</h5>
      <h5 v-else-if="student.Student_Course.grade === 0">Grade: F</h5>
    </div>
  </div>
  <button @click="goHome">Back</button>
</template>

<script>
import axios from 'axios'
import Client from '../services/api'


  export default{
    name: 'CourseDetails',
    components: {},
    data: () => ({
      courseDetails: {},
      students: {}
    }),
    mounted() {
      this.getCourseDetails()
      this.getStudents()

    },
    methods: {
      async getCourseDetails() {
        const courseId = this.$route.params.course_id
        const response = await axios.get(`http://localhost:3001/api/courses/${courseId}`)
        this.courseDetails = response.data
      },
      async getStudents() {
        const courseId = this.$route.params.course_id
        const res = await Client.get(`/students/course/${courseId}`)
        this.students = (res.data.courses)
    },
      goHome(){
        this.$router.push(`/welcome`)
    }
    }
  }
</script>

<style>
</style>