<template>
    <div v-for="course in courses" :key="course.id">
      <CourseCard />
    </div>
</template>

<script>
import axios from 'axios'
import CourseCard from '@/components/CourseCard.vue';
  export default{
    name: 'CoursesPage',
    components: {
      CourseCard
    },
    data: () => ({}),
    mounted() {},
    methods: {
      async getCourses() {
        const res = await axios.get('')
        this.courses = res.data
      }
    }
  }
</script>

<style>
</style>