<template>
  <div class="course-form">
    <form @submit="addCourse">
      <input v-on:input="handleNameChange" type="text" name="name" :value="name" placeholder="enter course name">
      <button>Add Course</button>
    </form>
    </div>
</template>

<script>
import Client from '@/services/api'
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
    async addCourse(e){
      e.preventDefault()
      await Client.post(`http://localhost:3001/api/courses/newcourse`, {name:this.name})
      this.$router.push(`/courses`)

    }
  }
}
</script>

<style></style>