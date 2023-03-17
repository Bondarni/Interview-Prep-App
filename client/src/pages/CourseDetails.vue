<template>
  <div>
    <h1>{{ courseDetails.name }}</h1>
    <p>Students in Course with Grade</p>
  </div>
  <button @click="goHome">Back</button>
</template>

<script>
import axios from 'axios'

  export default{
    name: 'CourseDetails',
    components: {},
    data: () => ({
      courseDetails: {}
    }),
    mounted() {
      this.getCourseDetails()
    },
    methods: {
      async getCourseDetails() {
        const courseId = this.$route.params.course_id
        const response = await axios.get(`http://localhost:3001/api/courses/${courseId}`)
        this.courseDetails = response.data
      },
      goHome(){
        this.$router.push(`/welcome`)
    }
    }
  }
</script>

<style>
</style>