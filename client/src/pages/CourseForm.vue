<template>
  <div class="course-form">
    <form @submit="addCourse">
      <input v-on:input="handleNameChange" type="text" name="name" :value="name" placeholder="enter course name">
      <input v-on:input="handleGradeChange" type="text" name="grade" :value="grade" placeholder="enter course grade">
      <button>Add Course</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CourseForm',
  components: {

  },
  data: () => ({
    name: '',
    grade: ''
  }),
  mounted(){},
  methods: {
    handleNameChange(e){
      this.name = e.target.value
    },
    handleGradeChange(e){
      this.grade = e.target.value
    },
    async addCourse(e){
      e.preventDefault()
      await axios.post(`http://localhost:3001/api/courses/newcourse`, {name:this.name, grade:this.grade})
      this.$router.push(`/courses`)

    }
  }
}
</script>

<style></style>