<template>
  <div class="about" v-loading.fullscreen.lock="isloading">
    <h1>预报单制作</h1>
    <p>{{text}}</p>
    <ReportHeaderStrip :checkedAll="checkedAll" :isIndeterminate="isIndeterminate" @checkAllChange="checkAllChange" @generate="generateWord"></ReportHeaderStrip>
    <div class="separator-vertical"></div>
    <div v-for="(item, index) in reportlist" :key="index">
      <ReportItem :report="item" @selectChanged="singleSelectChanged"></ReportItem>
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
  import ReportHeaderStrip from '@/components/ReportHeaderStrip.vue'
  import ReportInfo from '@/types/reportinfo'

  @Component({
    components: {
      ReportItem,
      ReportHeaderStrip
    },
    mixins: [GlobalProperties]
  })
  export default class About extends Vue {
    private myThis: any = this
    private text: string = ''
    private configloaded: boolean = false
    private checkedAll: boolean = true
    private isIndeterminate: boolean = false
    @Watch('isloading')
    private onIsLoadingChanged(val: boolean, oldVal: boolean) {
      if (val === false) {
        this.checkReportStatus()
      }
    }
    private loadReportConfig() {
      Axios.get('reportlist.config.json')
        .then((res) => {
          this.reportlist = res.data
          this.requestReportStatus()
          this.configloaded = true
        })
        .catch((error) => {
          console.error(error)
        })
    }
    private requestReportStatus() {
      Axios.post(Utils.hosturl + 'GetAmShortReportStatus',
        { publishdate: this.coltime, publishhour: this.colhour, datajson: JSON.stringify(this.reportlist) })
        .then((res) => {
          this.reportlist = JSON.parse(res.data.d)
          this.checkReportStatus()
        })
        .catch((error) => {
          console.error(error)
        })
    }
    private checkReportStatus() {
      this.reportlist.forEach((report) => {
        if (report.reportStatus !== 'done') {
          report.reportStatusDesc = ''
          report.datasource.forEach((num) => {
            switch (num) {
              case 0:
                // console.log('填报信息')
                if (this.hasEmpty(this.publishmetainfo)) {
                  report.reportStatusDesc += '填报信息有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '填报信息尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '填报信息有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 1:
                // console.log('表单一')
                if (this.hasEmpty(this.amshorttable1)) {
                  report.reportStatusDesc += '表单一有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单一尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单一有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 2:
                // console.log('表单二')
                if (this.hasEmpty(this.amshorttable2)) {
                  report.reportStatusDesc += '表单二有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单二尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单二有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 3:
                // console.log('表单三')
                if (this.table3HasEmpty()) {
                  report.reportStatusDesc += '表单三有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单三尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单三有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 4:
                // console.log('表单四')
                if (this.table4HasEmpty()) {
                  report.reportStatusDesc += '表单四有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单四尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单四有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 5:
                // console.log('表单五')
                if (this.hasEmpty(this.amshorttable5)) {
                  report.reportStatusDesc += '表单五有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单五尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单五有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 6:
                // console.log('表单六')
                if (this.hasEmpty(this.amshorttable6)) {
                  report.reportStatusDesc += '表单六有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单六尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单六有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 7:
                // console.log('表单七')
                if (this.hasEmpty(this.amshorttable7)) {
                  report.reportStatusDesc += '表单七有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单七尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单七有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 8:
                // console.log('表单八')
                if (this.hasEmpty(this.amshorttable8)) {
                  report.reportStatusDesc += '表单八有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单八尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单八有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 9:
                // console.log('表单九')
                if (this.hasEmpty(this.amshorttable9)) {
                  report.reportStatusDesc += '表单九有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单九尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单九有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 10:
                // console.log('表单十')
                if (this.hasEmpty(this.amshorttable10)) {
                  report.reportStatusDesc += '表单十有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单十尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单十有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 11:
                // console.log('表单十一')
                if (this.hasEmpty(this.amshorttable11)) {
                  report.reportStatusDesc += '表单十一有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单十一尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单十一有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
              case 12:
                // console.log('表单十二')
                if (this.hasEmpty(this.amshorttable12)) {
                  report.reportStatusDesc += '表单十二有空白数据，'
                  report.reportStatus = 'notready'
                } else if (this.amshortfakedata[num] === true) {
                  report.reportStatusDesc += '表单十二尚未提交，'
                  report.reportStatus = 'notready'
                } else if (!this.amshortvalid[num]) {
                  report.reportStatusDesc += '表单十二有数据不合规，'
                  report.reportStatus = 'notready'
                }
                break
            }
          })
          if (report.reportStatusDesc === '') {
            report.reportStatus = 'ready'
            report.reportStatusDesc = '等待提交制作'
          } else {
            report.reportStatusDesc = report.reportStatusDesc.substring(0, report.reportStatusDesc.length - 1)
          }
        }
      })
    }
    private hasEmpty(array: any[]) {
      let result = false
      const whitelist = ['FFAX', 'FTELEPHONE']
      array.forEach((obj: any) => {
        for (const key in obj) {
          if (obj[key] === '' && !whitelist.includes(key)) {
            result = true
          }
        }
      })
      return result
    }
    private table3HasEmpty() {
      if (this.amshorttable3and4[0].METEOROLOGICALREVIEW === ''
      || this.amshorttable3and4[0].METEOROLOGICALREVIEWCX === '') {
        return true
      }
      return false
    }
    private table4HasEmpty() {
      if (this.amshorttable3and4[0].METEOROLOGICALREVIEW24HOUR === ''
      || this.amshorttable3and4[0].METEOROLOGICALREVIEW24HOURCX === '') {
        return true
      }
      return false
    }
    private singleSelectChanged(val: boolean) {
      const initial = this.reportlist[0].selected
      this.isIndeterminate = false
      this.reportlist.forEach((report) => {
        if (report.selected !== initial) {
          this.checkedAll = false
          this.isIndeterminate = true
        }
      })
      if (this.isIndeterminate === false) {
        this.checkedAll = initial
      }
    }
    private checkAllChange(val: boolean) {
      this.checkedAll = val
      this.isIndeterminate = false
      this.reportlist.forEach((report) => {
        report.selected = val
      })
    }
    private generateWord() {
      Axios.post(Utils.hosturl + 'GenerateAmShortReport',
      {publishdate: this.coltime, publishhour: this.colhour, datajson: JSON.stringify(this.reportlist)})
      .then((res) => {
        console.log(res.data.d)
        if (res.data.d !== '') {
          this.reportlist = JSON.parse(res.data.d)
        }
      })
      .catch((error) => {
        console.error(error)
      })
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
        this.requestReportStatus()
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