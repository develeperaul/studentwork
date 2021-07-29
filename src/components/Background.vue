<template>
  <div>
  <div class="-m-content">
    <div
      class=" tw-absolute bg-img"
      style="background-image: url(bg/bg-main.svg);"
    >
    </div>
  </div>
  <div class=" tw-flex tw-flex-col tw-items-center ">
    <span class="tw-text-white tw-font-bold tw-text-2xl tw-pt-6 tw-z-10">{{title}}</span>
    <q-img
      :src="`bg/bg-${src}.svg`"
      no-default-spinner
      contain
      position="bottom"
      height="193px"
      
      class="tw-mt-5"
      
    />
  </div>
    
  </div>

    
  
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  // name: 'ComponentName',
  data () {
    return {}
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