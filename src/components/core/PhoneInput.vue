<template>
    <Input
    iconName="phone"
    v-model="innerValue"
    rules="required|length:18"
    textColor="#71C688"
    type="tel"
    label="Ваш телефон"
    placeholder="+7 (922) 111-05-00"
    v-mask="'+7 (###) ###-##-##'" />
</template>

<script>

import { VueMaskDirective } from 'v-mask';

export default {
  name: 'PhoneInput',
  props: {
    raw: {
      default: '',
      type: String,
    }
  },
  data () {
    return {
      innerValue: ''
    }
  },
  directives: {
    mask: VueMaskDirective,
  },
    created() {
    
    if (this.value) {
      
      this.innerValue = this.value;
      

    }
  },
  watch: {
      innerValue: {
      handler(value) {
        if (value.length <= 0) return this.$emit('update:raw', value);
        const clean = `${value.replace(/[^\d]/gi, '')}`;
        this.$emit('update:raw', clean);
      },
      immediate: true,
    },
    value(newVal) {
      if (newVal !== this.innerValue) {
        this.innerValue = newVal;
      }
    },
  }
}
</script>
