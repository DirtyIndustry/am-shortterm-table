<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午十一、海阳近岸海域潮汐预报</div>
        <div class="header-row-second border-bottom border-left border-right">
            <div class="right-column">
                <div class="header-column-second border-right">
                    <div class="header-column-second-row border-bottom">第一次高潮</div>
                    <div class="header-column-second-row border-bottom">
                        <div class="header-column-second-row border-right">时间</div>
                        <div class="header-column-second-row">潮位</div>
                    </div>
                    <div class="header-column-second-row">
                        <div class="header-column-second-row border-right">（h、min）</div>
                        <div class="header-column-second-row">（cm）</div>
                    </div>
                </div>
                <div class="header-column-second border-right">
                    <div class="header-column-second-row border-bottom">第一次低潮</div>
                    <div class="header-column-second-row border-bottom">
                        <div class="header-column-second-row border-right">时间</div>
                        <div class="header-column-second-row">潮位</div>
                    </div>
                    <div class="header-column-second-row">
                        <div class="header-column-second-row border-right">（h、min）</div>
                        <div class="header-column-second-row">（cm）</div>
                    </div>
                </div>
                <div class="header-column-second border-right">
                    <div class="header-column-second-row border-bottom">第二次高潮</div>
                    <div class="header-column-second-row border-bottom">
                        <div class="header-column-second-row border-right">时间</div>
                        <div class="header-column-second-row">潮位</div>
                    </div>
                    <div class="header-column-second-row">
                        <div class="header-column-second-row border-right">（h、min）</div>
                        <div class="header-column-second-row">（cm）</div>
                    </div>
                </div>
                <div class="header-column-second">
                    <div class="header-column-second-row border-bottom">第二次低潮</div>
                    <div class="header-column-second-row border-bottom">
                        <div class="header-column-second-row border-right">时间</div>
                        <div class="header-column-second-row">潮位</div>
                    </div>
                    <div class="header-column-second-row">
                        <div class="header-column-second-row border-right">（h、min）</div>
                        <div class="header-column-second-row">（cm）</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-body border-left border-right border-bottom">
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].FIRSTHIGHTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].FIRSTHIGHLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].FIRSTLOWTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].FIRSTLOWLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].SECONDHIGHTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].SECONDHIGHLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column border-right">
                <el-input class="input" v-model="localtable[0].SECONDLOWTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </div>
            <div class="content-column">
                <el-input class="input" v-model="localtable[0].SECONDLOWLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
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
import AmShortInfo11 from '../types/amshortinfo11'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable11 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo11()
    ]
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('amshorttable11')
    private onAmShortTable11Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable11))
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
        this.submitdisable = this.deepEqual(this.amshorttable11, this.localtable)
        if (this.amshortfakedata.AmShort11FakeData === true) {
            this.submitdisable = false
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable11))
        this.checkSubmit()
    }
    private submitClick() {
        Axios.post(this.hosturl + 'SetAmShortTableData',
            {tablenumber: 11, usertype: this.usertype, datajson: JSON.stringify(this.localtable)})
        .then((res) => {
            console.log(res)
            const resobj = JSON.parse(res.data.d)
            if (resobj.Success === true) {
                this.amshorttable11 = resobj.NewData
                this.amshortfakedata.AmShort11FakeData = resobj.NewFakeData
                this.checkSubmit()
                this.myThis.$notify({
                    title: '提交成功',
                    message: '上午十一表单数据提交成功',
                    type: 'success'
                })
            } else {
                this.myThis.$notify.error({
                    title: '提交失败',
                    dangerouslyUseHTMLString: true,
                    message: '<p>上午十一表单数据提交失败</p>'
                        + (resobj.Description === '' ? '' :  '<p>' + resobj.Description + '</p>')
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable11))
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
.header-row-second {
    height: 90px;
    width: 100%;
    font-size: 19px;
    font-weight: bold;
    flex-direction: row;
}
.header-column {
    height: 100%;
    min-width: 80px;
}
.header-column-second {
    flex: 1;
    height: 100%;
    min-width: 158px;
    flex-direction: column;
}
.header-column-second-row {
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: row;
}
.right-column {
    flex: 1;
    height: 100%;
}
.content-column {
    flex: 1;
    height: 100%;
    min-width: 79px;
}
.table-body {
    width: 100%;
    height: 60px;
    flex-direction: row;
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
