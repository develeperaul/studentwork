<template>
  <q-page >
    <div class="-m-content tw-relative tw-z-0">
      <div
        class=" tw-absolute bg-img"
        style="background-image: url(/bg/bg-main.svg);"
      >
      </div>
    </div>
    <div class="tw-text-center tw-relative tw-pt-6 ">
      <div
        @click="linkRate"
        class="tw-absolute tw-left-0 tw-top-1 tw-transform tw-translate-y-1/2 ">
        <q-icon name="chevron_left" size="31px"/>
        <span class="tw-align-middle tw--ml-2"> Назад </span>
      </div>
      <span class="tw-font-bold tw-text-gray-darken tw-text-2xl ">
        Тарифы
      </span>
    </div>
    <Table class="tw-relative tw-z-10 tw-mt-6"/>
  </q-page>
</template>

<script>
import Table from "components/Table.vue"
export default {
  name: 'RateTable',
  components: {
    Table
  },
  methods: {
    linkRate(){
      this.$router.push({name:"rate"})
    }
  }
}
</script>
<style scoped>
  .bg-img{
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: top; */
    
    background-position-y: -40px;
    background-position-x: center;
    width: 100%;
    min-height: 100px;
    height: 159px;
    /* padding: 0 0 10px 0; */
    
  }
</style>
