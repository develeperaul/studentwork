<template>
<div class="tw-relative">
  
  <router-link
    :to="{name: name}"
    v-slot="{href, isActive, navigate}"
    custom
    :exact="exact"
    active-class="active"
    class=""
  > 

    <a class="tw-flex tw-flex-col tw-items-center tw-relative"  :active="isActive" :href="href" @click="navigate"
      >
    <div v-if="isActive" class="bord">
    </div>
      <Icon :name="name" style="width: 32px; height: 32px;" :active="isActive"/>
      <span
        class="tw-text-gray-light tw-text-xs"
        :class="[{ active: isActive }, { textColor: !isActive }]"
        >{{title}}</span>
    </a>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props:{
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    exact: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
  .active{
    color: #F1A43F;
  }
  .textColor{
    color: #ADADAD;
  }
  .bord {
    
    position: absolute;
    top: -9px;
    width: 100%;
    
    border-top: 2px solid #F1A43F;

  }
</style>