<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午七、海上丝绸之路三天海浪、气象预报</div>
        <div class="header-row border-bottom border-left border-right">
            <div class="header-column border-right">区域</div>
            <div class="header-column border-right">日期</div>
            <div class="right-column">
                <div class="header-content-column border-right">波高（h）</div>
                <div class="header-content-column border-right">波向（方位）</div>
                <div class="header-content-column border-right">风向（方位）</div>
                <div class="header-content-column">风力（级）</div>
            </div>
        </div>
        <div class="table-body border-left border-right border-bottom">
            <div class="header-column table-body-header-column border-right">
                <div class="table-body-row border-bottom">青岛港</div>
                <div class="table-body-row border-bottom">潍坊港</div>
                <div class="table-body-row">营口港</div>
            </div>
            <div class="table-body-content-column">
                <el-form class="table-body-row" :class="{'border-top': index != 0}" v-for="(item, index) in localtable" :key="index"
                status-icon :model="item" :rules="rules" :ref="'form' + index">
                    <div class="content-header-column border-right">{{new Date(item.FORECASTDATE).getMonth() + 1}}月{{new Date(item.FORECASTDATE).getDate()}}日</div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFWAVEHEIGHT">
                        <el-input class="input" v-model="item.YRBHWWFWAVEHEIGHT" placeholder="请输入波高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFWAVEDIR">
                        <el-input class="input" v-model="item.YRBHWWFWAVEDIR" placeholder="请输入波向" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column border-right">
                        <el-form-item class="el-form-item" prop="YRBHWWFFLOWDIR">
                        <el-input class="input" v-model="item.YRBHWWFFLOWDIR" placeholder="请输入风向" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                    <div class="content-column">
                        <el-form-item class="el-form-item" prop="YRBHWWFFLOWLEVEL">
                        <el-input class="input" v-model="item.YRBHWWFFLOWLEVEL" placeholder="请输入风力" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table7needsubmit" @click="submitClick">提交</el-button>
            <div class="separator-horizontal"></div>
            <div class="fakedatadesc">{{fakedatadesc}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo7 from '../types/amshortinfo7'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable7 extends Vue {
    private myThis: any = this
    private localtable = [
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7(),
        new AmShortInfo7()
    ]
    private rules = {
        YRBHWWFWAVEHEIGHT: [{validator: this.validateHeight, trigger: 'blur'}],
        YRBHWWFWAVEDIR: [{validator: this.validateHeight, trigger: 'blur'}],
        YRBHWWFFLOWDIR: [{validator: this.validateHeight, trigger: 'blur'}],
        YRBHWWFFLOWLEVEL: [{validator: this.validateHeight, trigger: 'blur'}]
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
    private get fakedatadesc() { return Utils.getFakeDataDesc(this.amshortfakedata[7]) }
    public submitClick() {
        if (this.needsubmit.table7needsubmit === true && this.checkValidate() === true) {
            Utils.doSubmit(7, 'AmShortTable7', this.localtable, this.checkSubmit, '上午七')
        }
    }
    @Watch('amshorttable7')
    private onAmShortTable1Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable7))
        this.checkSubmit()
        this.checkValidate()
    }
    private validateHeight(rule: any, value: string, callback: any) {
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
        for (let i = 0; i < this.localtable.length; i++) {
            this.myThis.$refs['form' + i][0].validate((valid: boolean) => {
                if (valid === false) {
                    result = false
                }
            })
        }
        this.amshortvalid[7] = result
        return result
    }
    private checkSubmit() {
        this.needsubmit.table7needsubmit = !this.deepEqual(this.amshorttable7, this.localtable)
        if (this.amshortfakedata[7] !== 0) {
            this.needsubmit.table7needsubmit = true
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable7))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable7))
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
.header-content-column {
    height: 30px;
    flex: 1;
}
.right-column {
    flex: 1;
    height: 100%;
}
.content-header-column {
    height: 50px;
    min-width: 100px;
}
.content-column {
    flex: 1;
    height: 50px;
    min-width: 120px;
}
.table-body {
    width: 100%;
    height: 458px;
    flex-direction: row;
}
.table-body-header-column {
    flex-direction: column;
    height: 459px;
}
.table-body-content-column {
    flex: 1;
    /* height: 450px; */
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
