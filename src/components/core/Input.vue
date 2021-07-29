<template>
  <ValidationProvider
    class="tw-relative tw-appearance-none tw-w-full BaseInput tw-mb-4"
    tag="div"
    v-bind="{ rules, vid}"
    :name="name || label"
    v-slot="{ errors, ariaInput, ariaMsg }"
  >
    <label
      
      @click="$refs.input.focus()"
      :for="name"
      ref="label"
      :class="{ 'tw-text-gray-light': !errors[0], 'tw-text-red': errors[0] }"
      >
      <span class=" tw-font-medium tw-text-base">{{
        errors[0] ? 'Данные введены неверно' : label || name }}</span>
      
    </label>
    <input
      
      :class="{ 'tw-text-red': errors[0], 'tw-pr-11' : errors[0],   }"
      class="tw-w-full tw-pl-14 tw-pr-3 tw-bg-transparent   tw-font-bold tw-text-xl"
      :style="errors[0] ? {'color' : '#ED8D88 '} : {'color': textColor}"
      style="margin-top:8px; padding-top: 14px; padding-bottom: 14px"
      :id="name" 
      :type="type"
      :maxlength="maxlength"    
      :placeholder="placeholder"
      ref="input"
      v-model="innerValue"
      v-bind="ariaInput"
      
      
    >

    
    <template>
      <Icon class="tw-absolute tw-top-2/3  tw-transform tw--translate-y-1/2" style="left: 14px" :name="iconName"/>
    </template>
    <template v-if="errors[0]">
      <Icon class="tw-absolute tw-top-2/3 tw-transform tw--translate-y-1/2" style="right: 14px" name="failed"/>
    </template>
    
    <!-- <span
      class="tw-block tw-text-secondary tw-text-xs tw-absolute tw-bottom-0 tw-left-0"
      v-bind="ariaMsg"
      v-if="errors[0]"
    >{{ errors[0] }}</span> -->
    
  </ValidationProvider>
</template>

<script>


export default {
  name: "BaseInput",

  props: {
    textColor: {
      type: String,
      required: true
    },

    iconName:{
      type: String,
      required: false
    },
    vid: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: [Object, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: "написано"
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return [
          
          "text",
          "email",
          "tel",
          
        ].includes(value);
      }
    },
    value: {
      type: null,
      default: ""
    },
    maxlength: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    innerValue: "",
    hasBlur: false,
    valuePlaceholder: null
  }),
  methods: {
    // onBlur(){
    //   if(!this.hasValue){

    //     this.hasBlur = true
    //   }
      
    // },
    // onFocus(){
    //   if(!this.hasValue){
    //     this.valuePlaceholder = this.placeholder
    //     this.$refs.input.placeholder  = this.valuePlaceholder
    //   }
      
    // }
  },
  computed: {
    
    
    
  },
  watch: {
    innerValue(value) {
      
      this.$emit("input", value);
    },
    value(val) {
      
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
    
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
    
  },
  
  
};
</script>

<style lang="scss" scoped>
.BaseInput {
  
  input {
    position: relative;
    z-index: 99999;
    border-radius: 6px;
    border: none;
    box-shadow: rgba(0, 0, 0, .15) 0px 0px 12px 1px;
    
    
    &.has-value,
    &:focus {
      outline: none;
    }
  }

  input::-webkit-calendar-picker-indicator {
    display: none
  }
  

  label {
    & span{
      padding: 0 0px;
    }
    
    user-select: none;
    font-size: 1rem;
  }

  input:focus {
    border-color:#272727;

  }
  input.has-placeholder ~ label,
  input.has-value ~ label,
  input:focus ~ label {
    transition: all .4s ease-in-out;
    // bottom: 100%;
    transform: translateY(-60%);
    
    & span { 
      transition: all .6s ease-in-out;
      font-size: 0.625rem;
      color: #272727;
      background: hsla(100%,100%,100%, 100%);
      z-index: 1;
      // background: red;
      padding: 0 4px;
      
      
    }
  }
}
</style>
