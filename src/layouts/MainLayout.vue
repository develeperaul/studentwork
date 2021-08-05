<template>
  <q-layout
    view="hhh lpr FFF"
    container
    style="height:100vh"
  >
    <q-footer
      class="tw-bg-white  tw-overflow-hidden tw-pt-1.5 tw-pb-3.5 tw-z-10"
      style="box-shadow: 0px 0px 18px 0px #E5E5E5; padding-top: 6px; padding-bottom: 14px;
"
    >
      <div class="-m-content">
        <q-toolbar class="tw-grid tw-grid-flow-col  ">
          <NavLink
            name="about"
            src="about"
            title="О нас"
            :exact="true"
          />
          <NavLink
            name="training"
            src="training"
            title="Обучение"
          />
          <NavLink
            name="rate"
            src="rate"
            title="Тарифы"
          />
          <NavLink
            name="begin"
            src="begin"
            title="Начать"
          />
        </q-toolbar>
      </div>
    </q-footer>
    <q-page-container>
      <router-view class="p-content" />
    </q-page-container>
  </q-layout>

</template>

<script>

import NavLink from "components/NavLink"





export default {
  components: {
    NavLink
  },
  name: 'MainLayout',

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
