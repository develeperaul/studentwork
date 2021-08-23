<template>
  <q-layout view="hhh lpr FFF">
    <q-footer

      class="tw-bg-white tw-overflow-hidden tw-z-10 env-b"
      style="footer-show box-shadow: 0px 0px 18px 0px #e5e5e5; padding-top: 6px"
      v-model="footerState"

    >
      <div class="-m-content">
        <q-toolbar class="tw-grid tw-grid-flow-col">
          <NavLink name="about" src="about" title="О нас"  />
          <NavLink name="training" src="training" title="Обучение" />
          <NavLink name="rate" src="rate" title="Тарифы" :exact="true" />
          <NavLink name="begin" src="begin" title="Начать" />
        </q-toolbar>
      </div>
    </q-footer>
    <q-page-container>
      <router-view
        class="p-content"
        :class="{ 'env-t': $route.meta['safe-t'] !== false }"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavLink from 'components/NavLink';

export default {
  components: {
    NavLink,
  },
  name: 'MainLayout',

  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    footerState(){
      return this.$store.state.auth.footerState
      
    }
  }
};
</script>

<style scoped>
</style>
