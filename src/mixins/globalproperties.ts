import { Component, Vue } from 'vue-property-decorator'
import AmShortInfo1 from '../types/amshortinfo1'
import AmShortInfo2 from '../types/amshortinfo2'
import AmShortInfo3and4 from '../types/amshortinfo3and4'
import AmShortInfo5 from '../types/amshortinfo5'
import AmShortInfo6 from '../types/amshortinfo6'
import AmShortInfo7 from '../types/amshortinfo7'
import AmShortInfo8 from '../types/amshortinfo8'
import AmShortInfo9 from '../types/amshortinfo9'
import AmShortInfo10 from '../types/amshortinfo10'
import AmShortInfo11 from '../types/amshortinfo11'
import AmShortInfo12 from '../types/amshortinfo12'
import PublishInfo from '../types/publishinfo'
import NeedSubmitInfo from '@/types/needsubmitinfo'
import ReportInfo from '@/types/reportinfo'

declare module 'vue/types/vue' {
    interface Vue {
        // hosturl: string
        username: string
        usertype: string
        iswindwave: boolean
        istide: boolean
        istemperature: boolean
        showalltable: boolean
        coltime: Date
        colhour: number
        needsubmit: NeedSubmitInfo
        amshortfakedata: boolean[]
        amshortvalid: boolean[]
        amshorttable1: AmShortInfo1[]
        amshorttable2: AmShortInfo2[]
        amshorttable3and4: AmShortInfo3and4[]
        amshorttable5: AmShortInfo5[]
        amshorttable6: AmShortInfo6[]
        amshorttable7: AmShortInfo7[]
        amshorttable8: AmShortInfo8[]
        amshorttable9: AmShortInfo9[]
        amshorttable10: AmShortInfo10[]
        amshorttable11: AmShortInfo11[]
        amshorttable12: AmShortInfo12[]
        publishmetainfo: PublishInfo[]
        reportlist: ReportInfo[]
    }
}
@Component
export default class GlobalProperties extends Vue {
    // public hosturl = 'http://123.234.129.234:10001/WebService/WebServices.asmx/'
    // public hosturl = 'http://localhost:7652/WebServices.asmx/'
    // public hosturl = 'http://localhost:7653/WebServices.asmx/'
    get username() { return this.$store.state.username }
    set username(value: string) { this.$store.dispatch('setUserName', value) }
    get usertype() { return this.$store.state.usertype }
    set usertype(value: string) { this.$store.dispatch('setUserType', value) }
    get iswindwave() { return this.$store.state.iswindwave }
    set iswindwave(value: boolean) { this.$store.dispatch('setIsWindWave', value) }
    get istide() { return this.$store.state.istide }
    set istide(value: boolean) { this.$store.dispatch('setIsTide', value) }
    get istemperature() { return this.$store.state.istemperature }
    set istemperature(value: boolean) { this.$store.dispatch('setIsTemperature', value) }
    get showalltable() { return this.$store.state.showalltable }
    set showalltable(value: boolean) { this.$store.dispatch('setShowAllTable', value) }
    get coltime() { return this.$store.state.coltime }
    set coltime(value: Date) { this.$store.dispatch('setColtime', value) }
    get colhour() { return this.$store.state.colhour }
    set colhour(value: number) { this.$store.dispatch('setColhour', value) }
    get needsubmit() { return this.$store.state.needsubmit }
    set needsubmit(value: NeedSubmitInfo) { this.$store.dispatch('setNeedSubmit', value) }
    get amshortfakedata() { return this.$store.state.amshortfakedata }
    set amshortfakedata(value: boolean[]) { this.$store.dispatch('setAmShortFakeData', value) }
    get amshortvalid() { return this.$store.state.amshortvalid }
    set amshortvalid(value: boolean[]) { this.$store.dispatch('setAmShortValid', value) }
    get amshorttable1() { return this.$store.state.amshorttable1 }
    set amshorttable1(value: AmShortInfo1[]) { this.$store.dispatch('setAmShortTable1', value) }
    get amshorttable2() { return this.$store.state.amshorttable2 }
    set amshorttable2(value: AmShortInfo2[]) { this.$store.dispatch('setAmShortTable2', value) }
    get amshorttable3and4() { return this.$store.state.amshorttable3and4 }
    set amshorttable3and4(value: AmShortInfo3and4[]) { this.$store.dispatch('setAmShortTable3and4', value) }
    get amshorttable5() { return this.$store.state.amshorttable5 }
    set amshorttable5(value: AmShortInfo5[]) { this.$store.dispatch('setAmShortTable5', value) }
    get amshorttable6() { return this.$store.state.amshorttable6 }
    set amshorttable6(value: AmShortInfo6[]) { this.$store.dispatch('setAmShortTable6', value) }
    get amshorttable7() { return this.$store.state.amshorttable7 }
    set amshorttable7(value: AmShortInfo7[]) { this.$store.dispatch('setAmShortTable7', value) }
    get amshorttable8() { return this.$store.state.amshorttable8 }
    set amshorttable8(value: AmShortInfo8[]) { this.$store.dispatch('setAmShortTable8', value) }
    get amshorttable9() { return this.$store.state.amshorttable9 }
    set amshorttable9(value: AmShortInfo9[]) { this.$store.dispatch('setAmShortTable9', value) }
    get amshorttable10() { return this.$store.state.amshorttable10 }
    set amshorttable10(value: AmShortInfo10[]) { this.$store.dispatch('setAmShortTable10', value) }
    get amshorttable11() { return this.$store.state.amshorttable11 }
    set amshorttable11(value: AmShortInfo11[]) { this.$store.dispatch('setAmShortTable11', value) }
    get amshorttable12() { return this.$store.state.amshorttable12 }
    set amshorttable12(value: AmShortInfo12[]) { this.$store.dispatch('setAmShortTable12', value) }
    get publishmetainfo() { return this.$store.state.publishmetainfo }
    set publishmetainfo(value: PublishInfo[]) { this.$store.dispatch('setPublishMetaInfo', value) }
    get reportlist() { return this.$store.state.reportlist }
    set reportlist(value: ReportInfo[]) { this.$store.dispatch('setReportList', value) }
}
