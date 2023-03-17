<template>
    <div v-for="course in courses" :key="course.id">
      <CourseCard @click="selectCourse(course.id)" :course="course"/>
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
      courses: []
    }),
    mounted() {
      this.getCourses()
    },
    methods: {
      async getCourses() {
        const res = await axios.get('http://localhost:3001/api/courses/all')
        res.data = res.data.sort((a,b) => a.name - b.name)
        this.courses = res.data
      },
      selectCourse(courseId){
        this.$router.push(`/courses/${courseId}`)
      }
    }
  }
</script>

<style>
</style>