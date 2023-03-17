<template>
  <div class="logincontainer">
    <form v-if="user" class="loginform" @submit="loginUser">
      <input v-model="login.email" placeholder="User Email">
      <input v-model="login.password" placeholder="Password">
      <button :disabled="!login.email || !login.password">Log In</button>
      <p @click="toggleUser()">New to the site?  Click here to sign up!</p>
    </form>
    <form v-else class="registerform" @submit="handleSubmit">
      <input v-model="register.username" placeholder="New User Name">
      <input v-model="register.email" placeholder="Your Email Address">
      <input v-model="register.password" placeholder="New Password">
      <button :disabled="!register.username || !register.password">Create Account</button>
      <p @click="toggleUser()">Already have an account?  Click here to log in!</p>
    </form>
    <p>email: admin@email.com</p>
    <p>password: admin</p>
  </div>
</template>

<script>
import { RegisterUser } from '@/services/Auth'
import { SignInUser } from '../services/Auth'

  export default{
    name: 'LoginPage',
    components: {},
    data: () => ({
      user: true,
      login: {
        email: '',
        password: ''
      },
      register: {
        username: '',
        email: '',
        password: ''
      },
    }),
    mounted() {
    },
    methods: {
      toggleUser() {
        if (this.user === true) {
          return this.user = false
        } else if (this.user === false) {
          return this.user = true
        }
      },
      async loginUser(e) {
        e.preventDefault()
        await SignInUser ({
          email: this.login.email,
          password: this.login.password
        })
        this.$router.push('/welcome')
      },
      async handleSubmit(e) {
        e.preventDefault()
        await RegisterUser ({
          username: this.register.username, 
          email: this.register.email,
          password: this.register.password
        })
        this.user = true
      }
    }
  }
</script>

<style>
</style>