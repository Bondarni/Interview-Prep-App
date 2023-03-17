<template>
  <div class="course-card">
    <h2>{{ course.name }}</h2>
    <h5>{{ course.grade }}</h5>
  </div>
</template>

<script>
import Client from '../services/api'

export default {
  
  name: 'CourseCard',
  props: ['course'],
  components: {

  },
  data: () => ({
    students: []
  }),
  mounted(){
    this.getStudents()
  },
  methods: {
    async getStudents() {
        const res = await Client.get(`/students/course/${this.course.id}`)
        console.log(res.data)
    }
  }
}
</script>

<style>
  .coursecard {
  border: solid #21212138 1rem;
  margin: 5em;
  }
</style>