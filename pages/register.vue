<template>
    <div class="register">
      <h1>Register</h1>
      <authForm buttonText="Register" :submitForm="registerUser" :reg="true"/>
    </div>
</template>

<script>
  import authForm from '@/components/AuthForm'

  export default {
    name: 'register',
    components: {
      authForm,
    },
    methods: {
      registerUser(registrationinfo) {
        alert('HEEEY!')
      }
    }
  }
</script>

<style scoped>

</style>
