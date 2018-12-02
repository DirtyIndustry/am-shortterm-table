import Vue from 'vue'
import Vuex from 'vuex'
import AmShortFakeDataInfo from './types/amshortfakedatainfo'
import AmShortInfo1 from './types/amshortinfo1'
import AmShortInfo2 from './types/amshortinfo2'
import AmShortInfo3and4 from './types/amshortinfo3and4'
import AmShortInfo5 from './types/amshortinfo5'
import AmShortInfo6 from './types/amshortinfo6'
import AmShortInfo7 from './types/amshortinfo7'
import AmShortInfo8 from './types/amshortinfo8'
import AmShortInfo9 from './types/amshortinfo9'
import AmShortInfo10 from './types/amshortinfo10'
import AmShortInfo11 from './types/amshortinfo11'
import AmShortInfo12 from './types/amshortinfo12'
import PublishInfo from './types/publishinfo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    usertype: '',
    iswindwave: true,
    istide: true,
    istemperature: true,
    showalltable: false,
    coltime: new Date(new Date().toLocaleDateString()),
    amshortfakedata: new AmShortFakeDataInfo(),
    amshorttable1: [
      new AmShortInfo1(),
      new AmShortInfo1(),
      new AmShortInfo1(),
      new AmShortInfo1(),
      new AmShortInfo1(),
      new AmShortInfo1()
    ],
    amshorttable2: [
      new AmShortInfo2(),
      new AmShortInfo2(),
      new AmShortInfo2(),
      new AmShortInfo2(),
      new AmShortInfo2(),
      new AmShortInfo2()
    ],
    amshorttable3and4: [
      new AmShortInfo3and4()
    ],
    amshorttable5: [
      new AmShortInfo5()
    ],
    amshorttable6: [
      new AmShortInfo6(),
      new AmShortInfo6(),
      new AmShortInfo6(),
      new AmShortInfo6(),
      new AmShortInfo6(),
      new AmShortInfo6()
    ],
    amshorttable7: [
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7(),
      new AmShortInfo7()
    ],
    amshorttable8: [
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8(),
      new AmShortInfo8()
    ],
    amshorttable9: [
      new AmShortInfo9()
    ],
    amshorttable10: [
      new AmShortInfo10()
    ],
    amshorttable11: [
      new AmShortInfo11()
    ],
    amshorttable12: [
      new AmShortInfo12()
    ],
    publishmetainfo: [
      new PublishInfo()
    ]
  },
  mutations: {
    setusername(state, value: string): void {
      state.username = value
    },
    setusertype(state, value: string): void {
      state.usertype = value
    },
    setcoltime(state, value: Date): void {
      state.coltime = value
    },
    setamshortfakedata(state, value: AmShortFakeDataInfo): void {
      state.amshortfakedata = value
    },
    setamshorttable1(state, value: AmShortInfo1[]): void {
      state.amshorttable1 = value
    },
    setamshorttable2(state, value: AmShortInfo2[]): void {
      state.amshorttable2 = value
    },
    setamshorttable3and4(state, value: AmShortInfo3and4[]): void {
      state.amshorttable3and4 = value
    },
    setamshorttable5(state, value: AmShortInfo5[]): void {
      state.amshorttable5 = value
    },
    setamshorttable6(state, value: AmShortInfo6[]): void {
      state.amshorttable6 = value
    },
    setamshorttable7(state, value: AmShortInfo7[]): void {
      state.amshorttable7 = value
    },
    setamshorttable8(state, value: AmShortInfo8[]): void {
      state.amshorttable8 = value
    },
    setamshorttable9(state, value: AmShortInfo9[]): void {
      state.amshorttable9 = value
    },
    setamshorttable10(state, value: AmShortInfo10[]): void {
      state.amshorttable10 = value
    },
    setamshorttable11(state, value: AmShortInfo11[]): void {
      state.amshorttable11 = value
    },
    setamshorttable12(state, value: AmShortInfo12[]): void {
      state.amshorttable12 = value
    },
    setpublishmetainfo(state, value: PublishInfo[]): void {
      state.publishmetainfo = value
    },
    setiswindwave(state, value: boolean): void {
      state.iswindwave = value
    },
    setistide(state, value: boolean): void {
      state.istide = value
    },
    setistemperature(state, value: boolean): void {
      state.istemperature = value
    },
    setshowalltable(state, value: boolean): void {
      state.showalltable = value
    }
  },
  actions: {
    setUserName(context, username: string): void {
      context.commit('setusername', username)
    },
    setUserType(context, usertype: string): void {
      context.commit('setusertype', usertype)
    },
    setColtime(context, coltime: Date): void {
      context.commit('setcoltime', coltime)
    },
    setAmShortFakeData(context, value: AmShortFakeDataInfo): void {
      context.commit('setamshortfakedata', value)
    },
    setAmShortTable1(context, amshorttable1: AmShortInfo1[]): void {
      context.commit('setamshorttable1', amshorttable1)
    },
    setAmShortTable2(context, amshorttable2: AmShortInfo2[]): void {
      context.commit('setamshorttable2', amshorttable2)
    },
    setAmShortTable3and4(context, amshorttable3and4: AmShortInfo3and4[]): void {
      context.commit('setamshorttable3and4', amshorttable3and4)
    },
    setAmShortTable5(context, amshorttable5: AmShortInfo5[]): void {
      context.commit('setamshorttable5', amshorttable5)
    },
    setAmShortTable6(context, amshorttable6: AmShortInfo6[]): void {
      context.commit('setamshorttable6', amshorttable6)
    },
    setAmShortTable7(context, amshorttable7: AmShortInfo7[]): void {
      context.commit('setamshorttable7', amshorttable7)
    },
    setAmShortTable8(context, amshorttable8: AmShortInfo8[]): void {
      context.commit('setamshorttable8', amshorttable8)
    },
    setAmShortTable9(context, amshorttable9: AmShortInfo9[]): void {
      context.commit('setamshorttable9', amshorttable9)
    },
    setAmShortTable10(context, amshorttable10: AmShortInfo10[]): void {
      context.commit('setamshorttable10', amshorttable10)
    },
    setAmShortTable11(context, amshorttable11: AmShortInfo11[]): void {
      context.commit('setamshorttable11', amshorttable11)
    },
    setAmShortTable12(context, amshorttable12: AmShortInfo12[]): void {
      context.commit('setamshorttable12', amshorttable12)
    },
    setPublishMetaInfo(context, value: PublishInfo[]): void {
      context.commit('setpublishmetainfo', value)
    },
    setIsWindWave(context, value: boolean): void {
      context.commit('setiswindwave', value)
    },
    setIsTide(context, value: boolean): void {
      context.commit('setistide', value)
    },
    setIsTemperature(context, value: boolean): void {
      context.commit('setistemperature', value)
    },
    setShowAllTable(context, value: boolean): void {
      context.commit('setshowalltable', value)
    }
  }
})
