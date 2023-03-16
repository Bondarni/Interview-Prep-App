<template>
  <div class="logincontainer">
    <form v-if="user" class="loginform">
      <input>
      <input>
      <button>Log In</button>
      <p @click="toggleUser()">New to the site?  Click here to sign up!</p>
    </form>
    <form v-else class="registerform">
      <input>
      <input>
      <input>
      <input>
      <button>Create Account</button>
      <p @click="toggleUser()">Already have an account?  Click here to log in!</p>
    </form>
  </div>
</template>

<script>
  export default{
    name: 'LoginPage',
    components: {},
    data: () => ({
      user: true
    }),
    mounted() {},
    methods: {
      toggleUser() {
        if (this.user === true) {
          return this.user = false
        } else if (this.user === false) {
          return this.user = true
        }
      }
    }
  }
</script>

<style>
</style>