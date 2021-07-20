<template>
    <q-btn
      rounded
      flat
      no-caps
      no-wrap
      class="tw-bg-deep-lemon tw-py-1.5 tw-w-64"
    >
      <span class="tw-text-white tw-font-medium tw-text-2xl">
        {{text}}
      </span>
    </q-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
