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
    name: ''
  }),
  mounted(){},
  methods: {
    handleNameChange(e){
      this.name = e.target.value
    },
    handleGradeChange(e){
      this.name = e.target.value
    },
    async addCourse(){
      const response = await axios.post(``)
      console.log(response)
      this.$router.push(`/courses`)

    }
  }
}
</script>

<style></style>