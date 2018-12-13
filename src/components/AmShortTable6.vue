<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午六、24小时潮位预报</div>
        <div class="header-row-second border-bottom border-left border-right">
            <div class="header-column border-right">港口</div>
            <div class="header-column border-right">时间</div>
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
            <div class="header-column table-body-header-column border-right">
                <div class="table-body-row border-bottom">小岛河</div>
                <div class="table-body-row border-bottom">孤东</div>
                <div class="table-body-row border-bottom">东营港</div>
                <div class="table-body-row border-bottom">桩西</div>
                <div class="table-body-row border-bottom">飞雁滩</div>
                <div class="table-body-row">新户</div>
            </div>
            <div class="table-body-content-column">
                <el-form class="table-body-row" :class="{'border-top': index != 0}" v-for="(item, index) in localtable" :key="index"
                status-icon :model="item" :rules="rules" :ref="'form' + index">
                    <div class="content-header-column border-right">{{new Date(item.FORECASTDATE).getMonth() + 1}}月{{new Date(item.FORECASTDATE).getDate()}}日</div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLFIRSTWAVEOFTIME">
                        <el-input class="input" v-model="item.TLFIRSTWAVEOFTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLFIRSTWAVETIDELEVEL">
                        <el-input class="input" v-model="item.TLFIRSTWAVETIDELEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLFIRSTTIMELOWTIDE">
                        <el-input class="input" v-model="item.TLFIRSTTIMELOWTIDE" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLLOWTIDELEVELFORTHEFIRSTTIME">
                        <el-input class="input" v-model="item.TLLOWTIDELEVELFORTHEFIRSTTIME" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLSECONDWAVEOFTIME">
                        <el-input class="input" v-model="item.TLSECONDWAVEOFTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLSECONDWAVETIDELEVEL">
                        <el-input class="input" v-model="item.TLSECONDWAVETIDELEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="TLSECONDTIMELOWTIDE">
                        <el-input class="input" v-model="item.TLSECONDTIMELOWTIDE" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column">
                        <el-form-item class="el-form-item" prop="TLLOWTIDELEVELFORTHESECONDTIME">
                        <el-input class="input" v-model="item.TLLOWTIDELEVELFORTHESECONDTIME" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table6needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo6 from '../types/amshortinfo6'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable6 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo6(),
        new AmShortInfo6(),
        new AmShortInfo6(),
        new AmShortInfo6(),
        new AmShortInfo6(),
        new AmShortInfo6()
    ]
    private rules = {
        TLFIRSTWAVEOFTIME: [{validator: this.validateTime, trigger: 'blur'}],
        TLFIRSTTIMELOWTIDE: [{validator: this.validateTime, trigger: 'blur'}],
        TLSECONDWAVEOFTIME: [{validator: this.validateTime, trigger: 'blur'}],
        TLSECONDTIMELOWTIDE: [{validator: this.validateTime, trigger: 'blur'}],
        TLFIRSTWAVETIDELEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        TLLOWTIDELEVELFORTHEFIRSTTIME: [{validator: this.validateHeight, trigger: 'blur'}],
        TLSECONDWAVETIDELEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        TLLOWTIDELEVELFORTHESECONDTIME: [{validator: this.validateHeight, trigger: 'blur'}]
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
        if (this.needsubmit.table6needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(6, 'AmShortTable6', this.localtable, 4, this.checkSubmit, '上午六')
        }
    }
    @Watch('amshorttable6')
    private onAmShortTable6Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable6))
        this.checkSubmit()
        this.checkValidate()
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
        for (let i = 0; i < this.localtable.length; i++) {
            this.myThis.$refs['form' + i][0].validate((valid: boolean) => {
                if (valid === false) {
                    result = false
                }
            })
        }
        this.amshortvalid[6] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.table6needsubmit = !this.deepEqual(this.amshorttable6, this.localtable)
        if (this.amshortfakedata[6] === true) {
            this.needsubmit.table6needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable6))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable6))
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
    height: 90px;
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
    height: 90px;
}
.content-header-column {
    height: 60px;
    min-width: 80px;
}
.content-column {
    flex: 1;
    height: 60px;
    min-width: 79px;
}
.table-body {
    width: 100%;
    height: 365px;
    flex-direction: row;
}
.table-body-header-column {
    flex-direction: column;
    height: 365px;
}
.table-body-content-column {
    flex: 1;
    /* height: 340px; */
    flex-direction: column;
}
.table-body-row {
    display: flex;
    flex: 1;
    width: 100%;
}
.content-row {
    height: 40px;
    width: 100%;
    font-size: 19px;
    flex-direction: row;
}
.el-form-item {
    height: 100%;
    /* width: 100%; */
    flex: 1;
    margin: 0;
}
.el-form-item >>> .el-form-item__content{
    /* display: block; */
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
