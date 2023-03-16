<template>
  <h2>{{ course.name }}</h2>
  <h5>{{ course.grade }}</h5>
</template>

<script>
export default {
  name: 'CourseCard',
  props: ['course'],
  components: {

  },
  data: () => ({

  }),
  mounted(){},
  methods: {}
}
</script>

<style></style>