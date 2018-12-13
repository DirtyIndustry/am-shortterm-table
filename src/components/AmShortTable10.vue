<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午十、海阳海浪、水温预报</div>
        <el-form class="body border-left border-right border-bottom" status-icon :model="localtable[0]" :rules="rules" ref="form">
            
            <div class="body-row">
                <div class="body-row-content">
                    <div class="one-word"></div>
                    <div class="four-words">有</div>
                    <el-form-item class="el-form-item" prop="WAVELEVELONE">
                    <el-input class="body-row-content" v-model="localtable[0].WAVELEVELONE" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">&nbsp;&nbsp;米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;的&nbsp;&nbsp;</div>
                    <el-form-item class="el-form-item" prop="WAVELEVELTYPE">
                    <el-input class="body-row-content" v-model="localtable[0].WAVELEVELTYPE" placeholder="请输入浪高描述" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-content">
                    <div class="one-word"></div>
                    <div class="four-words">风浪向：</div>
                    <el-form-item class="el-form-item" prop="WAVEDIRECTION">
                    <el-input class="body-row-content" v-model="localtable[0].WAVEDIRECTION" placeholder="请输入风浪向" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-content">
                    <div class="one-word"></div>
                    <div class="four-words">日平均水温：</div>
                    <el-form-item class="el-form-item" prop="WATERTEMPERATURE">
                    <el-input class="body-row-content" v-model="localtable[0].WATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                    <div class="one-word"></div>
                </div>
            </div>
            
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table10needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo10 from '../types/amshortinfo10'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable10 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo10()
    ]
    private rules = {
        WAVELEVELONE: [{validator: this.validateWave, trigger: 'blur'}],
        WAVELEVELTYPE: [{validator: this.validateWave, trigger: 'blur'}],
        WAVEDIRECTION: [{validator: this.validateWave, trigger: 'blur'}],
        WATERTEMPERATURE: [{validator: this.validateTemp, trigger: 'blur'}]
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
    public submitClick() {
        if (this.needsubmit.table10needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(10, 'AmShortTable10', this.localtable, this.checkSubmit, '上午十')
        }
    }
    @Watch('amshorttable10')
    private onAmShortTable10Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable10))
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
    private validateTemp(rule: any, value: string, callback: any) {
        if (this.usertype !== 'sw') {
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
        this.amshortvalid[10] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.table10needsubmit = !this.deepEqual(this.amshorttable10, this.localtable)
        if (this.amshortfakedata[10] === true) {
            this.needsubmit.table10needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable10))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable10))
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
    display: flex;
    width: 100%;
    height: 180px;
    flex-direction: column;
}
.body-row {
    flex: 1;
    width: 100%;
    flex-direction: row;
}
.body-row-content {
    flex: 1;
}
.one-word {
    width: 30px;
}
.four-words {
    width: 100px;
    justify-content: flex-start;
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
