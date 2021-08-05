<template>
  <q-page>
    <q-video
      class="-m-content"
      :src="`${lessonItem.url_youtube.replace('https://youtu.be/', 'https://www.youtube.com/embed/')}`"
    />

    <q-select
      borderless
      behavior="menu"
      v-model="model"
      :options="optionList"
      class="-m-content"
      style="background-color: #F3F3F3"
      @input="click"
    >

      <template
        v-if="lessonItem!==null"
        v-slot:selected
      >
        <span class="tw-text-sm tw-text-gray tw-mr-10 tw-flex tw-h-full tw-items-center">
          {{labelTo}}
        </span>
      </template>
      <template v-slot:prepend>
        <Icon
          name="options"
          class="tw-ml-4"
        />
      </template>
      <template v-slot:append>
        <q-btn
          round
          size="10px"
          icon="chevron_right"
          flat
          class="tw-absolute tw-top-1/2 tw-transform tw--translate-y-1/2 tw-rotate-90  tw-text-gray-darken "
          style="right: 14px"
        />
      </template>
    </q-select>
    <div
      v-if="lessonItem!==null"
      class="tw-mt-6"
    >
      <span class="tw-text-gray-darken tw-font-bold tw-text-2xl tw-block tw-text-left">
        УРОК #{{lessonItem.number_of_lesson}} - {{lessonItem.name}}
      </span>
      <span class="tw-text-left tw-mt-3 tw-block">
        {{lessonItem.text}}
      </span>

    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { QSpinnerPuff } from 'quasar'

export default {
  name: 'TrainingItem',
  data () {
    return {
      model: null
    }
  },
  methods: {
    click (val) {
      this.$router.push({ name: "trainingitem", params: { id: val.id } })

    },
    async getLessonItem () {
      this.$q.loading.show(
        {
          spinner: QSpinnerPuff,
          spinnerSize: 240,
          delay: 400
        }
      )

      await this.$store.dispatch("training/lessonItem", this.$route.params.id)
    },
    async getLessonList () {
      await this.$store.dispatch("training/lessonList")
    }
  },
  computed: {
    ...mapGetters('training', ['lessonList', 'lessonItem']),
    labelTo () {
      if (this.lessonList && this.lessonItem) {
        const text = this.lessonList.find(item => item.number_of_lesson == (+this.lessonItem.number_of_lesson + 1))
        const textFrom = this.lessonList.find(item => item.number_of_lesson == (+this.lessonItem.number_of_lesson - 1))
        return text ? `Далее: Урок #${text.number_of_lesson} ${text.label}` : `Предыдущий: Урок #${textFrom.number_of_lesson} ${textFrom.label}`
      }
    },
    optionList () {
      if (this.lessonList && this.lessonItem) {
        return this.lessonList.filter(item => item.id !== this.lessonItem.id)
      }
    }
  },
  created () {
    this.lessonList ? null : this.getLessonList()

    this.getLessonItem().then(() => {

      this.$q.loading.hide()
    })

  },
  watch: {
    '$route.params.id' () {
      this.lessonList ? null : this.getLessonList()
      return this.getLessonItem()
    }
  }


}
</script>
