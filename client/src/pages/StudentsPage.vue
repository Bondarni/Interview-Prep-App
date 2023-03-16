<template>
    <div v-for="student in students" :key="student.id">
      <StudentCard />
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
    data: () => ({}),
    mounted() {},
    methods: {
      async getStudents() {
        const res = await axios.get('')
        this.students = res.data
      },
    }
  }
</script>

<style>
</style>