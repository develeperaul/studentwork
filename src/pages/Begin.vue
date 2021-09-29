<template>
  <q-page>
    <Background
      title="Оставить заявку"
      src="begin"
    />

    <ValidationObserver v-slot="{ passes }">
      <form
        @submit.prevent="passes(onSubmit)"
        class="tw-flex tw-flex-col tw-items-center tw-mb-28"
      >

        <PhoneInput :raw.sync="cellphone" />
        <EmailInput :valueemail.sync="email" />

        <Button
          text="Отправить"
          type="submit"
          class="tw-mt-10"
        />
      </form>
    </ValidationObserver>

  </q-page>
</template>

<script>
import Background from 'components/Background.vue'

export default {
  name: 'Begin',
  components: {
    Background
  },
  data () {
    return {
      email: '',

      cellphone: '',
    }
  },
  methods: {
    async onSubmit () {
      await this.$store.dispatch('auth/send', { cellphone: this.cellphone, mail: this.email })
        .then(resolve=>{
          if(resolve.status === 'ok'){
            if(this.$q.platform.is.android && localStorage.getItem('form_send') === null){
              cordova.plugins.firebase.analytics.logEvent('FormSent', null);
              facebookConnectPlugin.logEvent('FormSent')          
              localStorage.setItem("form_send", true);
            }
            return this.$router.push({name:'order'})
          } 
          return this.$router.push({name:'error'})
          })
        
      // console.log(FirebasePlugin);
    }
  },
}
</script>
