<template>
    <div class="course-form">
        <form @submit="addCourse">
            <input v-on:input="handleNameChange" type="text" name="name" :value="name" placeholder="enter course name">
            <input v-on:input="handleGradeChange" type="text" name="grade" :value="grade" placeholder="enter course grade">
            <button>Add Course</button>
        </form>
    </div>
</template>
  
<script>
import Client from '../services/api'
export default {
    name: 'StudentCourseForm',
    components: {

    },
    data: () => ({
        name: '',
        grade: ''
    }),
    mounted() { },
    methods: {
        handleNameChange(e) {
            this.name = e.target.value
        },
        handleGradeChange(e) {
            this.grade = e.target.value
        },
        getStudentDetails() {
            this.$emit('getStudentDetails')
        },
        toggleClicked() {
            this.$emit('toggleClicked')
        },
        async addCourse(e) {
            e.preventDefault()
            const studentId = this.$route.params.student_id
            let gpa
            if (this.grade === 'A') {
                gpa = 4
            }
            else if (this.grade === 'B') {
                gpa = 3
            }
            else if (this.grade === 'C') {
                gpa = 2
            }
            else if (this.grade === 'D') {
                gpa = 1
            }
            else if (this.grade === 'F') {
                gpa = 0
            }
            await Client.post(`/courses/studentcourse/${studentId}`, { name: this.name, grade: gpa })
            this.name = ''
            this.grade = ''
            this.getStudentDetails()
            this.toggleClicked()
        }
    }
}
</script>
  
<style></style>