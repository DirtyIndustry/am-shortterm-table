<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午十二、海阳万米海滩海水浴场风、浪预报</div>
        <div class="header-row border-bottom border-left border-right">
            <div class="right-column">
                <div class="content-column border-right">天气状况</div>
                <div class="content-column border-right">气温(℃)</div>
                <div class="content-column border-right">风速</div>
                <div class="content-column border-right">风向</div>
                <div class="content-column">浪高(m)</div>
            </div>
        </div>
        <div class="table-body border-left border-right border-bottom">
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].WEATERSTATE" placeholder="请输入天气状况" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].TEMPERATURE" placeholder="请输入气温" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].WINDSPEED" placeholder="请输入风速" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].WINDDIRECTION" placeholder="请输入风向" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column">
                <el-input class="input" v-model="localtable[0].WAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="submitdisable" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo12 from '../types/amshortinfo12'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable12 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo12()
    ]
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('amshorttable12')
    private onAmShortTable12Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable12))
        this.checkSubmit()
    }
    get editable() {
        if (this.coltime.getFullYear() < new Date().getFullYear()) {
            return false
        } else if (this.coltime.getMonth() < new Date().getMonth()) {
            return false
        } else if (this.coltime.getDate() < new Date().getDate()) {
            return false
        } else {
            return true
        }
    }
    private checkSubmit() {
        this.submitdisable = this.deepEqual(this.amshorttable12, this.localtable)
        if (this.amshortfakedata.AmShort12FakeData === true) {
            this.submitdisable = false
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable12))
        this.checkSubmit()
    }
    private submitClick() {
        Axios.post(this.hosturl + 'SetAmShortTableData',
            {tablenumber: 12, usertype: this.usertype, datajson: JSON.stringify(this.localtable)})
        .then((res) => {
            console.log(res)
            const resobj = JSON.parse(res.data.d)
            if (resobj.Success === true) {
                this.amshorttable12 = resobj.NewData
                this.amshortfakedata.AmShort12FakeData = resobj.NewFakeData
                this.checkSubmit()
                this.myThis.$notify({
                    title: '提交成功',
                    message: '上午十二表单数据提交成功',
                    type: 'success'
                })
            } else {
                this.myThis.$notify.error({
                    title: '提交失败',
                    dangerouslyUseHTMLString: true,
                    message: '<p>上午十二表单数据提交失败</p>'
                        + (resobj.Description === '' ? '' :  '<p>' + resobj.Description + '</p>')
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable12))
        this.checkSubmit()
    }
}
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    min-width: 800px;
    flex-direction: column;
}
.header-row {
    height: 30px;
    width: 100%;
    font-size: 19px;
    font-weight: bold;
    flex-direction: row;
}
.header-column {
    height: 100%;
    min-width: 100px;
    flex-direction: column;
}
.right-column {
    flex: 1;
    height: 100%;
}
.content-column {
    flex: 1;
    height: 100%;
    min-width: 120px;
    flex-direction: column;
}
.table-body {
    width: 100%;
    height: 60px;
    flex-direction: row;
}
.table-body-row {
    flex: 1;
    width: 100%;
}
.border-bottom {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000;
}
.border-top {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #000;
}
.border-left {
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #000;
}
.border-right {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #000;
}
.input {
    width: 90%;
}
.button-row {
    height: 40px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: flex-start;
}
.separator-horizontal {
    width: 20px;
}
</style>
