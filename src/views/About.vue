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
import ReportInfo from '@/types/reportinfo'

@Component({
  components: {
    ReportItem
  },
  mixins: [GlobalProperties]
})
export default class About extends Vue {
  private myThis: any = this
  private text: string = ''
  private configloaded: boolean = false
  @Watch('reportlist')
  private onReportList(val: ReportInfo[], oldVal: ReportInfo[]) {
    if (val) {
      this.checkReportStatus()
    }
  }
  private loadReportConfig() {
    Axios.get('reportlist.config.json')
    .then((res) => {
      this.reportlist = res.data
      this.configloaded = true
    })
    .catch((error) => {
      console.error(error)
    })
  }
  private checkReportStatus() {
    this.reportlist.forEach((report) => {
      report.datasource.forEach((num) => {
        switch (num) {
          case 0:
            console.log('填报信息')
            console.log(this.hasEmpty(this.publishmetainfo))
            // console.log(this.needsubmit.tablePublishMetaneedsubmit)
            // console.log(this.amshortvalid[num])
            break
          case 1:
            console.log('表单一')
            console.log(this.hasEmpty(this.amshorttable1))
            // console.log(this.needsubmit.table1needsubmit?'需要提交':'')
            // console.log(this.amshortvalid[num]?'':'数据不合规')
            break
          case 2:
            console.log('表单二')
            console.log(this.hasEmpty(this.amshorttable2))
            // console.log(this.needsubmit.table2needsubmit)
            // console.log(this.amshortvalid[num])
            break
          case 3:
            console.log('表单三')
            console.log(this.hasEmpty(this.amshorttable3and4))
            // console.log(this.needsubmit.table3needsubmit)
            // console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单四')
            console.log(this.needsubmit.table4needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单五')
            console.log(this.needsubmit.table5needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单六')
            console.log(this.needsubmit.table6needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单七')
            console.log(this.needsubmit.table7needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单八')
            console.log(this.needsubmit.table8needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单九')
            console.log(this.needsubmit.table9needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单十')
            console.log(this.needsubmit.table10needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单十一')
            console.log(this.needsubmit.table11needsubmit)
            console.log(this.amshortvalid[num])
            break
          case 4:
            console.log('表单十二')
            console.log(this.needsubmit.table12needsubmit)
            console.log(this.amshortvalid[num])
            break
        }
      })
    })
  }
  private hasEmpty(array: Array<any>) {
    let result = false
    array.forEach((obj: any) => {
      for(const key in obj) {
        if (obj[key] === '') {
          result = true
        }
      }
    })
    return result
  }
  private created() {
    console.log('about page created.')
    this.loadReportConfig()
  }
  private activated() {
    console.log('about page activated.')
    for (const item of this.needsubmit) {
      if (item === true) {
        this.text = 'Need Submit!'
      }
    }
    if (this.configloaded = true) {
      this.checkReportStatus()
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
