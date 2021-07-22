<template>
  <q-page >
    
    <Background
      title="Тарифы"
      src="rate"
      
    />
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-4 tw-mb-28">
      <div class="tw-w-full">
        <span>
          Регион
        </span>
        <q-select
          borderless
          v-model="model"
          :options="options"
          
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
      <div class="tw-w-full tw-mt-6">
        <span>
          Что важно?
        </span>
        <q-select
          borderless
          v-model="model"
          :options="options"
          
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


  </q-page>
</template>

<script>

import Background from 'components/Background.vue'


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
      
    }
  },
  methods:{
    linkTable(){
      console.log('link')
      this.$router.push()
    }
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