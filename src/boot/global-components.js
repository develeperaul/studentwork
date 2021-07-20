import  Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';


import { extend, localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';
import * as rules from 'vee-validate/dist/rules';

localize('ru', ru);

const needRules = [
  'required',
  'ext',
  'size',
  'min',
  'length',
];

needRules.forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('Icon', require('src/components/icon/Icon.vue').default);

Vue.component('Button', require('src/components/core/Button.vue').default);