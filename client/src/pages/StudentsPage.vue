<template>
    <div v-for="student in students" :key="student.id">
      <StudentCard :student="student"/>
    </div>
</template>

<script>
import axios from 'axios'
import StudentCard from '@/components/StudentCard.vue';
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
        const res = await axios.get(`http://localhost:3001/api/students/all`)
        console.log(res)
        res.data = res.data.sort((a,b) => a.name - b.name)
        this.students = res.data
      },
    }
  }
</script>

<style>
</style>