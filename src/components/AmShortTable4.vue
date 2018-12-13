<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午四、24小时水文气象预报综述</div>
        <el-form class="table-body border-left border-right border-bottom" label-width="60px" status-icon :model="localtable[0]" :rules="rules" ref="form">
            <el-form-item class="table-body-row border-bottom" label="海浪：" prop="localupperstring">
                <el-input class="input" type="textarea" autosize placeholder="请输入内容" v-model="localtable[0].METEOROLOGICALREVIEW24HOUR" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </el-form-item>
            <el-form-item class="table-body-row" label="潮汐：" prop="locallowerstring">
                <el-input class="input" type="textarea" autosize placeholder="请输入内容" v-model="localtable[0].METEOROLOGICALREVIEW24HOURCX" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </el-form-item>
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table4needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo3and4 from '../types/amshortinfo3and4'
@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable4 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo3and4()
    ]
    private rules = {
        METEOROLOGICALREVIEW24HOUR: [{validator: this.validateWave, trigger: 'blur'}],
        METEOROLOGICALREVIEW24HOURCX: [{validator: this.validateTide, trigger: 'blur'}]
    }
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
    public submitClick() {
        if (this.needsubmit.table4needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(4, 'AmShortTable3and4', this.localtable, this.checkSubmit, '表单四')
        }
    }
    @Watch('amshorttable3and4')
    private onAmShortTable3and4Changed(val: AmShortInfo3and4[], oldVal: AmShortInfo3and4[]) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable3and4))
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
            callback()
        }
    }
    private validateTide(rule: any, value: string, callback: any) {
        if (this.usertype !== 'cx') {
            callback()
        } else if (!value) {
            callback(new Error(' '))
        } else if (value === '-') {
            callback()
        } else {
            callback()
        }
    }
    private checkValidate() {
        let result = true
        this.myThis.$refs.form.validate((valid: boolean) => {
            if (valid === false) {
                result = false
            }
        })
        this.amshortvalid[4] = result
        return result
    }
    private checkSubmit() {
        if (this.localtable[0].METEOROLOGICALREVIEW24HOUR !== this.amshorttable3and4[0].METEOROLOGICALREVIEW24HOUR
        || this.localtable[0].METEOROLOGICALREVIEW24HOURCX !== this.amshorttable3and4[0].METEOROLOGICALREVIEW24HOURCX
        || this.amshortfakedata[4] === true) {
            this.needsubmit.table4needsubmit = true
        } else {
            this.needsubmit.table4needsubmit = false
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable3and4))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable3and4))
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
.table-body {
    width: 100%;
    flex-direction: column;
}
.table-body-row {
    min-height: 50px;
    margin-bottom: 0;
}
.input {
    width: 99%;
}
.el-form-item >>> .el-form-item__content{
    display: block;
    width: 100% !important;
    margin-left: 0 !important;
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
