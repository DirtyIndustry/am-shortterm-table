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
            <div class="table-body-content-column">
                <div class="table-body-row" :class="{'border-top': index != 0}" v-for="(item, index) in localtable" :key="index">
                    <div class="content-header-column border-right">{{new Date(item.FORECASTDATE).getMonth() + 1}}月{{new Date(item.FORECASTDATE).getDate()}}日</div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.YRBHWWFWAVEHEIGHT" placeholder="请输入波高" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.YRBHWWFWAVEDIR" placeholder="请输入波向" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.YRBHWWFFLOWDIR" placeholder="请输入风向" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.YRBHWWFFLOWLEVEL" placeholder="请输入风力" :disabled="!timeeditable || !iswindwave" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column">
                        <el-input v-if="index > 2" class="input" v-model="item.YRBHWWFWATERTEMPERATURE" placeholder="请输入水温" :disabled="!timeeditable || !istemperature" @change="checkSubmit"></el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="submitdisable" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo1 from '../types/amshortinfo1'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable1 extends Vue {
    private localtable = [
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1(),
        new AmShortInfo1()
    ]
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('amshorttable1')
    private onAmShortTable1Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable1))
        this.checkSubmit()
    }
    get timeeditable() {
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
    private checkSubmit() {
        this.submitdisable = this.deepEqual(this.amshorttable1, this.localtable)
        if (this.amshortfakedata.AmShort1FakeData === true) {
            this.submitdisable = false
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable1))
        this.checkSubmit()
    }
    private submitClick() {
        this.amshorttable1 = JSON.parse(JSON.stringify(this.localtable))
        this.amshortfakedata.AmShort1FakeData = false
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
    /* height: 340px; */
    flex-direction: column;
}
.table-body-row {
    /* flex: 1; */
    width: 100%;
    /* height: 60px; */
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
