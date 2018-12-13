import Vue from 'vue'
import Axios from 'axios'
import store from '../store'

// const hosturl = 'http://123.234.129.234:10001/WebService/WebServices.asmx/'
const hosturl = 'http://localhost:7652/WebServices.asmx/'

const loadCookie = () => {
    if (document.cookie !== '') {
        const userinfo: string[] = document.cookie.split('UserInfo=')[1].split('&')
        for (const info of userinfo) {
            const pair: string[] = info.split('=')
            switch (pair[0]) {
                case 'UserName':
                    store.dispatch('setUserName', pair[1])
                    break
                case 'Type':
                    store.dispatch('setUserType', pair[1])
                    break
                default:
                    break
            } // end-switch(pair[0])
        } // end-for(userinfo)
    } // end-if(cookie != '')
}

const getData = () => {
    store.dispatch('setIsLoading', true)
    Axios.post(hosturl + 'GetAmShortTableData', { date: store.state.coltime })
        .then((res) => {
            console.log(res)
            if (res.data.d !== '') {
                const resdata = JSON.parse(res.data.d)
                store.dispatch('setAmShortFakeData', resdata.AmShortFakeData)
                store.dispatch('setAmShortTable1', resdata.AmShort1Data)
                store.dispatch('setAmShortTable2', resdata.AmShort2Data)
                store.dispatch('setAmShortTable3and4', resdata.AmShort3and4Data)
                store.dispatch('setAmShortTable5', resdata.AmShort5Data)
                store.dispatch('setAmShortTable6', resdata.AmShort6Data)
                store.dispatch('setAmShortTable7', resdata.AmShort7Data)
                store.dispatch('setAmShortTable8', resdata.AmShort8Data)
                store.dispatch('setAmShortTable9', resdata.AmShort9Data)
                store.dispatch('setAmShortTable10', resdata.AmShort10Data)
                store.dispatch('setAmShortTable11', resdata.AmShort11Data)
                store.dispatch('setAmShortTable12', resdata.AmShort12Data)
                store.dispatch('setPublishMetaInfo', resdata.PublishMetaInfo)
            }
            store.dispatch('setIsLoading', false)
        })
        .catch((error) => {
            console.log(error)
            store.dispatch('setIsLoading', false)
        })
}

const doSubmit = (tablenumber: number,
                  globaldataname: string,
                  localdata: any,
                  check: () => void,
                  title: string): void => {
    Axios.post(hosturl + 'SetAmShortTableData',
        { tablenumber, usertype: store.state.usertype, datajson: JSON.stringify(localdata) })
        .then((res) => {
            console.log(res)
            const resobj = JSON.parse(res.data.d)
            if (resobj.Success === true) {
                store.dispatch('set' + globaldataname, resobj.NewData)
                const fakelist = store.state.amshortfakedata
                fakelist[tablenumber] = resobj.NewFakeData
                store.dispatch('setAmShortFakeData', fakelist)
                check()
                Vue.prototype.$notify({
                    title: '提交成功',
                    message: title + '表单数据提交成功',
                    type: 'success'
                })
            } else {
                Vue.prototype.$notify.error({
                    title: '提交失败',
                    dangerouslyUseHTMLString: true,
                    message: '<p>' + title + '表单数据提交失败</p>'
                        + (resobj.Description === '' ? '' : '<p>' + resobj.Description + '</p>')
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

class Utils {
    public readonly hosturl: string
    public readonly loadCookie: () => void
    public readonly getData: () => void
    public readonly doSubmit: (tablenumber: number,
                               globaldataname: string,
                               localdata: any,
                               check: () => void,
                               title: string) => void
    constructor() {
        this.hosturl = hosturl
        this.loadCookie = loadCookie
        this.getData = getData
        this.doSubmit = doSubmit
    }
}
export default new Utils()
