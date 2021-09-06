<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->


    

    <q-page-container
        class="p-content"
        :class="{ 'env-t': $route.meta['safe-t'] !== false }"
    >
      <div class="container ">
            <q-img
              src="bg/bg-order.png"
              spinner-color="primary"
              spinner-size="82px"
              contain
              position="bottom"
              height="100%"
              width="100%"
              
            />
            <div class="text">
              <p>
                Ваша заявка успешно отправлена.
              </p>
              <p>
                Мы свяжемся с вами
                <br/>
                в ближайшее время.
              </p>
            </div>
      </div>

    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
<style lang="scss" scoped>

  .container {
    padding-top: 55px;
  }

  .text {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: center;    
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.9px;
  }
</style>
