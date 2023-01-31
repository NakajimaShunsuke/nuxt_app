<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title
          class="headline font-weight-bold justify-center"
          style="color: orange"
        >
          ログイン
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-center py-10">
          <v-btn
            rounded
            color="orange"
            outlined
            dark
            class="text-capitalize"
            @click="login"
          >
            <v-icon color="orange" dark left> mdi-google </v-icon
            >Googleでログイン
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'
export default {
  data() {
    return {}
  },
  methods: {
    async login() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      await signInWithPopup(auth, provider)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const loginUser = {
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
          }
          this.$store.dispatch('google/setUser', loginUser)
          this.$router.push('/')
        } else {
          // eslint-disable-next-line no-console
          console.log('ログインに失敗しました')
        }
      })
    },
  },
}
</script>

<style></style>
