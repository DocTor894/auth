<template>
    <div class="login">
      <h1>Login</h1>

      <authForm buttonText="Login" :submitForm="loginUser" />
    </div>
</template>

<script>
  import authForm from '@/components/AuthForm'

  export default {
    name: 'login',
    components: {
      authForm,
    },
    methods: {
      loginUser(loginInfo) {
        this.$auth.loginWith('local', {
          data: loginInfo
        });
      }
    }
  }
</script>

<style scoped>

</style>
