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
    onSubmit () {
      this.$store.dispatch('auth/send', { cellphone: this.cellphone, mail: this.email }).then(resolve=>resolve.status === 'ok'? this.$router.push({name:'order'}) : this.$router.push({name:'error'}));
    
    }
  }
}
</script>
