<template>
  <q-page >
    <Background
      title="Оставить заявку"
      src="begin"
    />
  <Button text="Отрпавить"/>
  <label for="">
    Ваш телефон
  </label>
  <q-input
    outlined
    dark
    color="white"
    bg-color="white"
    
    dense
    :style="[{boxShadow: 'rgba(0, 0, 0, .15) 0px 0px 12px 1px'},{borderRadius: '6px'}]"
    
  > 
     <template v-slot:prepend>
    <Icon name="insta" class="tw-inline"/>
     </template>
  </q-input>
  

  </q-page>
</template>

<script>
import Background from 'components/Background.vue'

export default {
  name: 'Begin',
  components: {
    Background
  }
}
</script>
