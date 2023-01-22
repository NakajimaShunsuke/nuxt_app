<template>
  <v-form ref="form" v-model="valid">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline font-weight-bold" style="color: orange">
            アカウント登録
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-alert
              outlined
              type="error"
              :value="alert"
              transition="scale-transition"
              text
            >
              {{ alertMessage }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <v-row justify="center" align="center">
              <v-col cols="12">
                <v-text-field
                  v-model="code"
                  name="code"
                  :rules="[
                    rules.required,
                    rules.min,
                    rules.max,
                    rules.isAlphanumeric,
                  ]"
                  hint="4文字以上、必須入力です、半角英数字の必須入力です"
                  persistent-hint
                  label="アカウントID"
                  class="my-3"
                  color="orange"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="name"
                  name="name"
                  :rules="[rules.required]"
                  hint="必須入力です"
                  persistent-hint
                  label="アカウント名"
                  class="my-3"
                  color="orange"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  name="email"
                  :rules="[rules.required, rules.email]"
                  label="メールアドレス"
                  hint="必須入力です"
                  persistent-hint
                  class="my-3"
                  color="orange"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  name="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[
                    rules.required,
                    rules.min,
                    rules.max,
                    rules.isAlphanumeric,
                  ]"
                  :type="show1 ? 'text' : 'password'"
                  label="パスワード"
                  hint="8文字以上、20文字以内、半角英数字の必須入力です"
                  persistent-hint
                  autocomplete="off"
                  class="my-3"
                  color="orange"
                  outlined
                  dense
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer />
            <v-btn class="ma-2 px-8" outlined color="orange" @click="submit">
              登録
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      code: '',
      name: '',
      email: '',
      password: '',
      show1: false,
      alert: false,
      alertMessage: '',
      rules: {
        required: (value) => !!value || 'この項目は必須です',
        min: (v) => v.length >= 4 || 'ユーザーIDの長さは4文字以上です',
        max: (v) => v.length <= 20 || 'ユーザーIDの長は20文字以内です',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'そのメールアドレスは無効です'
        },
        isAlphanumeric: (value) => {
          const pattern = /^[A-Za-z0-9]*$/
          return pattern.test(value) || '半角英数字のみ入力可能です'
        },
      },
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line no-console
        console.log('成功')
        // TODO: ここに登録成功時の処理追加
        // TODO: APIエラー時に実行する処理
        this.alert = true
        this.alertMessage = 'API実行エラー'
      }
    },
  },
}
</script>
