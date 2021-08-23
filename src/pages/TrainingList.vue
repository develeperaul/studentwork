<template>
  <q-page>
    <div class="-m-content tw-relative tw-z-0">
      <div
        class="tw-absolute bg-img"
        style="background-image: url(bg/bg-traininglist.svg)"
      ></div>
    </div>
    <div class="env-t">
      <div class="tw-text-center tw-relative tw-pt-6">
        <div
          @click="linkTraining"
          class="tw-absolute tw-left-0 tw-top-1 tw-transform tw-translate-y-1/2"
        >
          <q-icon name="chevron_left" size="31px" color="white" />
          <span class="tw-align-middle tw-text-white tw--ml-2"> Назад </span>
        </div>
        <span class="tw-font-bold tw-text-white tw-text-2xl">
          Список уроков
        </span>
      </div>
    </div>
    <div
      class="
        tw-bg-white
        tw-min-h-full
        tw-relative
        tw-rounded-md
        tw-px-2
        tw-mt-6
        tw-mb-11
      "
      style="box-shadow: 0px 0px 48px 16px #f4ad4829; min-height: 70vh"
    >
      <TimeError v-if="timeError" />
      <div
        v-else
        v-for="item in lessonList"
        :key="item.id"
        class="tw-flex tw-justify-between tw-py-3 b-bottom"
      >
        <div class="tw-flex">
          <q-img
            :src="`https://sim.2apps.ru${item.img}`"
            height="52px"
            width="93px"
            spinner-color="primary"
            spinner-size="40px"
            img-class="tw-rounded-md "
            style="min-width: 93px"
            @click="linkVideo(item.id)"
          />
          <div class="tw-flex tw-flex-col tw-ml-2">
            <span class="tw-font-bold"
            @click="linkVideo(item.id)">{{ item.label }}</span>
            <span class="tw-text-sm tw-mt-1"
            @click="linkVideo(item.id)">{{ item.dlit }}</span>
          </div>
        </div>

        <div
          v-ripple.center
          class="relative-position botder tw-self-center tw-ml-2"
          style="border-radius: 50%"
          @click="linkVideo(item.id)"
        >
          <Icon name="play" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import { QSpinnerPuff } from 'quasar';
import TimeError from 'components/TimeError.vue';

export default {
  // name: 'PageName',
  components: {
    TimeError,
  },
  data() {
    return {
      timeError: false,
    };
  },
  methods: {
    linkTraining() {
      this.$router.push({ name: 'training' });
    },
    linkVideo(id) {
      this.$router.push({ name: 'trainingitem', params: { id: id } });
    },
    async getLessonList() {
      this.showLoader();
      await this.$store.dispatch('training/lessonList');
    },
    showLoader() {
      this.$q.loading.show({
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      });
    },
  },
  computed: {
    ...mapGetters('training', ['lessonList']),
  },
  created() {
    if (!this.lessonList) {
      this.getLessonList()
        .then(() => {
          this.$q.loading.hide();
        })
        .catch((e) => {
          e == 'TimeoutError: Request timed out'
            ? (this.timeError = true)
            : null;
          this.$q.loading.hide();
        });
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$q.loading.hide();
    next();
  },
};
</script>

<style scoped>
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

.b-bottom:not(:last-child) {
  border-bottom: 1px solid #fff1d7;
}
</style>
