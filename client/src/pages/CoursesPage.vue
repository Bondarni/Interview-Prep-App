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
    data: () => ({
      courses: [],
    }),
    mounted() {
      this.getCourses()
    },
    methods: {
      async getCourses() {
        const res = await axios.get('')
        res.data = res.data.sort((a,b) => a.name - b.name)
        this.courses = res.data
      }
    }
  }
</script>

<style>
</style>