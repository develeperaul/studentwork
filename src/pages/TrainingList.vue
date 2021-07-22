<template>
  <q-page >
    <div class="-m-content tw-relative tw-z-0">
      <div
        class=" tw-absolute bg-img"
        style="background-image: url(/bg/bg-traininglist.svg);"
      >
      </div>
    </div>
    <div class="tw-text-center tw-relative tw-pt-6 ">
      <div
        @click="linkTraining"
        class="tw-absolute tw-left-0 tw-top-1 tw-transform tw-translate-y-1/2 ">
        <q-icon name="chevron_left" size="31px" color="white"/>
        <span class="tw-align-middle tw-text-white tw--ml-2"> Назад </span>
      </div>
      <span class="tw-font-bold tw-text-white tw-text-2xl ">
        Список уроков
      </span>
    </div>
    <div
      class="tw-bg-white tw-min-h-full tw-relative tw-rounded-md tw-px-2 tw-mt-6"
      style="box-shadow: rgba(0, 0, 0, .15) 0px 0px 12px 1px; min-height: 70vh"
      >
      <div class="tw-flex tw-justify-between tw-py-3">
        <div class="tw-flex">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg" 
            :ratio="16/9"
            height="52px"
            width="93px"
            spinner-color="primary"
            spinner-size="82px"
            img-class="tw-rounded-md "
          />
          <div class="tw-flex tw-flex-col tw-ml-2">
            <span class="tw-font-bold">Кто такой агент?</span>
            <span class="tw-text-sm">12:00</span>
            
          </div>
        </div>
        <div class="tw-self-center tw-ml-2" @click="linkVideo">
          <Icon name="play" />
        </div>
      </div>
    </div>
    
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  methods:{
    linkTraining(){
      this.$router.push({name:'training'})
    },
    linkVideo(){
      
      this.$router.push({name: "trainingitem", params: {id: '1'}})
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
    height: 242px;
    /* padding: 0 0 10px 0; */
    
  }
</style>
