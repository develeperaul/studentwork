<template>
  <q-page >
    <div class="-m-content tw-relative tw-z-0">
      <div
        class=" tw-absolute bg-img"
        style="background-image: url(/bg/bg-table.svg);"
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
    <Table class="tw-relative tw-z-10 tw-mt-6" :list="tableList"/>
  </q-page>
</template>

<script>
import Table from "components/Table.vue";
import {mapGetters} from "vuex";
import {QSpinnerPuff} from 'quasar'

export default {
  name: 'RateTable',
  components: {
    Table
  },
  methods: {
    showLoader(){
      this.$q.loading.show(
        {
          spinner: QSpinnerPuff,
          spinnerSize: 240,
        }
      )  
    },
    linkRate(){
      this.$router.push({name:"rate"})
    },
    async getTable(id){
      this.showLoader()
      await this.$store.dispatch("rate/tableList", id)
    }
  },
  computed:{
    ...mapGetters('rate', ['tableList'])
  },
  created(){
    // {region_id: "2", important_id: "3"}
    console.log(this.$route.params)
    this.getTable(this.$route.params).then(()=>{this.$q.loading.hide()});
  }
}
</script>
<style scoped>
  .bg-img{
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: top; */
    
    background-position-y: -7px;
    background-position-x: center;
    width: 100%;
    min-height: 100px;
    height: 139px;
    /* padding: 0 0 10px 0; */
    
  }
</style>
