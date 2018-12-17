<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">{{title}}</div>
        <el-form class="table-body border-left border-right border-bottom" label-width="60px" status-icon :model="this" :rules="rules" ref="form">
            <el-form-item class="table-body-row border-bottom" label="海浪：" prop="localupperstring">
                <el-input class="input" type="textarea" autosize placeholder="请输入内容" v-model="localupperstring" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
            </el-form-item>
            <el-form-item class="table-body-row" label="潮汐：" prop="locallowerstring">
                <el-input class="input" type="textarea" autosize placeholder="请输入内容" v-model="locallowerstring" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
            </el-form-item>
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!iNeedSubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo3and4 from '../types/amshortinfo3and4'
@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable3and4 extends Vue {
    @Prop({default: ''}) public upperstring!: string
    @Prop({default: ''}) public lowerstring!: string
    @Prop({default: ''}) public title!: string
    @Prop({default: false}) public iNeedSubmit!: boolean
    private myThis: any = this
    private localupperstring = ''
    private locallowerstring = ''
    private rules = {
        localupperstring: [{validator: this.validateWave, trigger: 'blur'}],
        locallowerstring: [{validator: this.validateTide, trigger: 'blur'}]
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
        if (this.iNeedSubmit === true && this.checkValidate() === true) {
            this.valueChange()
        }
    }
    public checkSubmit() {
        if (this.localupperstring !== this.upperstring
            || this.locallowerstring !== this.lowerstring
            || this.amshortfakedata[3] !== 0) {
            this.needSubmitChange(true)
        } else {
            this.needSubmitChange(false)
        }
    }
    @Watch('upperstring')
    private onUpperStringChanged(val: string, oldVal: string) {
        this.localupperstring = val
        this.checkSubmit()
        this.checkValidate()
    }
    @Watch('lowerstring')
    private onLowerStringChanged(val: string, oldVal: string) {
        this.locallowerstring = val
        this.checkSubmit()
        this.checkValidate()
    }

    @Emit('valueChange')
    private valueChange() {
        return [this.localupperstring, this.locallowerstring]
    }
    @Emit('needSubmitChange')
    private needSubmitChange(value: boolean) {
        return value
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
        if (this.title.includes('上午三')) {
            this.amshortvalid[3] = result
        } else if (this.title.includes('上午四')) {
            this.amshortvalid[4] = result
        }
        return result
    }
    private cancelClick() {
        this.localupperstring = this.upperstring
        this.locallowerstring = this.lowerstring
        this.checkSubmit()
    }
    private mounted() {
        this.localupperstring = this.upperstring
        this.locallowerstring = this.lowerstring
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
