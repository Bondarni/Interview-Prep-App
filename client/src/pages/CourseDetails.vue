<template>
  <div>
    <h1>{{ courseDetails.name }}</h1>
    <div v-for="student in students" :key="student.id">
      <h5>{{ student.name }}</h5>
      <h5> Grade: {{ student.Student_Course.grade }}</h5>
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
        console.log(this.courseDetails)
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