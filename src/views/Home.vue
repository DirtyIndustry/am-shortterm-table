<template>
  <div class="home" v-loading.fullscreen.lock="isloading">
    <img alt="Vue logo" src="../assets/logo.png">
    <HeaderStrip @query="getData" @submitAll="submitAll"></HeaderStrip>
    <div class="separator-vertical"></div>
    <AmShortTable1 v-show="iswindwave | istemperature | showalltable" ref="table1"></AmShortTable1>
    <div class="separator-vertical"></div>
    <AmShortTable2 v-show="istide | showalltable" ref="table2"></AmShortTable2>
    <div class="separator-vertical"></div>
    <AmShortTable3and4 v-show="iswindwave | istide | showalltable"
      title="上午三、3天海洋水文气象预报综述"
      :upperstring="amshorttable3and4[0].METEOROLOGICALREVIEW"
      :lowerstring="amshorttable3and4[0].METEOROLOGICALREVIEWCX"
      :iNeedSubmit="needsubmit.table3needsubmit"
      @valueChange="table3changed"
      @needSubmitChange="table3submitchanged"
      ref="table3">
      </AmShortTable3and4>
    <div class="separator-vertical"></div>
    <AmShortTable3and4 v-show="iswindwave | istide | showalltable"
      title="上午四、24小时水文气象预报综述"
      :upperstring="amshorttable3and4[0].METEOROLOGICALREVIEW24HOUR"
      :lowerstring="amshorttable3and4[0].METEOROLOGICALREVIEW24HOURCX"
      :iNeedSubmit="needsubmit.table4needsubmit"
      @valueChange="table4changed"
      @needSubmitChange="table4submitchanged"
      ref="table4">
      </AmShortTable3and4>
    <div class="separator-vertical"></div>
    <AmShortTable5 v-show="iswindwave | istemperature | showalltable" ref="table5"></AmShortTable5>
    <div class="separator-vertical"></div>
    <AmShortTable6 v-show="istide | showalltable" ref="table6"></AmShortTable6>
    <div class="separator-vertical"></div>
    <AmShortTable7 v-show="iswindwave | showalltable" ref="table7"></AmShortTable7>
    <div class="separator-vertical"></div>
    <AmShortTable8 v-show="istide | showalltable" ref="table8"></AmShortTable8>
    <div class="separator-vertical"></div>
    <AmShortTable9 v-show="iswindwave | istemperature | showalltable" ref="table9"></AmShortTable9>
    <div class="separator-vertical"></div>
    <AmShortTable10 v-show="iswindwave | istemperature | showalltable" ref="table10"></AmShortTable10>
    <div class="separator-vertical"></div>
    <AmShortTable11 v-show="istide | showalltable" ref="table11"></AmShortTable11>
    <div class="separator-vertical"></div>
    <AmShortTable12 v-show="iswindwave | showalltable" ref="table12"></AmShortTable12>
    <div class="separator-vertical"></div>
    <PublishMetaInfo  ref="tablepubmeta"></PublishMetaInfo>
    <div class="separator-vertical"></div>
    <div class="separator-vertical"></div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Watch, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import HeaderStrip from '@/components/HeaderStrip.vue' // @ is an alias to /src
import AmShortTable1 from '@/components/AmShortTable1.vue'
import AmShortTable2 from '@/components/AmShortTable2.vue'
import AmShortTable3and4 from '@/components/AmShortTable3and4.vue'
import AmShortTable5 from '@/components/AmShortTable5.vue'
import AmShortTable6 from '@/components/AmShortTable6.vue'
import AmShortTable7 from '@/components/AmShortTable7.vue'
import AmShortTable8 from '@/components/AmShortTable8.vue'
import AmShortTable9 from '@/components/AmShortTable9.vue'
import AmShortTable10 from '@/components/AmShortTable10.vue'
import AmShortTable11 from '@/components/AmShortTable11.vue'
import AmShortTable12 from '@/components/AmShortTable12.vue'
import PublishMetaInfo from '@/components/PublishMetaInfo.vue'

@Component({
  components: {
    HeaderStrip,
    AmShortTable1,
    AmShortTable2,
    AmShortTable3and4,
    AmShortTable5,
    AmShortTable6,
    AmShortTable7,
    AmShortTable8,
    AmShortTable9,
    AmShortTable10,
    AmShortTable11,
    AmShortTable12,
    PublishMetaInfo
  },
  mixins: [GlobalProperties]
})
export default class Home extends Vue {
  private myThis: any = this
  @Watch('usertype')
  private onUserTypeChanged(val: boolean, oldVal: boolean) {
    this.setTypeShows()
  }
  private getData() {
    Utils.getData()
  }
  private setTypeShows() {
    switch (this.usertype) {
      case 'fl':
        this.iswindwave = true
        this.istide = false
        this.istemperature = false
        break
      case 'cx':
        this.iswindwave = false
        this.istide = true
        this.istemperature = false
        break
      case 'sw':
        this.iswindwave = false
        this.istide = false
        this.istemperature = true
        break
      default:
        this.iswindwave = true
        this.istide = true
        this.istemperature = true
        break
    }
  }
  private submitAll() {
    console.log('submit all recived.')
    this.myThis.$refs.table1.submitClick()
    this.myThis.$refs.table2.submitClick()
    this.myThis.$refs.table3.submitClick()
    this.myThis.$refs.table4.submitClick()
    this.myThis.$refs.table5.submitClick()
    this.myThis.$refs.table6.submitClick()
    this.myThis.$refs.table7.submitClick()
    this.myThis.$refs.table8.submitClick()
    this.myThis.$refs.table9.submitClick()
    this.myThis.$refs.table10.submitClick()
    this.myThis.$refs.table11.submitClick()
    this.myThis.$refs.table12.submitClick()
    this.myThis.$refs.tablepubmeta.submitClick()
  }
  private table3changed(arg: string[]) {
    const localtable = JSON.parse(JSON.stringify(this.amshorttable3and4))
    localtable[0].METEOROLOGICALREVIEW = arg[0]
    localtable[0].METEOROLOGICALREVIEWCX = arg[1]
    Utils.doSubmit(3, 'AmShortTable3and4', localtable, 2, this.myThis.$refs.table3.checkSubmit, '表单三')
  }
  private table4changed(arg: string[]) {
    const localtable = JSON.parse(JSON.stringify(this.amshorttable3and4))
    localtable[0].METEOROLOGICALREVIEW24HOUR = arg[0]
    localtable[0].METEOROLOGICALREVIEW24HOURCX = arg[1]
    Utils.doSubmit(4, 'AmShortTable3and4', localtable, 2, this.myThis.$refs.table4.checkSubmit, '表单四')
  }
  private table3submitchanged(arg: boolean) {
    this.needsubmit.table3needsubmit = arg
  }
  private table4submitchanged(arg: boolean) {
    this.needsubmit.table4needsubmit = arg
  }
}
</script>

<style scoped>
.separator-vertical {
  height: 20px;
}
</style>
