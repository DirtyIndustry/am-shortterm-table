<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午二、72小时港口潮位预报</div>
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
                <div class="table-body-row border-bottom">龙口港</div>
                <div class="table-body-row">黄河海港</div>
            </div>
            <div class="table-body-content-column">
                <el-form class="table-body-row" :class="{'border-top': index != 0}" v-for="(item, index) in localtable" :key="index"
                status-icon :model="item" :rules="rules" :ref="'form' + index">
                    <div class="content-header-column border-right">{{new Date(item.FORECASTDATE).getMonth() + 1}}月{{new Date(item.FORECASTDATE).getDate()}}日</div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLFIRSTWAVEOFTIME">
                        <el-input class="input" v-model="item.HTLFIRSTWAVEOFTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLFIRSTWAVETIDELEVEL">
                        <el-input class="input" v-model="item.HTLFIRSTWAVETIDELEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLFIRSTTIMELOWTIDE">
                        <el-input class="input" v-model="item.HTLFIRSTTIMELOWTIDE" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLLOWTIDELEVELFORTHEFIRSTTIME">
                        <el-input class="input" v-model="item.HTLLOWTIDELEVELFORTHEFIRSTTIME" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLSECONDWAVEOFTIME">
                        <el-input class="input" v-model="item.HTLSECONDWAVEOFTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLSECONDWAVETIDELEVEL">
                        <el-input class="input" v-model="item.HTLSECONDWAVETIDELEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="HTLSECONDTIMELOWTIDE">
                        <el-input class="input" v-model="item.HTLSECONDTIMELOWTIDE" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column">
                        <el-form-item class="el-form-item" prop="HTLLOWTIDELEVELFORTHESECONDTIM">
                        <el-input class="input" v-model="item.HTLLOWTIDELEVELFORTHESECONDTIM" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table2needsubmit" @click="submitClick">提交</el-button>
            <div class="separator-horizontal"></div>
            <div class="fakedatadesc">{{fakedatadesc}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo2 from '../types/amshortinfo2'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable2 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo2(),
        new AmShortInfo2(),
        new AmShortInfo2(),
        new AmShortInfo2(),
        new AmShortInfo2(),
        new AmShortInfo2()
    ]
    private rules = {
        HTLFIRSTWAVEOFTIME: [{validator: this.validateTime, trigger: 'blur'}],
        HTLFIRSTTIMELOWTIDE: [{validator: this.validateTime, trigger: 'blur'}],
        HTLSECONDWAVEOFTIME: [{validator: this.validateTime, trigger: 'blur'}],
        HTLSECONDTIMELOWTIDE: [{validator: this.validateTime, trigger: 'blur'}],
        HTLFIRSTWAVETIDELEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        HTLLOWTIDELEVELFORTHEFIRSTTIME: [{validator: this.validateHeight, trigger: 'blur'}],
        HTLSECONDWAVETIDELEVEL: [{validator: this.validateHeight, trigger: 'blur'}],
        HTLLOWTIDELEVELFORTHESECONDTIM: [{validator: this.validateHeight, trigger: 'blur'}]
    }
    private deepEqual = require('deep-equal')
    public submitClick() {
        if (this.needsubmit.table2needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(2, 'AmShortTable2', this.localtable, this.checkSubmit, '上午二')
        }
    }
    @Watch('amshorttable2')
    private onAmShortTable2Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable2))
        this.checkSubmit()
        this.checkValidate()
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
    private get fakedatadesc() { return Utils.getFakeDataDesc(this.amshortfakedata[2]) }
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
    private checkSubmit() {
        this.needsubmit.table2needsubmit = !this.deepEqual(this.amshorttable2, this.localtable)
        if (this.amshortfakedata[2] !== 0) {
            this.needsubmit.table2needsubmit = true
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
        this.amshortvalid[2] = result
        return result
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable2))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable2))
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
    width: 100%;
    margin: 0 5%;
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
