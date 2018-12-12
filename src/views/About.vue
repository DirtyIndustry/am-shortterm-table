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
      report.reportStatusDesc = ''
      report.datasource.forEach((num) => {
        switch (num) {
          case 0:
            console.log('填报信息')
            if (this.hasEmpty(this.publishmetainfo)) {
              report.reportStatusDesc += '填报信息有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.tablePublishMetaneedsubmit === true) {
              report.reportStatusDesc += '填报信息尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '填报信息有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 1:
            console.log('表单一')
            if (this.hasEmpty(this.amshorttable1)) {
              report.reportStatusDesc += '表单一有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table1needsubmit === true) {
              report.reportStatusDesc += '表单一尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单一有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 2:
            console.log('表单二')
            if (this.hasEmpty(this.amshorttable2)) {
              report.reportStatusDesc += '表单二有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table2needsubmit === true) {
              report.reportStatusDesc += '表单二尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单二有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 3:
            console.log('表单三')
            if (this.hasEmpty(this.amshorttable3and4)) {
              report.reportStatusDesc += '表单三、四有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table3needsubmit === true) {
              report.reportStatusDesc += '表单三尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单三有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单四')
            if (this.hasEmpty(this.amshorttable3and4)) {
              report.reportStatusDesc += '表单三、四有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table4needsubmit === true) {
              report.reportStatusDesc += '表单四尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单四有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单五')
            if (this.hasEmpty(this.amshorttable5)) {
              report.reportStatusDesc += '表单五有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table5needsubmit === true) {
              report.reportStatusDesc += '表单五尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单五有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单六')
            if (this.hasEmpty(this.amshorttable6)) {
              report.reportStatusDesc += '表单六有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table6needsubmit === true) {
              report.reportStatusDesc += '表单六尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单六有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单七')
            if (this.hasEmpty(this.amshorttable7)) {
              report.reportStatusDesc += '表单七有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table7needsubmit === true) {
              report.reportStatusDesc += '表单七尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单七有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单八')
            if (this.hasEmpty(this.amshorttable8)) {
              report.reportStatusDesc += '表单八有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table8needsubmit === true) {
              report.reportStatusDesc += '表单八尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单八有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单九')
            if (this.hasEmpty(this.amshorttable9)) {
              report.reportStatusDesc += '表单九有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table9needsubmit === true) {
              report.reportStatusDesc += '表单九尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单九有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单十')
            if (this.hasEmpty(this.amshorttable10)) {
              report.reportStatusDesc += '表单十有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table10needsubmit === true) {
              report.reportStatusDesc += '表单十尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单十有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单十一')
            if (this.hasEmpty(this.amshorttable11)) {
              report.reportStatusDesc += '表单十一有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table11needsubmit === true) {
              report.reportStatusDesc += '表单十一尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单十一有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
          case 4:
            console.log('表单十二')
            if (this.hasEmpty(this.amshorttable12)) {
              report.reportStatusDesc += '表单十二有空白数据，'
              report.reportStatus = 'notready'
            } else if (this.needsubmit.table12needsubmit === true) {
              report.reportStatusDesc += '表单十二尚未提交，'
              report.reportStatus = 'notready'
            } else if (this.amshortvalid[num]) {
              report.reportStatusDesc += '表单十二有数据不合规，'
              report.reportStatus = 'notready'
            }
            break
        }
      })
      report.reportStatusDesc = report.reportStatusDesc.substring(0, report.reportStatusDesc.length - 1)
    })
  }
  private hasEmpty(array: any[]) {
    let result = false
    array.forEach((obj: any) => {
      for (const key in obj) {
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
    if (this.configloaded === true) {
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
