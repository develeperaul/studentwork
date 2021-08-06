<template>
  <q-page v-if="timeError">
    <div class="-m-content tw-relative tw-z-0">
      <div
        class=" tw-absolute bg-img"
        style="background-image: url(bg/bg-traininglist.svg);"
      >
      </div>
    </div>
    <div class="tw-text-center tw-relative tw-pt-6 ">
      <div
        @click="linkTraining"
        class="tw-absolute tw-left-0 tw-top-1 tw-transform tw-translate-y-1/2 "
      >
        <q-icon
          name="chevron_left"
          size="31px"
          color="white"
        />
        <span class="tw-align-middle tw-text-white tw--ml-2"> Назад </span>
      </div>
      <span class="tw-font-bold tw-text-white tw-text-2xl ">
        Урок
      </span>
    </div>
    <div
      class="tw-bg-white tw-min-h-full tw-relative tw-rounded-md tw-px-2 tw-mt-6 tw-mb-11"
      style="box-shadow: 0px 0px 48px 16px #F4AD4829; min-height: 70vh"
    >
      <TimeError />
    </div>
  </q-page>
  <q-page v-else>
    <q-video
      v-if="lessonItem "
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
import { mapGetters } from 'vuex';
import { QSpinnerPuff } from 'quasar';
import TimeError from 'components/TimeError.vue';


export default {
  name: 'TrainingItem',
  components: {
    TimeError
  },
  data () {
    return {
      model: null,
      timeError: false
    }
  },
  methods: {
    linkTraining () {
      this.$router.go(-1)
    },
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
      .catch((e) => {
        e == "TimeoutError: Request timed out" ? this.timeError = true : null
        this.$q.loading.hide();
      });

  },
  watch: {
    '$route.params.id' () {
      this.lessonList ? null : this.getLessonList()
      return this.getLessonItem().then(() => {

        this.$q.loading.hide()
      })
        .catch((e) => {
          e == "TimeoutError: Request timed out" ? this.timeError = true : null
          this.$q.loading.hide();
        });
    }
  }


}
</script>
<style lang="scss" scoped>
.bg-img {
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: top; */

  background-position-y: -40px;
  background-position-x: center;
  width: 100%;
  min-height: 100px;
  height: 242px;
  /* padding: 0 0 10px 0; */
}
</style>
