import Vue from 'vue'
import Vuex from 'vuex'
import AmShortInfo1 from './types/amshortinfo1'
import AmShortInfo2 from './types/amshortinfo2'
import AmShortInfo3and4 from './types/amshortinfo3and4'
import AmShortInfo5 from './types/amshortinfo5'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    usertype: '',
    coltime: new Date(),
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
    setamshorttable1(state, value: AmShortInfo1[]): void {
      state.amshorttable1 = value
    },
    setamshorttable2(state, value: AmShortInfo2[]): void {
      state.amshorttable2 = value
    },
    setamshorttable3and4(state, value: AmShortInfo3and4[]): void {
      state.amshorttable3and4 = value
    },
    setamshorttable5(state, value: AmShortTable5[]): void {
      state.amshorttable5 = value
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
    }
  }
})
