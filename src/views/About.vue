<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{text}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'

@Component({
  mixins: [GlobalProperties]
})
export default class About extends Vue {
  private myThis: any = this
  private text: string = ''
  private created() {
    console.log('about page created.')
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

</style>
