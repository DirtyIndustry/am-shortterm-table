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
        <el-form class="table-body border-left border-right border-bottom" status-icon :model="localtable[0]" :rules="rules" ref="form">
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="WEATERSTATE">
                <el-input class="input" v-model="localtable[0].WEATERSTATE" placeholder="请输入天气状况" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="TEMPERATURE">
                <el-input class="input" v-model="localtable[0].TEMPERATURE" placeholder="请输入气温" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="WINDSPEED">
                <el-input class="input" v-model="localtable[0].WINDSPEED" placeholder="请输入风速" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="WINDDIRECTION">
                <el-input class="input" v-model="localtable[0].WINDDIRECTION" placeholder="请输入风向" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column">
                <el-form-item class="el-form-item" prop="WAVEHEIGHT">
                <el-input class="input" v-model="localtable[0].WAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table12needsubmit" @click="submitClick">提交</el-button>
            <div class="separator-horizontal"></div>
            <div class="fakedatadesc">{{fakedatadesc}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
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
    private rules = {
        WEATERSTATE: [{validator: this.validateWave, trigger: 'blur'}],
        TEMPERATURE: [{validator: this.validateWave, trigger: 'blur'}],
        WINDSPEED: [{validator: this.validateWave, trigger: 'blur'}],
        WINDDIRECTION: [{validator: this.validateWave, trigger: 'blur'}],
        WAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}]
    }
    private deepEqual = require('deep-equal')
    private get editable() {
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
    private get fakedatadesc() { return Utils.getFakeDataDesc(this.amshortfakedata[12]) }
    public submitClick() {
        if (this.needsubmit.table12needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(12, 'AmShortTable12', this.localtable, this.checkSubmit, '上午十二')
        }
    }
    @Watch('amshorttable12')
    private onAmShortTable12Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable12))
        this.checkSubmit()
        this.checkValidate()
    }
    private validateWave(rule: any, value: string, callback: any) {
        if (this.usertype !== 'fl') {
            callback()
        } else if (!value) {
            callback(new Error(' '))
        } else if (value === '-') {
            callback()
        } else {
            return callback()
        }
    }
    private checkValidate() {
        let result = true
        this.myThis.$refs.form.validate((valid: boolean) => {
            if (valid === false) {
                result = false
            }
        })
        this.amshortvalid[12] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.table12needsubmit = !this.deepEqual(this.amshorttable12, this.localtable)
        if (this.amshortfakedata[12] !== 0) {
            this.needsubmit.table12needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable12))
        this.checkSubmit()
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
    display: flex;
    width: 100%;
    height: 60px;
    flex-direction: row;
}
.table-body-row {
    flex: 1;
    width: 100%;
}
.el-form-item {
    height: 100%;
    width: 100%;
    margin: 0;
}
.el-form-item >>> .el-form-item__content{
    display: block;
    width: 100% !important;
}
.fakedatadesc {
    color: red;
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
    left: 5%;
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
