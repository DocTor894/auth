<template>
  <v-container column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card max-width="500" shaped>
        <v-btn @click="logout">
          Logout
        </v-btn>
        <v-card-title><h1>Profile {{ user.username }}</h1></v-card-title>
        <v-card-text class="headline font-weight-bold">{{ user.name }}</v-card-text>
        <div class="grey--text ml-4"> {{ user.phone }} </div>
      </v-card>
    </v-flex>


    <v-row>
      <v-col cols="6" sm="4" v-for="elem in user.photos" :key="elem.index">
        <v-img
          :src="elem.photo"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'profile',
    computed: {
      ...mapState(['user'])
    },
    methods: {
      logout() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
