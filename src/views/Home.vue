<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HeaderStrip @query="getData"></HeaderStrip>
    <div class="separator-vertical"></div>
    <AmShortTable1></AmShortTable1>
    <div class="separator-vertical"></div>
    <AmShortTable2></AmShortTable2>
    <div class="separator-vertical"></div>
    <AmShortTable3and4 title="上午三、3天海洋水文气象预报综述"
      :upperstring="amshorttable3and4[0].METEOROLOGICALREVIEW"
      :lowerstring="amshorttable3and4[0].METEOROLOGICALREVIEWCX"
      @valueChange="table3changed">
      </AmShortTable3and4>
    <div class="separator-vertical"></div>
    <AmShortTable3and4 title="上午四、24小时水文气象预报综述"
      :upperstring="amshorttable3and4[0].METEOROLOGICALREVIEW24HOUR"
      :lowerstring="amshorttable3and4[0].METEOROLOGICALREVIEW24HOURCX"
      @valueChange="table4changed">
      </AmShortTable3and4>
    <div class="separator-vertical"></div>
    <AmShortTable5></AmShortTable5>
    <div class="separator-vertical"></div>
    <AmShortTable6></AmShortTable6>
    <div class="separator-vertical"></div>
    <AmShortTable7></AmShortTable7>
    <div class="separator-vertical"></div>
    <AmShortTable8></AmShortTable8>
    <div class="separator-vertical"></div>
    <AmShortTable9></AmShortTable9>
    <div class="separator-vertical"></div>
    <AmShortTable10></AmShortTable10>
    <div class="separator-vertical"></div>
    <AmShortTable11></AmShortTable11>
    <div class="separator-vertical"></div>
    <AmShortTable12></AmShortTable12>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator'
import Axios from 'axios'
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
    AmShortTable12
  },
  mixins: [GlobalProperties]
})
export default class Home extends Vue {
  private cookie: string = ''
  private loadCookie() {
    if (document.cookie !== '') {
      const userinfo: string[] = document.cookie.split('UserInfo=')[1].split('&')
      for (const info of userinfo) {
        const pair: string[] = info.split('=')
        switch (pair[0]) {
          case 'UserName':
            this.username = pair[1]
            break
          case 'Type':
            this.usertype = pair[1]
            break
          default:
            break
        } // end-switch(pair[0])
      } // end-for(userinfo)
    } // end-if(cookie != '')
  } // end-loadCookie()
  private getData() {
    Axios.post('http://123.234.129.234:10001/WebService/WebServices.asmx/GetTableData', {date: this.coltime})
      .then((res) => {
        console.log(res)
        if (res.data.d !== '') {
          const resdata = JSON.parse(res.data.d)
          this.amshorttable1 = resdata.AmShort1Data
          this.amshorttable2 = resdata.AmShort2Data
          this.amshorttable3and4 = resdata.AmShort3and4Data
          this.amshorttable5 = resdata.AmShort5Data
          this.amshorttable6 = resdata.AmShort6Data
          this.amshorttable7 = resdata.AmShort7Data
          this.amshorttable8 = resdata.AmShort8Data
          this.amshorttable9 = resdata.AmShort9Data
          this.amshorttable10 = resdata.AmShort10Data
          this.amshorttable11 = resdata.AmShort11Data
          this.amshorttable12 = resdata.AmShort12Data
          this.publishmetainfo = resdata.PublishMetaInfo
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  private table3changed(arg: string[]) {
    this.amshorttable3and4[0].METEOROLOGICALREVIEW = arg[0]
    this.amshorttable3and4[0].METEOROLOGICALREVIEWCX = arg[1]
  }
  private table4changed(arg: string[]) {
    this.amshorttable3and4[0].METEOROLOGICALREVIEW24HOUR = arg[0]
    this.amshorttable3and4[0].METEOROLOGICALREVIEW24HOURCX = arg[0]
  }
  private created() {
    this.cookie = document.cookie
    // this.cookie = 'i\'m a cookie.'
    // this.usertype = 'fl'
    this.loadCookie()
    this.getData()
  }
}
</script>

<style scoped>
.separator-vertical {
  height: 20px;
}
</style>
