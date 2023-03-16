<template>
    <div>
      <h1>{{ studentDetails.name }}</h1>
      <h3>Overall GPA</h3>
      <h4>List of Courses with associated letter grade</h4>
    </div>
</template>

<script>
import axios from 'axios'

  export default{
    name: 'StudentDetails',
    components: {},
    data: () => ({
      studentDetails: {}
    }),
    mounted() {
      this.getStudentDetails()
    },
    methods: {
      async getStudentDetails() {
        const studentId = this.$route.params.student_id
        const response = await axios.get(`http://localhost:3001/api/students/${studentId}`)
        this.studentDetails = response.data
      },
      goHome(){
        this.$router.push(`/`)
    }
  }
}
</script>

<style>
</style>