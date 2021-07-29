<template>
  <q-page >
    
    
    <Background
      title="О нас"
      src="about"
    />
      <div class="tw-  flex tw-flex-col tw-items-center tw-mt-3 tw-mb-9">
        <span class="tw-font-bold tw-text-gray-darken ">
          Мой Мобильный Партнер
        </span>
        <span class="tw-mt-5 tw-text-center">
          Это официальный представитель МТС, 
          Билайн, Мегафон, Yota, Tele2 и Ростелеком
        </span>
        <span class="tw-font-bold tw-text-gray-darken tw-mt-9">
          О компании
        </span>
        
        <Icon name="time" class="tw-mt-5"/>
        <span class="tw-mt-2">
          Работаем с 2005 года
        </span>
      
      
        <Icon name="group" class="tw-mt-4"/>
        <span class="tw-mt-2 tw-text-center">
          Более 150 000 действующих довольных абонентов
        </span>
        
      
      
        <Icon name="city" class="tw-mt-4"/>
        <span class="tw-mt-2 tw-text-center">
          Работаем по всей России, по состоянию 
          на февраль 2021 года представлены
          в более чем 305 городах
        </span>
      
        <span class="tw-font-bold tw-text-gray-darken tw-mt-9">
          Свяжитесь с нами!
        </span>
      <a href="https://www.instagram.com/mmpartner_official/?hl=ru"
        class="tw-mt-5 tw-flex tw-items-center tw-justify-between tw-w-full tw-rounded-xl tw-py-2 tw-px-3"
        style="box-shadow: rgba(0, 0, 0, .15) 0px 0px 12px 1px;"
        >
        <div class="tw-flex tw-items-center">
          <Icon name="insta" class="tw-mr-3"/>
          <span class="tw-text-xl tw-font-bold tw-text-purple">
            Instagram
          </span>
          
        </div>
        <q-btn round size="10px" icon="chevron_right" flat class="tw-bg-deep-lemon-light tw-text-deep-lemon"/>
      </a>
      <a href="https://mmpartner.ru/"
        class="tw-mt-4 tw-flex tw-items-center tw-justify-between tw-w-full tw-rounded-xl tw-py-2 tw-px-3"
        style="box-shadow: rgba(0, 0, 0, .15) 0px 0px 12px 1px;"
        >
        <div class="tw-flex tw-items-center">
          <Icon name="world" class="tw-mr-3"/>
          <span class="tw-text-xl tw-font-bold tw-text-blue">
            
            mmpartner.ru
          </span>
        </div>
        <q-btn round size="10px" icon="chevron_right" flat class="tw-bg-deep-lemon-light tw-text-deep-lemon"/>
      </a>
    </div>
    
    
    
  </q-page>
</template>

<script>
import Background from 'components/Background.vue'
export default {
  name: 'About',
  components: {
    Background
  }
}
</script>
