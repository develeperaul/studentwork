<template>
  <q-page>
    <Background title="Тарифы" src="rate" />
    <div
      class="tw-flex tw-flex-col tw-items-center tw-mt-4 tw-mb-28"
      v-if="regionList !== null && importantList !== null"
    >
      <div class="tw-w-full region">
        <span> Регион </span>
        <q-select
          borderless
          v-model="modelRegion"
          behavior="menu"
          :options="regionList"
          class="tw-mt-2"
          style="
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px 1px;
            border-radius: 6px;
          "
        >
          <template v-slot:prepend>
            <Icon name="city" class="tw-ml-3.5" />
          </template>
          <template v-slot:append>
            <q-btn
              round
              size="10px"
              icon="chevron_right"
              flat
              class="
                tw-absolute
                tw-top-1/2
                tw-right-3.5
                tw-transform
                tw--translate-y-1/2
                tw-rotate-90
                tw-bg-deep-lemon-light
                tw-text-deep-lemon
              "
            />
          </template>
        </q-select>
      </div>
      <div class="tw-w-full tw-mt-6 important">
        <span> Что важно? </span>
        <q-select
          borderless
          v-model="modelImportant"
          :options="importantList"
          behavior="menu"
          class="tw-mt-2"
          style="
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 12px 1px;
            border-radius: 6px;
          "
        >
          <template v-slot:prepend>
            <Icon name="failed" class="tw-ml-3.5" />
          </template>
          <template v-slot:append>
            <q-btn
              round
              size="10px"
              icon="chevron_right"
              flat
              class="
                tw-absolute
                tw-top-1/2
                tw-right-3.5
                tw-transform
                tw--translate-y-1/2
                tw-rotate-90
                tw-bg-deep-lemon-light
                tw-text-deep-lemon
              "
            />
          </template>
        </q-select>
      </div>
      <Button
        v-if="modelRegion && modelImportant"
        text="Посмотреть"
        :to="{
          name: 'table',
          params: {
            region_id: modelRegion.id,
            important_id: modelImportant.id,
          },
        }"
        class="tw-mt-16"
      />
    </div>
  </q-page>
</template>

<script>
import Background from 'components/Background.vue';
import { mapGetters } from 'vuex';
import { QSpinnerPuff } from 'quasar';

export default {
  name: 'Rate',
  components: {
    Background,
  },
  data() {
    return {
      modelImportant: null,
      modelRegion: null,
    };
  },
  methods: {
    linkTable() {
      console.log('link');
      this.$router.push();
    },
    async getRegion() {
      this.showLoader();
      await this.$store.dispatch('rate/regionList');
      this.modelRegion = this.regionList[0];
    },
    async getImportant() {
      this.showLoader();
      await this.$store.dispatch('rate/importantList');
      this.modelImportant = this.importantList[0];
    },
    showLoader() {
      this.$q.loading.show({
        spinner: QSpinnerPuff,
        spinnerSize: 240,
      });
    },
  },
  computed: {
    ...mapGetters('rate', ['regionList', 'importantList']),
  },
  created() {
    this.importantList === null ? this.getImportant() : null;
    this.regionList === null
      ? this.getRegion().then(() => {
          this.$q.loading.hide();
        })
      : null;

    if (this.regionList && this.regionList.length)
      this.modelRegion = this.regionList[0];
    if (this.importantList && this.importantList.length)
      this.modelImportant = this.importantList[0];
  },
};
</script>
<style scoped lang="scss">
.selects {
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    border: 10px solid red;
    background-color: red;
  }
}
</style>
