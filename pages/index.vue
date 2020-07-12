<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-btn @click="toLogin">
        login
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      toLogin() {
        this.$router.push('auth/login');
      }
    }
  }
</script>

<style scoped>

</style>
