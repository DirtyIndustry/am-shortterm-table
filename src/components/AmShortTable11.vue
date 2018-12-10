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
        <el-form class="table-body border-left border-right border-bottom" status-icon :model="localtable[0]" :rules="rules" ref="form">
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="FIRSTHIGHTIME">
                <el-input class="input" v-model="localtable[0].FIRSTHIGHTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="FIRSTHIGHLEVEL">
                <el-input class="input" v-model="localtable[0].FIRSTHIGHLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="FIRSTLOWTIME">
                <el-input class="input" v-model="localtable[0].FIRSTLOWTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="FIRSTLOWLEVEL">
                <el-input class="input" v-model="localtable[0].FIRSTLOWLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="SECONDHIGHTIME">
                <el-input class="input" v-model="localtable[0].SECONDHIGHTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="SECONDHIGHLEVEL">
                <el-input class="input" v-model="localtable[0].SECONDHIGHLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column border-right">
                <el-form-item class="el-form-item" prop="SECONDLOWTIME">
                <el-input class="input" v-model="localtable[0].SECONDLOWTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
            <div class="content-column">
                <el-form-item class="el-form-item" prop="SECONDLOWLEVEL">
                <el-input class="input" v-model="localtable[0].SECONDLOWLEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table11needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import Utils from '@/utils/utils'
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
    private rules = {
        FIRSTHIGHTIME: [{validator: this.validateTime, trigger: 'blur'}],
        FIRSTLOWTIME: [{validator: this.validateTime, trigger: 'blur'}],
        SECONDHIGHTIME: [{validator: this.validateTime, trigger: 'blur'}],
        SECONDLOWTIME: [{validator: this.validateTime, trigger: 'blur'}],
        FIRSTHIGHLEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        FIRSTLOWLEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        SECONDHIGHLEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        SECONDLOWLEVEL: [{validator: this.validateHeight, trigger: 'blur'}]
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
        if (this.needsubmit.table11needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(11, 'AmShortTable11', this.localtable, 9, this.checkSubmit, '上午十一')
        }
    }
    @Watch('amshorttable11')
    private onAmShortTable11Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable11))
        this.checkSubmit()
    }
    private validateHeight(rule: any, value: string, callback: any) {
        if (this.usertype !== 'cx') {
            callback()
        } else if (!value) {
            callback(new Error(' '))
        } else if (value === '-') {
            callback()
        } else if (isNaN(+value)) {
            callback(new Error(' '))
        } else {
            return callback()
        }
    }
    private validateTime(rule: any, value: string, callback: any) {
        if (this.usertype !== 'cx') {
            callback()
        } else if (!value) {
            callback(new Error(' '))
        } else if (value === '-') {
            callback()
        } else if (isNaN(+value) || value.length !== 4) {
            callback(new Error(' '))
        } else if (Number(value.substring(0, 2)) > 23 || Number(value.substring(2)) > 59) {
            callback(new Error(' '))
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
        return result
    }
    private checkSubmit() {
        this.needsubmit.table11needsubmit = !this.deepEqual(this.amshorttable11, this.localtable)
        if (this.amshortfakedata[9] === true) {
            this.needsubmit.table11needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable11))
        this.checkSubmit()
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
    display: flex;
    width: 100%;
    height: 60px;
    flex-direction: row;
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
