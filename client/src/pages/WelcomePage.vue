<template>
    <div class="welcomesection">
      <h1>Welcome, User!</h1>
      <h3>Choose an option below;</h3>
      <div class="chooselist">
        <div @click="this.$router.push('/students')">Students List</div>
        <div @click="this.$router.push('/courses')">Courses List</div>
        <div @click="this.$router.push('/students/newstudent')">Add a Student</div>
        <div @click="this.$router.push('/courses/newcourse')">Add a Course</div>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'WelcomePage',
    components: {},
    data: () => ({
      students: [],
      courses: []
    }),
    mounted() {},
    methods: {
    }
  }
</script>

<style>

</style>