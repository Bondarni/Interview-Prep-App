<template>
  <div>
    <h2>{{ student.name }}</h2>
    <h5>email</h5>
    <h5>id</h5>
    <h5>courses</h5>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: ['students'],
  components: {

  },
  data: () => ({

  }),
  mounted(){},
  methods: {}
}
</script>

<style></style>