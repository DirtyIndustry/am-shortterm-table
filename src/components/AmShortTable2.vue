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
                <div class="table-body-row" :class="{'border-top': index != 0}" v-for="(item, index) in localtable" :key="index">
                    <div class="content-header-column border-right">{{new Date(item.FORECASTDATE).getMonth() + 1}}月{{new Date(item.FORECASTDATE).getDate()}}日</div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLFIRSTWAVEOFTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLFIRSTWAVETIDELEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLFIRSTTIMELOWTIDE" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLLOWTIDELEVELFORTHEFIRSTTIME" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLSECONDWAVEOFTIME" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLSECONDWAVETIDELEVEL" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column border-right">
                        <el-input class="input" v-model="item.HTLSECONDTIMELOWTIDE" placeholder="请输入时间" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                    <div class="content-column">
                        <el-input class="input" v-model="item.HTLLOWTIDELEVELFORTHESECONDTIM" placeholder="请输入潮位" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table2needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
import Axios from 'axios'
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
    private deepEqual = require('deep-equal')
    public submitClick() {
        if (this.needsubmit.table2needsubmit === true) {
            Utils.doSubmit(2, 'AmShortTable2', this.localtable, 1, this.checkSubmit, '上午二')
        }
    }
    @Watch('amshorttable2')
    private onAmShortTable2Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable2))
        this.checkSubmit()
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
    private checkSubmit() {
        this.needsubmit.table2needsubmit = !this.deepEqual(this.amshorttable2, this.localtable)
        if (this.amshortfakedata[1] === true) {
            this.needsubmit.table2needsubmit = true
        }
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
    flex: 1;
    width: 100%;
}
.content-row {
    height: 40px;
    width: 100%;
    font-size: 19px;
    flex-direction: row;
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
