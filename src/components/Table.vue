<template>
<div class="">
  
    <table class="tw-grid -m-content ">
      <thead >
        <tr class="tw-grid tw-grid-cols-6">
          <th class="tw-text-center tw-p-0 min-w">
            <Icon
            class="tw-mx-auto tw-my-0.5"
            name="name"/>
            Назв
          </th>
          <th class="tw-text-center tw-p-0 min-w">
            <Icon
            class="tw-mx-auto tw-my-0.5"
            name="operator"/>
            Опер
          </th>
          <th class="tw-text-center tw-p-0 min-w">
            <Icon
            class="tw-mx-auto tw-my-0.5"
            name="inet"/>
            Инет
          </th>
          <th class="tw-text-center tw-p-0 min-w">
            <Icon
            class="tw-mx-auto tw-my-0.5"
            name="minut"/>
            Мин
          </th>
          <th class="tw-text-center tw-p-0 min-w">
            <Icon
            class="tw-mx-auto tw-my-0.5"
            name="sms"/>
            Смс
          </th>
          <th class="tw-text-center tw-p-0 min-w ">
            <Icon 
            class="tw-mx-auto tw-my-0.5"
            name="price"/>
            Цена
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in list" :key="item.id"
          class="tw-grid tw-grid-cols-6 ">
          <td class="tw-text-center min-w tw-self-center">{{item.name}}</td>
          <td class="tw-text-center min-w  tw-self-center ">{{item.operator}}</td>
          <td class="tw-text-center min-w  tw-self-center ">{{item.inet}}</td>
          <td class="tw-text-center min-w  tw-self-center ">{{item.minut}}</td>
          <td class="tw-text-center min-w  tw-self-center ">{{item.sms}}</td>
          <td class="tw-text-center min-w  tw-self-center ">{{item.price}}</td>

        </tr>

      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      separator: 'none'
    }
  }
}
</script>
