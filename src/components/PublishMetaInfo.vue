<template>
    <el-form class="container" status-icon :model="localtable[0]" :rules="rules" ref="form">
        <div class="row-upper">
            <div class="separator-horizontal"></div>
            <div>发布单位：</div>
            <el-form-item class="el-form-item" prop="FRELEASEUNIT">
            <el-input class="input" v-model="localtable[0].FRELEASEUNIT" placeholder="请输入发布单位" :disabled="!timeeditable" @change="checkSubmit"></el-input>
            </el-form-item>
            <div class="separator-horizontal"></div>
            <div>预报值班：</div>
            <el-form-item class="el-form-item" prop="ZHIBANTEL">
            <el-input class="input" v-model="localtable[0].ZHIBANTEL" placeholder="请输入值班电话" :disabled="!timeeditable" @change="checkSubmit"></el-input>
            </el-form-item>
            <div class="separator-horizontal"></div>
        </div>
        <div class="row-upper">
            <div class="separator-horizontal"></div>
            <div>发布时间：</div>
            <el-input class="input" v-model="publishdatestring" placeholder="请输入发送时间" disabled ></el-input>
            <div class="separator-horizontal"></div>
            <div>预报发送：</div>
            <el-form-item class="el-form-item" prop="SENDTEL">
            <el-input class="input" v-model="localtable[0].SENDTEL" placeholder="请输入发送电话" :disabled="!timeeditable" @change="checkSubmit"></el-input>
            </el-form-item>
            <div class="separator-horizontal"></div>
        </div>
        <div class="reporter-block border-top">
            <div class="separator-horizontal"></div>
            <div class="reporter-column">
                <div class="reporter-row">
                    <div class="reporter-header">海浪预报员：</div>
                    <el-form-item class="el-form-item" prop="FWAVEFORECASTER">
                    <el-select class="reporter-select" v-model="localtable[0].FWAVEFORECASTER" placeholder="请选择" :disabled="!timeeditable || !iswindwave" @change="checkSubmit">
                        <el-option v-for="(item, index) in reporterwavelist" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                    </el-form-item>
                </div>
                <div class="reporter-row">
                    <div class="reporter-header">海浪预报员电话：</div>
                    <el-form-item class="el-form-item" prop="FWAVEFORECASTERTEL">
                    <el-input class="input" v-model="localtable[0].FWAVEFORECASTERTEL" placeholder="请输入海浪预报员电话" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="separator-horizontal border-right"></div>
            <div class="separator-horizontal"></div>
            <div class="reporter-column">
                <div class="reporter-row">
                    <div class="reporter-header">潮汐预报员：</div>
                    <el-form-item class="el-form-item" prop="FTIDALFORECASTER">
                    <el-select class="reporter-select" v-model="localtable[0].FTIDALFORECASTER" placeholder="请选择" :disabled="!timeeditable || !istide" @change="checkSubmit">
                        <el-option v-for="(item, index) in reportertidelist" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                    </el-form-item>
                </div>
                <div class="reporter-row">
                    <div class="reporter-header">潮汐预报员电话：</div>
                    <el-form-item class="el-form-item" prop="FTIDALFORECASTERTEL">
                    <el-input class="input" v-model="localtable[0].FTIDALFORECASTERTEL" placeholder="请输入潮汐预报员电话" :disabled="!timeeditable || !istide" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="separator-horizontal border-right"></div>
            <div class="separator-horizontal"></div>
            <div class="reporter-column">
                <div class="reporter-row">
                    <div class="reporter-header">水温预报员：</div>
                    <el-form-item class="el-form-item" prop="FWATERTEMPERATUREFORECASTER">
                    <el-select class="reporter-select" v-model="localtable[0].FWATERTEMPERATUREFORECASTER" placeholder="请选择" :disabled="!timeeditable || !istemperature" @change="checkSubmit">
                        <el-option v-for="(item, index) in reportertemperaturelist" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                    </el-form-item>
                </div>
                <div class="reporter-row">
                    <div class="reporter-header">水温预报员电话：</div>
                    <el-form-item class="el-form-item" prop="FWATERTEMPERATUREFORECASTERTEL">
                    <el-input class="input" v-model="localtable[0].FWATERTEMPERATUREFORECASTERTEL" placeholder="请输入水温预报员电话" :disabled="!timeeditable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="separator-horizontal"></div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.tablePublishMetaneedsubmit" @click="submitClick">提交</el-button>
        </div>
    </el-form>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import PublishInfo from '../types/publishinfo'

@Component({
    mixins: [GlobalProperties]
})
export default class PublishMetaInfo extends Vue {
    private myThis: any = this
    private localtable = [
        new PublishInfo()
    ]
    private reporterwavelist = [
        'HBY2006005',
        'HBY2006006',
        'HBY2006007',
        'HBY2006008',
        'HBY2006010',
        'HBY2006014',
        'HBY2006019',
        'HBY2006031',
        'HBY2006033',
        'HBY2006035',
        'HBY2006036',
        'HBY2006039'
    ]
    private reportertidelist = [
        'HBY2006004',
        'HBY2006009',
        'HBY2006016',
        'HBY2006017',
        'HBY2006018',
        'HBY2006022',
        'HBY2006024',
        'HBY2006027',
        'HBY2006028',
        'HBY2006030',
        'HBY2006032'
    ]
    private reportertemperaturelist = [
        'HBY2006004',
        'HBY2006009',
        'HBY2006016',
        'HBY2006017',
        'HBY2006018',
        'HBY2006022',
        'HBY2006024',
        'HBY2006027',
        'HBY2006028',
        'HBY2006030',
        'HBY2006032'
    ]
    private rules = {
        FRELEASEUNIT: [{validator: this.validateUnit, trigger: 'blur'}],
        ZHIBANTEL: [{validator: this.validateZHIBANTEL, trigger: 'blur'}],
        SENDTEL: [{validator: this.validateSENDTEL, trigger: 'blur'}],
        FWAVEFORECASTER: [{validator: this.validateWave, trigger: 'blur'}],
        FTIDALFORECASTER: [{validator: this.validateTide, trigger: 'blur'}],
        FWATERTEMPERATUREFORECASTER: [{validator: this.validateTemp, trigger: 'blur'}],
        FWAVEFORECASTERTEL: [{validator: this.validateWaveTel, trigger: 'blur'}],
        FTIDALFORECASTERTEL: [{validator: this.validateTideTel, trigger: 'blur'}],
        FWATERTEMPERATUREFORECASTERTEL: [{validator: this.validateTempTel, trigger: 'blur'}]
    }
    private deepEqual = require('deep-equal')
    private get publishdatestring(): string {
        this.localtable[0].PUBLISHDATE = new Date(this.localtable[0].PUBLISHDATE)
        return this.localtable[0].PUBLISHDATE.getFullYear() + '年'
            + (this.localtable[0].PUBLISHDATE.getMonth() + 1) + '月'
            + this.localtable[0].PUBLISHDATE.getDate() + '日'
            + this.localtable[0].PUBLISHHOUR + '时'
    }
    private get timeeditable() {
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
        if (this.needsubmit.tablePublishMetaneedsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(0, 'PublishMetaInfo', this.localtable, this.checkSubmit, '填报信息')
        }
    }
    @Watch('publishmetainfo')
    private onPublishMetaInfoChanged(val: PublishInfo[], oldVal: PublishInfo[]) {
        this.setPubDateTime(val)
        this.localtable = JSON.parse(JSON.stringify(val))
        this.localtable[0].PUBLISHDATE = this.coltime
        this.checkSubmit()
        this.checkValidate()
    }
    @Watch('coltime')
    private onColtimeChanged(val: Date, oldVal: Date) {
        if (val) {
            this.localtable[0].PUBLISHDATE = val
        }
    }
    @Watch('colhour')
    private onColhourChanged(val: number, oldVal: number) {
        if (val) {
            this.localtable[0].PUBLISHHOUR = val.toString()
            this.checkSubmit()
        }
    }
    private validateUnit(rule: any, value: string, callback: any) {
        if (this.localtable[0].FRELEASEUNIT === '') {
            callback(new Error('发布单位不能为空'))
        } else {
            return callback()
        }
    }
    private validateZHIBANTEL(rule: any, value: string, callback: any) {
        if (this.localtable[0].ZHIBANTEL === '') {
            callback(new Error('电话号码不能为空'))
        } else if (value === '-') {
            callback()
        } else if (!this.isTel(this.localtable[0].ZHIBANTEL)) {
            callback(new Error('电话号码格式不正确'))
        } else {
            return callback()
        }
    }
    private validateSENDTEL(rule: any, value: string, callback: any) {
        if (this.localtable[0].SENDTEL === '') {
            callback(new Error('电话号码不能为空'))
        } else if (value === '-') {
            callback()
        } else if (!this.isTel(this.localtable[0].SENDTEL)) {
            callback(new Error('电话号码格式不正确'))
        } else {
            return callback()
        }
    }
    private validateWave(rule: any, value: string, callback: any) {
        if (this.usertype !== 'fl') {
            callback()
        } else if (!value) {
            callback(new Error('请选择海浪预报员'))
        } else if (value === '-') {
            callback()
        } else {
            return callback()
        }
    }
    private validateTide(rule: any, value: string, callback: any) {
        if (this.usertype !== 'cx') {
            callback()
        } else if (!value) {
            callback(new Error('请选择潮汐预报员'))
        } else if (value === '-') {
            callback()
        } else {
            return callback()
        }
    }
    private validateTemp(rule: any, value: string, callback: any) {
        if (this.usertype !== 'sw') {
            callback()
        } else if (!value) {
            callback(new Error('请选择水温预报员'))
        } else if (value === '-') {
            callback()
        } else {
            return callback()
        }
    }
    private validateWaveTel(rule: any, value: string, callback: any) {
        if (this.usertype !== 'fl') {
            callback()
        } else if (!value) {
            callback(new Error('电话号码不能为空'))
        } else if (value === '-') {
            callback()
        } else if (!this.isTel(value)) {
            callback(new Error('电话号码格式不正确'))
        } else {
            return callback()
        }
    }
    private validateTideTel(rule: any, value: string, callback: any) {
        if (this.usertype !== 'cx') {
            callback()
        } else if (!value) {
            callback(new Error('电话号码不能为空'))
        } else if (value === '-') {
            callback()
        } else if (!this.isTel(value)) {
            callback(new Error('电话号码格式不正确'))
        } else {
            return callback()
        }
    }
    private validateTempTel(rule: any, value: string, callback: any) {
        if (this.usertype !== 'sw') {
            callback()
        } else if (!value) {
            callback(new Error('电话号码不能为空'))
        } else if (value === '-') {
            callback()
        } else if (!this.isTel(value)) {
            callback(new Error('电话号码格式不正确'))
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
        this.amshortvalid[0] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.tablePublishMetaneedsubmit = !this.deepEqual(this.publishmetainfo, this.localtable)
        if (this.amshortfakedata[0] === true) {
            this.needsubmit.tablePublishMetaneedsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.publishmetainfo))
        this.checkSubmit()
    }
    private setPubDateTime(publishmetainfo: PublishInfo[]) {
        publishmetainfo[0].PUBLISHDATE = this.coltime
        if (publishmetainfo[0].PUBLISHHOUR !== '') {
            this.colhour = Number(publishmetainfo[0].PUBLISHHOUR)
        } else {
            publishmetainfo[0].PUBLISHHOUR = this.colhour.toString()
        }
    }
    private isTel(value: string): boolean {
        let result = false
        const fix = /^(0\d{2,3}-?)?\d{7,8}$/
        const mobile = /^(\(?(\+86|0086)\)?)?1\d{10}$/
        if (fix.test(value) === true) {
            result = true
        } else if (mobile.test(value) === true) {
            result = true
        }
        return result
    }
    private mounted() {
        this.setPubDateTime(this.publishmetainfo)
        this.localtable = JSON.parse(JSON.stringify(this.publishmetainfo))
        this.localtable[0].PUBLISHDATE = this.coltime
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
    display: flex;
    min-width: 800px;
    max-width: 1050px;
    flex-direction: column;
    align-items: flex-start;
}
.row-upper {
    height: 60px;
    flex-direction: row;
}
.reporter-block {
    height: 120px;
    flex-direction: row;
}
.reporter-column {
    height: 100%;
    flex: 1;
    flex-direction: column;
}
.reporter-row {
    width: 100%;
    flex: 1;
    flex-direction: row;
}
.reporter-header {
    width: 110px;
    justify-content: flex-start;
    font-size: 13px;
}
.el-form-item {
    height: 100%;
    flex: 1;
    margin: 0;
}
.el-form-item >>> .el-form-item__content{
    display: block;
    width: 100% !important;
}
.separator-horizontal {
    height: 80%;
    width: 10px;
}
.border-top {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #000;
}
.border-bottom {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000;
}
.border-right {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #000;
}
.input {
    flex: 1;
}
.reporter-select {
    flex: 1;
}
.button-row {
    height: 40px;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: flex-start;
}
</style>
