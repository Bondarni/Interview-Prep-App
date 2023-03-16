<template>
    <div v-for="course in courses" :key="course.id">
      <CourseCard />
    </div>
</template>

<script>
import CourseCard from '@/components/CourseCard.vue';
  export default{
    name: 'CoursesPage',
    components: {
      CourseCard
    },
    data: () => ({}),
    mounted() {},
    methods: {}
  }
</script>

<style>
</style>