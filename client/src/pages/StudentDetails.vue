<template>
  <div v-if="studentDetails">
    <h1>{{ studentDetails.name }}</h1>
    <h3>Overall GPA: {{ getOverallGpa() }}</h3>
    <h4>List of Courses with associated grade</h4>
    <div v-for="course in studentDetails.course_list" :key="course.id">
      <h5>{{ course.name }}:</h5>
      <h5 v-if="course.Student_Course.grade === 4">A</h5>
      <h5 v-else-if="course.Student_Course.grade === 3">B</h5>
      <h5 v-else-if="course.Student_Course.grade === 2">C</h5>
      <h5 v-else-if="course.Student_Course.grade === 1">D</h5>
      <h5 v-else-if="course.Student_Course.grade === 0">F</h5>
    </div>
    <button @click="toggleClicked">Add a course for {{ studentDetails.name }}</button>
    <StudentCourseForm @getStudentDetails="getStudentDetails" @toggleClicked="toggleClicked" v-if="clicked" />
    <button @click="goHome">Back</button>
  </div>
</template>

<script>
import Client from '../services/api'
import StudentCourseForm from '../components/StudentCourseForm.vue'

export default {
  name: 'StudentDetails',
  components: {
    StudentCourseForm
  },
  data: () => ({
    studentDetails: {},
    clicked: false
  }),
  mounted() {
    this.getStudentDetails()
  },
  methods: {
    async getStudentDetails() {
      const studentId = this.$route.params.student_id
      const response = await Client.get(`/courses/student/${studentId}`)
      this.studentDetails = response.data
    },
    getOverallGpa() {
      let overall = 0
      for (let i = 0; i < this.studentDetails.course_list?.length; i++) {
        overall += this.studentDetails.course_list[i]?.Student_Course.grade
      }
      const solution = ((overall) / this.studentDetails.course_list?.length)
      return solution
    },
    goHome() {
      this.$router.push(`/welcome`)
    },
    toggleClicked () {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style></style>