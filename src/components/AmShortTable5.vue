<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午五、预计未来24小时海浪、水温预报</div>
        <el-form class="body border-left border-right border-bottom" status-icon :model="localtable[0]" :rules="rules" ref="form">
            <div class="body-row">
                <div class="body-row-header">渤海</div>
                <div class="body-row-content">
                    <div class="two-words">有</div>
                    <el-form-item class="el-form-item" prop="EFWWBHLOWESTWAVE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHLOWESTWAVE" placeholder="请输入最低浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="two-words">m 到</div>
                    <el-form-item class="el-form-item" prop="EFWWBHHIGHESTWAVE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHHIGHESTWAVE" placeholder="请输入最高浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="two-words">m 的</div>
                    <el-form-item class="el-form-item" prop="EFWWBHWAVETYPE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHWAVETYPE" placeholder="请输入浪高类型" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">黄海北部</div>
                <div class="body-row-content">
                    <div class="two-words">有</div>
                    <el-form-item class="el-form-item" prop="EFWWBHNORTHLOWESTWAVE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHNORTHLOWESTWAVE" placeholder="请输入最低浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="two-words">m 到</div>
                    <el-form-item class="el-form-item" prop="EFWWBHNORTHHIGHESTWAVE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHNORTHHIGHESTWAVE" placeholder="请输入最高浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="two-words">m 的</div>
                    <el-form-item class="el-form-item" prop="EFWWBHNORTHWAVETYPE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWBHNORTHWAVETYPE" placeholder="请输入浪高类型" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">刁口海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-form-item class="el-form-item" prop="EFWWDKSEAAREAWAVEHEIGHT">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDKSEAAREAWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-form-item class="el-form-item" prop="EFWWDKSEAAREAWATERTEMPE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDKSEAAREAWATERTEMPE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">黄河口海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-form-item class="el-form-item" prop="EFWWHHKSEAAREAWAVEHEIGHT">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWHHKSEAAREAWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-form-item class="el-form-item" prop="EFWWHHKSEAAREAWATERTEMP">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWHHKSEAAREAWATERTEMP" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">广利港海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-form-item class="el-form-item" prop="EFWWGLGSEAAREAWAVEHEIGHT">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWGLGSEAAREAWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-form-item class="el-form-item" prop="EFWWGLGSEAAREAWATERTEMP">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWGLGSEAAREAWATERTEMP" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">东营港海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-form-item class="el-form-item" prop="EFWWDYGWAVEHEIGHT">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDYGWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-form-item class="el-form-item" prop="EFWWDYGWATERTEMPERATURE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWDYGWATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">新户海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-form-item class="el-form-item" prop="EFWWXHWAVEHEIGHT">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWXHWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-form-item class="el-form-item" prop="EFWWXHWATERTEMPERATURE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWXHWATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-header">埕口海域</div>
                <div class="body-row-content">
                    <div class="two-words">浪高</div>
                    <el-form-item class="el-form-item" prop="EFWWCKWAVEHEIGHT">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWCKWAVEHEIGHT" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="four-words">米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水温</div>
                    <el-form-item class="el-form-item" prop="EFWWCKWATERTEMPERATURE">
                    <el-input class="body-row-content" v-model="localtable[0].EFWWCKWATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    </el-form-item>
                    <div class="one-word">℃</div>
                </div>
            </div>
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table5needsubmit" @click="submitClick">提交</el-button>
            <div class="separator-horizontal"></div>
            <div class="fakedatadesc">{{fakedatadesc}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
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
    private rules = {
        EFWWBHLOWESTWAVE: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWBHHIGHESTWAVE: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWBHWAVETYPE: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWBHNORTHLOWESTWAVE: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWBHNORTHHIGHESTWAVE: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWBHNORTHWAVETYPE: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWDKSEAAREAWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWHHKSEAAREAWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWGLGSEAAREAWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWDYGWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWXHWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWCKWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
        EFWWDKSEAAREAWATERTEMPE: [{validator: this.validateTemp, trigger: 'blur'}],
        EFWWHHKSEAAREAWATERTEMP: [{validator: this.validateTemp, trigger: 'blur'}],
        EFWWGLGSEAAREAWATERTEMP: [{validator: this.validateTemp, trigger: 'blur'}],
        EFWWDYGWATERTEMPERATURE: [{validator: this.validateTemp, trigger: 'blur'}],
        EFWWXHWATERTEMPERATURE: [{validator: this.validateTemp, trigger: 'blur'}],
        EFWWCKWATERTEMPERATURE: [{validator: this.validateTemp, trigger: 'blur'}]
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
    private get fakedatadesc() { return Utils.getFakeDataDesc(this.amshortfakedata[5]) }
    public submitClick() {
        if (this.needsubmit.table5needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(5, 'AmShortTable5', this.localtable, this.checkSubmit, '上午五')
        }
    }
    @Watch('amshorttable5')
    private onAmShortTable5Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable5))
        this.checkSubmit()
        this.checkValidate()
    }
    private validateWave(rule: any, value: string, callback: any) {
        if (this.usertype !== 'fl') {   // usertype
            callback()
        } else if (!value) {              // non empty
            callback(new Error(' '))
        } else if (value === '-') {       // '-' for no-value
            callback()
        } else {
            return callback()
        }
    }
    private validateTemp(rule: any, value: string, callback: any) {
        if (this.usertype !== 'sw') {   // usertype
            callback()
        } else if (!value) {              // non empty
            callback(new Error(' '))
        } else if (value === '-') {       // '-' for no-value
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
        this.amshortvalid[5] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.table5needsubmit = !this.deepEqual(this.amshorttable5, this.localtable)
        if (this.amshortfakedata[5] !== 0) {
            this.needsubmit.table5needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable5))
        this.checkSubmit()
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
    display: flex;
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
.el-form-item {
    height: 100%;
    flex: 1;
    margin: 0;
}
.el-form-item >>> .el-form-item__content{
    /* display: block; */
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
