import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'
import CoursesPage from './pages/CoursesPage'
import CourseDetails from './pages/CourseDetails'
import CourseForm from './pages/CourseForm'
import StudentsPage from './pages/StudentsPage'
import StudentDetails from './pages/StudentDetails'
import StudentForm from './pages/StudentForm'

const routes = [
  { path: '/', component: LoginPage, name: 'LoginPage' },
  { path: '/welcome', component: WelcomePage, name: 'WelcomePage' },
  { path: '/courses', component: CoursesPage, name: 'CoursesPage' },
  {
    path: '/courses/:course_id',
    component: CourseDetails,
    name: 'CourseDetails'
  },
  { path: '/courses/newcourse', component: CourseForm, name: 'CourseForm' },
  { path: '/students', component: StudentsPage, name: 'StudentsPage' },
  {
    path: '/students/:student_id',
    component: StudentDetails,
    name: 'StudentDetails'
  },
  { path: '/students/newstudent', component: StudentForm, name: 'StudentForm' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
