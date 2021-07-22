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
  'email',
];

needRules.forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('Icon', require('src/components/icon/Icon.vue').default);

Vue.component('Button', require('src/components/core/Button.vue').default);
Vue.component('Input', require('src/components/core/Input.vue').default);
Vue.component('PhoneInput', require('src/components/core/PhoneInput.vue').default);
Vue.component('EmailInput', require('src/components/core/EmailInput.vue').default);


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);