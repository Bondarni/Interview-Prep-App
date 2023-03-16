<template>
  <div class="student-card">
    <h2>{{ student.name }}</h2>
    <h5>{{ student.email }}</h5>
    <h5>Student ID: {{ student.id }}</h5>
    <h5>courses</h5>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: ['student'],
  components: {

  },
  data: () => ({

  }),
  mounted(){},
  methods: {}
}
</script>

<style>
.student-card {
  border: solid #21212138 1rem;
  margin: 5em;
}
</style>