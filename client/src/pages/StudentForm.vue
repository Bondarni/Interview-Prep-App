<template>
  <div class="student-form">
    <form @submit="addStudent">
      <input v-on:input="handleNameChange" type="text" name="name" :value="name" placeholder="enter student name">
      <input v-on:input="handleEmailChange" type="text" name="email" :value="email" placeholder="enter student email">
      <button>Add Student</button>
    </form>
  </div>
</template>

<script>
import Client from '@/services/api'
export default {
  name: 'StudentForm',
  components: {

  },
  data: () => ({
    name: '',
    email: ''
  }),
  mounted(){},
  methods: {
    handleNameChange(e){
      this.name = e.target.value
    },
    handleEmailChange(e){
      this.email = e.target.value
    },
    async addStudent(e){
      e.preventDefault()
      await Client.post(`http://localhost:3001/api/students/newstudent`, {name:this.name, email:this.email} )
      this.$router.push(`/students`)
    }
  }
}
</script>

<style></style>