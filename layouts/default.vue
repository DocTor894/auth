<template>
  <v-app dark>

    <v-app-bar
      fixed
      app
    >
      <div v-if="this.$auth.loggedIn">
        {{ $auth.username }}
      <v-btn text>Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
