<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <q-page-container class="p-content tw-relative tw-h-screen ">
      <div class=" tw-pt-6 tw-absolute tw-z-10 tw-right-4" @click="closeScreen">
        <span class=" tw-text-grey-light tw-font-bold tw-text-2xl">
          Пропустить
        </span>
      </div>

      <q-carousel
      swipeable
      v-model="slide"
      navigation
      ref="carousel"
      height="100%"
      transition-prev="slide-right"
      transition-next="slide-left"
      class=""
      style="padding-top: 74px;"
    >
      <q-carousel-slide :name="1" >
        <div>
        <q-img
          src="/carousel/people_1.svg"
          
          spinner-color="primary"
          spinner-size="82px"
          contain
          position="bottom"
          height="100%"
          width="100%"
          class="tw-mt-5"
          
        />
        <p class="tw-text-center tw-mx-12 tw-font-bold tw-text-2xl">
          Ты студент, которому нужен 
          дополнительный доход?
        </p>
        <p class="tw-text-center tw-mt-4 tw-text-lg">
          Что же - ты попал по адресу. Сейчас мы
          расскажем, как ты можешь заработать
          неплохие деньги без сверхусилий.
        </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" >
        <div>
          <q-img
            src="/carousel/people_2.svg"
            
            spinner-color="primary"
            spinner-size="82px"
            contain
            position="bottom"
            height="100%"
            width="100%"
            class="tw-mt-5"
            
          />
          <p class="tw-text-center tw-mx-12 tw-font-bold tw-text-2xl">
            Чем нужно заниматься?
          </p>
          <p class="tw-text-center tw-mt-4 tw-text-lg">
            Вы будете продавать сим-карты
            с уникальными тарифами, которых 
            нет в открытом доступе.
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" >
        <div>
          <q-img
            src="/carousel/people_1.svg"
            
            spinner-color="primary"
            spinner-size="82px"
            contain
            position="bottom"
            height="100%"
            width="100%"
            class="tw-mt-5"
            
          />
          <p class="tw-text-center tw-mx-12 tw-font-bold tw-text-2xl">
            «А хватит ли мне времени?»

          </p>
          <p class="tw-text-center tw-mt-4 tw-text-lg">
            Да, это может стать вашей 
            подработкой в свободное время. 
            Вы сами выбираете себе график.
          </p>
        </div>

      </q-carousel-slide>
      <q-carousel-slide :name="4" >
        <div>
          <q-img
            src="/carousel/people_4.svg"
            
            spinner-color="primary"
            spinner-size="82px"
            contain
            position="bottom"
            height="100%"
            width="100%"
            class="tw-mt-5"
            
          />
          <p class="tw-text-center tw-mx-12 tw-font-bold tw-text-2xl">
            «Но я не продажник»
          </p>
          <p class="tw-text-center tw-mt-4 tw-text-lg">
            Во-первых, наши тарифы продают 
            себя сами, настолько они хороши. 
            Во-вторых, мы вас всему научим.
          </p>
        </div>
 
      </q-carousel-slide>
      <q-carousel-slide :name="5" >
        <div>
          <q-img
            src="/carousel/people_5.svg"
            
            spinner-color="primary"
            spinner-size="82px"
            contain
            position="bottom"
            height="100%"
            width="100%"
            class="tw-mt-5"
            
          />
          <p class="tw-text-center tw-mx-12 tw-font-bold tw-text-2xl">
            Откуда у нас такие 
            выгодные тарифы?
          </p>
          <p class="tw-text-center tw-mt-4 tw-text-lg">
            У нас есть особые соглашения
            с ведущими операторами. Тарифы 
            действительно выгодные. Впрочем, 
            взгляните на эти тарифы сами!
          </p>
        </div>

      </q-carousel-slide>
      
      
      <template v-slot:navigation-icon="{ active}"  >
          
            <div v-if="active" class="tw-pb-16 tw-mx-1">
              <Icon  name="ellipse_border"/>
            </div>
            <div v-else class="tw-pb-16 tw-mx-1">
              <Icon  name="ellipse"/>
            </div>
          
          
     
      </template>

      <template v-slot:control>


        <q-carousel-control
          position="bottom"
          :offset="[0, 0]"
          class="tw-flex tw-justify-between tw-pb-20"
          
        >
          <span
             
            @click="$refs.carousel.previous()"
            
            :class="[slide === 1 ? 'tw-text-gray-light' :'tw-text-slide-color']"
          >Пред</span>
          <span
            class="tw-text-slide-color"
            @click="nextSlide"
          >След</span>
        </q-carousel-control>
      </template>
    </q-carousel>
    
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
            slide: 1,
      autoplay: false
    }
  },
  methods: {
    nextSlide(){
      if(this.slide === 5 ){
        this.closeScreen()
      }else{
        this.$refs.carousel.next()
      }
    },
    closeScreen(){
      localStorage.setItem('start', 1)
      this.$router.push({ name: 'about' });
    }
  }
}
</script>
