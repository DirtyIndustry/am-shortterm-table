import Vue from 'vue'
import Axios from 'axios'
import store from '../store'

// const hosturl = 'http://123.234.129.234:10001/WebService/WebServices.asmx/'
const hosturl = 'http://localhost:7652/WebServices.asmx/'

const doSubmit = (tablenumber: number,
                  globaldataname: string,
                  localdata: any,
                  fakeindex: number,
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
            fakelist[fakeindex] = resobj.NewFakeData
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
    public readonly doSubmit: (tablenumber: number,
                               globaldataname: string,
                               localdata: any,
                               fakeindex: number,
                               check: () => void,
                               title: string) => void
    constructor() {
        this.hosturl = hosturl
        this.doSubmit = doSubmit
    }
}
export default new Utils()
