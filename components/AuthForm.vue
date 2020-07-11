<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
                v-model="userInfo.username"
                :counter="10"
                :rules="loginRules"
                label="Login"
                required />

    <v-text-field
                v-model="userInfo.password"
                :rules="passRules"
                label="Password"
                required />

<!--    <v-text-field-->
<!--                v-model="userInfo.name"-->
<!--                :counter="10"-->
<!--                :rules="nameRules"-->
<!--                label="Name"-->
<!--                required-->
<!--                v-if="reg"/>-->

<!--    <v-text-field-->
<!--                v-model="userInfo.email"-->
<!--                :rules="emailRules"-->
<!--                label="E-mail"-->
<!--                required-->
<!--                v-if="reg"/>-->

    <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submitForm(userInfo)">
      {{ buttonText }}
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    props: {
      submitForm: {
        type: Function,
      },
      buttonText: {
        type: String,
      },
      reg: {
        default: false
      }
    },
    data() {
      return {
        valid: false,
        userInfo: {
          username: 'hgfhgfh',
          password: 'fghgh',
          // name: '',
          // email: '',
        },
        loginRules: [
          v => !!v || 'Login is required',
          v => (v && v.length <= 10) || 'Login must be less than 10 characters',
        ],
        passRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 10) || 'Password must be valid',
        ],
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
