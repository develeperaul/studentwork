<template>
  <q-page >
    
    <Background
      title="Тарифы"
      src="rate"
      
    />
    
        <Button text="Посмотреть" />
    
      
    
  </q-page>
</template>

<script>

import Background from 'components/Background.vue'
export default {
  name: 'Rate',
  components: {
    Background
  }
}
</script>
