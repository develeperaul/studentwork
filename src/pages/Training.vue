<template>
  <q-page>
    <Background
      title="Обучение"
      src="training"
    />
    
    <div class="tw-flex tw-flex-col tw-items-center tw-mt-3 tw-mb-28">
      <span class="tw-text-gray-darken tw-font-bold tw-text-2xl">
        Чему вы научитесь:
      </span>
      <div class="tw-flex tw-mt-6">
        <Icon name="check" class="tw-transform tw--translate-y-1"
        style="margin-right: 6px;"/>
        <span class="tw-text-left tw-w-56 ">
        Находить клиентов, которым 
        интересны выгодные тарифы
        </span>
      </div>
      <div class="tw-flex tw-mt-6">
        <Icon name="check" class="tw-transform tw--translate-y-1"
        style="margin-right: 6px;"/>
        <span class="tw-text-left tw-w-56">
        Правильно регистрировать 
        сим-карты для пользователей
        </span>
      </div>
      <div class="tw-flex tw-mt-6">
        <Icon name="check" class="tw-transform tw--translate-y-1"
        style="margin-right: 6px;"/>
        <span class="tw-text-left tw-w-56">
          Получать постоянный доход :)
        </span>
      </div>
      <Button text="Начать обучение" :to="{name: 'traininglist'}" class="tw-mt-16"/>
    </div>
    
  </q-page>
</template>

<script>
import Background from 'components/Background.vue'
export default {
  name: 'Training',
  components: {
    Background
  }
}
</script>
