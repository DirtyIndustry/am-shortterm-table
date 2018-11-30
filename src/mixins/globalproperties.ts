import { Component, Vue } from 'vue-property-decorator'
import AmShortInfo1 from '../types/amshortinfo1'
import AmShortInfo2 from '../types/amshortinfo2'
import AmShortInfo3and4 from '../types/amshortinfo3and4'
import AmShortInfo5 from '../types/amshortinfo5'

declare module 'vue/types/vue' {
    interface Vue {
        username: string
        usertype: string
        coltime: Date
        amshorttable1: AmShortInfo1[]
        amshorttable2: AmShortInfo2[]
        amshorttable3and4: AmShortInfo3and4[]
        amshorttable5: AmShortInfo5[]
    }
}
@Component
export default class GlobalProperties extends Vue {
  get username() { return this.$store.state.username }
  set username(value: string) { this.$store.dispatch('setUserName', value) }
  get usertype() { return this.$store.state.usertype }
  set usertype(value: string) { this.$store.dispatch('setUserType', value) }
  get coltime() { return this.$store.state.coltime }
  set coltime(value: Date) { this.$store.dispatch('setColtime', value) }
  get amshorttable1() { return this.$store.state.amshorttable1 }
  set amshorttable1(value: AmShortInfo1[]) { this.$store.dispatch('setAmShortTable1', value) }
  get amshorttable2() { return this.$store.state.amshorttable2 }
  set amshorttable2(value: AmShortInfo2[]) { this.$store.dispatch('setAmShortTable2', value) }
  get amshorttable3and4() { return this.$store.state.amshorttable3and4 }
  set amshorttable3and4(value: AmShortInfo3and4[]) { this.$store.dispatch('setAmShortTable3and4', value) }
  get amshorttable5() { return this.$store.state.amshorttable5 }
  set amshorttable5(value: AmShortInfo5[]) { this.$store.dispatch('setAmShortTable5', value) }
}
