<template>
  <Input
    iconName="email"
    rules="required|email"
    v-model="innerValue"
    label="Ваша почта"
    placeholder="example@email.com"
    textColor="#9677ED"
  />
</template>

<script>
export default {
  props: {
    valueemail: {
      type: String,
      default: ''
    }
  },
  // name: 'ComponentName',
  data () {
    return {
      innerValue: ''
    }
  },
  watch: {
    innerValue: {
      handler(value){
        this.$emit('update:valueemail', value)
      }
    }
  }
}
</script>
