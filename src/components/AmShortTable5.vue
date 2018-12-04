<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午五、预计未来24小时海浪、水温预报</div>
        <div class="body border-left border-right border-bottom">
            <div class="body-row">
                <div class="body-row-header">渤海</div>
                <div class="body-row-content">
                    <div class="two-words">有</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHLOWESTWAVE" placeholder="请输入最低浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="two-words">m 到</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHHIGHESTWAVE" placeholder="请输入最高浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="two-words">m 的</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHWAVETYPE" placeholder="请输入浪高类型" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">黄海北部</div>
                <div class="body-row-content">
                    <div class="two-words">有</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHNORTHLOWESTWAVE" placeholder="请输入最低浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="two-words">m 到</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHNORTHHIGHESTWAVE" placeholder="请输入最高浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="two-words">m 的</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHNORTHWAVETYPE" placeholder="请输入浪高类型" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">刁口海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDKSEAAREAWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDKSEAAREAWATERTEMPE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">黄河口海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWHHKSEAAREAWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWHHKSEAAREAWATERTEMP" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">广利港海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWGLGSEAAREAWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWGLGSEAAREAWATERTEMP" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">东营港海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDYGWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDYGWATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">新户海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWXHWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWXHWATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">埕口海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWCKWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-input class="body-row-content" v-model="localtable[0].EFWWCKWATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                </div>
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
import AmShortInfo5 from '../types/amshortinfo5'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable5 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo5()
    ]
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('amshorttable5')
    private onAmShortTable5Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable5))
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
        this.submitdisable = this.deepEqual(this.amshorttable5, this.localtable)
        if (this.amshortfakedata.AmShort5FakeData === true) {
            this.submitdisable = false
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable5))
        this.checkSubmit()
    }
    private submitClick() {
        Axios.post(this.hosturl + 'SetAmShortTableData',
            {tablenumber: 5, usertype: this.usertype, datajson: JSON.stringify(this.localtable)})
        .then((res) => {
            console.log(res)
            const resobj = JSON.parse(res.data.d)
            if (resobj.Success === true) {
                this.amshorttable5 = resobj.NewData
                this.amshortfakedata.AmShort5FakeData = resobj.NewFakeData
                this.checkSubmit()
                this.myThis.$notify({
                    title: '提交成功',
                    message: '上午五表单数据提交成功',
                    type: 'success'
                })
            } else {
                this.myThis.$notify.error({
                    title: '提交失败',
                    dangerouslyUseHTMLString: true,
                    message: '<p>上午五表单数据提交失败</p>'
                        + (resobj.Description === '' ? '' :  '<p>' + resobj.Description + '</p>')
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable5))
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
.body {
    width: 100%;
    height: 400px;
    flex-direction: column;
}
.body-row {
    flex: 1;
    width: 100%;
    flex-direction: row;
}
.body-row-header {
    width: 95px;
    height: 100%;
}
.body-row-content {
    flex: 1;
}
.one-word {
    width: 30px;
}
.two-words {
    width: 50px;
}
.four-words {
    width: 100px;
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
