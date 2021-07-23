<template>
  <q-page >
        <q-video
        class="-m-content"
      src="https://www.youtube.com/embed/yl8hiSHuhiI"
    />
            <q-select
          borderless
          behavior="menu"
          v-model="model"
          :options="lessonList"
          class="-m-content"
          style="background-color: #F3F3F3"
          >
           <template v-slot:prepend>
              <Icon name="options" class="tw-ml-4"/>
          </template>
          <template v-slot:append>
                  <q-btn
                  round
                  
                  size="10px"
                  icon="chevron_right"
                  flat
                  class="tw-absolute tw-top-1/2 tw-right-3.5 tw-transform tw--translate-y-1/2 tw-rotate-90  tw-text-gray-darken" 
                  
                  />
          </template>
        </q-select>
    <div class="tw-mt-6">
      <span class="tw-text-gray-darken tw-font-bold tw-text-2xl tw-block tw-text-left">
        УРОК #{{lessonItem.number_of_lesson}} - {{lessonItem.name}}
      </span>
      <span class="tw-text-left tw-mt-3 tw-block">
        {{lessonItem.text}}
      </span>

    </div>

    <iframe
    width="560"
    height="315"
      src="https://www.youtube.com/embed/yl8hiSHuhiI"

>
</iframe>

    
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'TrainingItem',
  data(){
    return {
      model: null
    }
  },
  methods:{
    async getLessonItem(){
      await this.$store.dispatch("training/lessonItem", this.$route.params.id)
    },
    async getLessonList(){
      await await this.$store.dispatch("training/lessonList")
    }
  },
  computed:{
    ...mapGetters('training', ['lessonList', 'lessonItem'])
  },
  created(){
    this.lessonList ? null : this.getLessonList()
    this.getLessonItem()
  }
}
</script>
