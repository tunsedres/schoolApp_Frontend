<template>
  <b-container>
    <b-row>

      <b-col md="4" offset-md="4">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email:"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              requiredComponent reference
              placeholder="Mail adresinizi girin"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Şifre:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Şifre girin"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Giriş</b-button>
        </b-form>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
  },
  methods: {
      onSubmit(evt) {

        evt.preventDefault()
        this.$store.dispatch('authUser', this.form ).then( res => {
            if(res.data.status == 'success'){
              this.$toast.success('Giriş başarılı')
              this.$router.push({ name: "home"})
            }
            else{
              this.$toast.error(res.data.message)
            }
          }

        )

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
      }
  }
}
</script>
