<template>
  <div class="course-card">
    <h2 class="course-card-name">{{ course.name }}</h2>
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
  .course-card {
  border: solid #21212138 1rem;
  margin: 5em;
  }
  .course-card:hover {
    transform: scaleY(1.1);
  }
</style>