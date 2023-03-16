<template>
  <div class="logincontainer">
    <form v-if="user" class="loginform" @submit="loginUser">
      <input v-model="login.username" placeholder="User Name">
      <input v-model="login.password" placeholder="Password">
      <button :disabled="!login.username || !login.password">Log In</button>
      <p @click="toggleUser()">New to the site?  Click here to sign up!</p>
    </form>
    <form v-else class="registerform" @submit="registerUser">
      <input v-model="register.name" placeholder="First and Last Name">
      <input v-model="register.email" placeholder="Your Email Address">
      <input v-model="register.username" placeholder="New User Name">
      <input v-model="register.password" placeholder="New Password">
      <button :disabled="!register.username || !register.password">Create Account</button>
      <p @click="toggleUser()">Already have an account?  Click here to log in!</p>
    </form>
  </div>
</template>

<script>
  export default{
    name: 'LoginPage',
    components: {},
    data: () => ({
      user: true,
      login: {
        username: '',
        password: ''
      },
      register: {
        name: '',
        email: '',
        username: '',
        password: ''
      }
    }),
    mounted() {},
    methods: {
      toggleUser() {
        if (this.user === true) {
          return this.user = false
        } else if (this.user === false) {
          return this.user = true
        }
      },
      loginUser() {
        this.$router.push('/welcome')
      },
      registerUser() {
        this.user = true
      }
    }
  }
</script>

<style>
</style>