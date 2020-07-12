<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="400">
        <v-card-title><h1>Login</h1></v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="userInfo.username"
              :counter="20"
              :rules="loginRules"
              label="Login"
              required/>

            <v-text-field
              v-model="userInfo.password"
              :rules="passRules"
              label="Password"
              required/>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submitForm(userInfo)">
              {{ buttonText }}
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      submitForm: {
        type: Function
      },
      buttonText: {
        type: String
      },
      reg: {
        default: false
      }
    },
    data() {
      return {
        valid: false,
        userInfo: {
          username: 'Sara123',
          password: '123456',
        },
        loginRules: [
          v => !!v || 'Login is required',
          v => (v && v.length <= 20) || 'Login must be less than 20 characters'
        ],
        passRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 3) || 'Password is small'
        ],
      }
    }
  }
</script>
