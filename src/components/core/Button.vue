<template>
    <q-btn
      v-if="type==='button'"
      :to="to"
      rounded
      flat
      no-caps
      no-wrap
      :type="type"
      class="tw-bg-deep-lemon tw-w-64"
      style="padding: 6px 0"
    >
      <span class="tw-text-white tw-font-medium tw-text-2xl">
        {{text}}
      </span>
    </q-btn>

    <q-btn
      v-else
      rounded
      flat
      no-caps
      no-wrap
      :type="type"
      class="tw-bg-deep-lemon tw-w-64"
      style="padding: 6px 0"
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
    },
    type: {
      type: String,
      default: 'button'
    },
    to: {
      type: Object,
      required: false
    }
  },
  data () {
    return {}
  }
}
</script>
