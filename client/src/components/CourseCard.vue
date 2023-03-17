<template>
  <div class="course-card">
    <h2>{{ course.name }}</h2>
  </div>
</template>

<script>
export default {
  
  name: 'CourseCard',
  props: ['course'],
  components: {

  },
  data: () => ({
    students: []
  }),
  mounted(){},
  methods: {
  }
}
</script>

<style>
  .coursecard {
  border: solid #21212138 1rem;
  margin: 5em;
  }
</style>