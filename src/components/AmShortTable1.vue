<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午一、72小时渤海海区及黄河海港风、浪预报</div>
        <div class="header-row border-bottom border-left border-right">
            <div class="header-column border-right">区域</div>
            <div class="header-column border-right">日期</div>
            <div class="header-content-column border-right">波高（h）</div>
            <div class="header-content-column border-right">波向（方位）</div>
            <div class="header-content-column border-right">风向（方位）</div>
            <div class="header-content-column border-right">风力（级）</div>
            <div class="header-content-column">水温（℃）</div>
        </div>
        <div class="table-body border-left border-right border-bottom">
            <div class="header-column table-body-header-column border-right">
                <div class="table-body-header-row border-bottom">渤海</div>
                <div class="table-body-header-row">黄河海港</div>
            </div>
            <!-- <el-form style="width: 100%;" status-icon :rules="rules" :model="localtable" ref="mainform"> -->
            <div class="table-body-content-column">
                <el-form class="table-body-row" :class="{'border-top': index != 0}" v-for="(item, index) in localtable" :key="index"
                status-icon :model="item" :rules="rules" :ref="'form' + index">
                    <div class="content-header-column border-right">{{new Date(item.FORECASTDATE).getMonth() + 1}}月{{new Date(item.FORECASTDATE).getDate()}}日</div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFWAVEHEIGHT">
                        <el-input class="input" v-model="item.YRBHWWFWAVEHEIGHT" placeholder="请输入波高" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFWAVEDIR">
                        <el-input class="input" v-model="item.YRBHWWFWAVEDIR" placeholder="请输入波向" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFFLOWDIR">
                        <el-input class="input" v-model="item.YRBHWWFFLOWDIR" placeholder="请输入风向" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFFLOWLEVEL">
                        <el-input class="input" v-model="item.YRBHWWFFLOWLEVEL" placeholder="请输入风力" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column">
                        <el-form-item v-if="index > 2" class="el-form-item" prop="YRBHWWFWATERTEMPERATURE">
                        <el-input class="input" v-model="item.YRBHWWFWATERTEMPERATURE" placeholder="请输入水温" :disabled="!timeeditable || !istemperature" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <!-- </el-form> -->
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table1needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo1 from '../types/amshortinfo1'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable1 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1()
    ]
    private rules = {
        YRBHWWFWAVEHEIGHT: [
            {
                validator: this.validateWindWave,
                trigger: 'blur'
            }
        ],
        YRBHWWFWAVEDIR: [
            {
                validator: this.validateWindWave,
                trigger: 'blur'
            }
        ],
        YRBHWWFFLOWDIR: [
            {
                validator: this.validateWindWave,
                trigger: 'blur'
            }
        ],
        YRBHWWFFLOWLEVEL: [
            {
                validator: this.validateWindWave,
                trigger: 'blur'
            }
        ],
        YRBHWWFWATERTEMPERATURE: [
            {
                validator: this.validateTemperature,
                trigger: 'blur'
            }
        ]
    }
    private deepEqual = require('deep-equal')
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
        if (this.needsubmit.table1needsubmit === true && this.validateForm() === true) {
            Utils.doSubmit(1, 'AmShortTable1', this.localtable, 0, this.checkSubmit, '上午一')
        }
    }
    @Watch('amshorttable1')
    private onAmShortTable1Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable1))
        this.checkSubmit()
        this.validateForm()
    }
    private validateWindWave(rule: any, value: string, callback: any) {
        if (this.usertype === 'fl' && !value) {
            callback(new Error(' '))
        } else {
            return callback()
        }
    }
    private validateTemperature(rule: any, value: string, callback: any) {
        if (this.usertype === 'sw' && !value) {
            callback(new Error(' '))
        } else {
            return callback()
        }
    }
    private validateForm() {
        let result = true
        for (let i = 0; i < this.localtable.length; i++) {
            this.myThis.$refs['form' + i][0].validate((valid: boolean) => {
                if (valid === false) {
                    result = false
                }
            })
        }
        this.amshortvalid[1] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.table1needsubmit = !this.deepEqual(this.amshorttable1, this.localtable)
        if (this.amshortfakedata[1] === true) {
            this.needsubmit.table1needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable1))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable1))
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
    height: 30px;
    min-width: 100px;
}
.right-column {
    flex: 1;
    height: 100%;
}
.header-content-column {
    flex: 1;
    height: 30px;
    min-width: 120px;
}
.content-header-column {
    width: 100px;
    height: 60px;
}
.content-column {
    flex: 1;
    height: 60px;
    min-width: 120px;
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
.table-body-header-row {
    flex: 1;
    width: 100%;
}
.table-body-content-column {
    flex: 1;
    flex-direction: column;
}
.table-body-row {
    display: flex;
    flex-direction: row;
    /* border: 1px solid #ff0000; */
    width: 100%;
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
