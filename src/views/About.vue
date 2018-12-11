<template>
  <div class="about">
    <h1>预报单制作</h1>
    <p>{{text}}</p>
    <div v-for="(item, index) in reportlist" :key="index">
      <ReportItem :report="item"></ReportItem>
      <div class="separator-vertical"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import ReportItem from '@/components/ReportItem.vue'

@Component({
  components: {
    ReportItem
  },
  mixins: [GlobalProperties]
})
export default class About extends Vue {
  private myThis: any = this
  private text: string = ''
  private created() {
    console.log('about page created.')
    const path = require('path')
    const fs = require('fs')
    fs.readFile('reportlist.config.json', 'utf-8', (err: any, data: any) => {
      if (err) {
        console.error(err)
      } else {
        console.log(data)
      }
    })
  }
  private activated() {
    console.log('about page activated.')
    for (const item of this.needsubmit) {
      if (item === true) {
        this.text = 'Need Submit!'
      }
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.separator-vertical {
  height: 10px;
  width: 100%;
}
</style>
