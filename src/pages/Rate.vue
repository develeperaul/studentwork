<template>
  <q-page >
    
    <Background
      title="Тарифы"
      src="rate"
      
    />
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-4 tw-mb-28">
      <div class="tw-w-full region">
        <span>
          Регион
        </span>
        <q-select
          borderless
          v-model="model"
          behavior="menu"
          :options="regionList"
          
          style="box-shadow: rgba(0, 0, 0, .15) 0px 0px 12px 1px; border-radius: 6px"
          >
          <template v-slot:prepend>
              <Icon name="city" class="tw-ml-3.5"/>
          </template>
          <template v-slot:append>
                  <q-btn
                  round
                  size="10px"
                  icon="chevron_right"
                  flat
                  class="tw-absolute tw-top-1/2 tw-right-3.5 tw-transform tw--translate-y-1/2 tw-rotate-90 tw-bg-deep-lemon-light tw-text-deep-lemon" 
                  
                  />
          </template>
        </q-select>
      </div>
      <div class="tw-w-full tw-mt-6 important">
        <span>
          Что важно?
        </span>
        <q-select
          borderless
          v-model="model"
          :options="importantList"
          behavior="menu"
          style="box-shadow: rgba(0, 0, 0, .15) 0px 0px 12px 1px; border-radius: 6px"
          >
           <template v-slot:prepend>
              <Icon name="failed" class="tw-ml-3.5"/>
          </template>
          <template v-slot:append>
                  <q-btn
                  round
                  size="10px"
                  icon="chevron_right"
                  flat
                  class="tw-absolute tw-top-1/2 tw-right-3.5 tw-transform tw--translate-y-1/2 tw-rotate-90 tw-bg-deep-lemon-light tw-text-deep-lemon" 
                  
                  />
          </template>
        </q-select>


      </div>
      <Button
        text="Посмотреть"
        :to="{name: 'table'}"
        class="tw-mt-16"
        />
    </div>

    {{regionList}}
  </q-page>
</template>

<script>

import Background from 'components/Background.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Rate',
  components: {
    Background,
    
  },
  data(){
    return {
      model: 'Google',
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      op: this.regionList
      
    }
  },
  methods:{
    linkTable(){
      console.log('link')
      this.$router.push()
    },
    async getRegion(){
      await this.$store.dispatch('rate/regionList')
    },
    async getImportant(){
      await this.$store.dispatch('rate/importantList')
    }
  },
  computed: {
    ...mapGetters('rate', ['regionList', 'importantList'])
  },
  created(){
    this.regionList ? null : this.getRegion();
    this.importantList ? null : this.getImportant();
    
    
  }
}
</script>
<style scoped lang="scss">
  .selects{
    position: relative;
    &::before{
      position: absolute;
      content: '';
      width: 20px;
      height: 20px;
      border: 10px solid red;
      background-color: red;
    }

  }

</style>
