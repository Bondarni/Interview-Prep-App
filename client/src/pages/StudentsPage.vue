<template>
    <div v-for="student in students" :key="student.id">
      <StudentCard @click=selectStudent(student.id) :student="student"/>
    </div>
</template>

<script>

import StudentCard from '@/components/StudentCard.vue';
import Client from '../services/api'
  export default{
    name: 'StudentsPage',
    components: {
      StudentCard,
    },
    data: () => ({
      students: [],

    }),
    mounted() {
      this.getStudents()
    },
    methods: {
      async getStudents() {
        const res = await Client.get('/students/all')
        res.data = res.data.sort((a,b) => a.name - b.name)
        this.students = res.data
      },
      selectStudent(studentId){
        this.$router.push(`/students/${studentId}`)
        
      }
    }
  }
</script>

<style>
</style>