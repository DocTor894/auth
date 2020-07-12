<template>
  <div class="login">
    <authForm buttonText="Login" :submitForm="loginUser"/>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import authForm from '@/components/AuthForm';

  export default {
    name: 'login',
    components: {
      authForm
    },
    computed: {
      ...mapState(['users'])
    },
    methods: {
      ...mapMutations(['setUser']),

      loginUser(userInfo) {
        for (let user in this.users) {
          if( this.users[user].username === userInfo.username
            && this.users[user].password === userInfo.password){

            this.setUser(this.users[user]);
            this.$router.push('/profile')
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
