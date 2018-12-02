<template>
    <div class="container">
        <div class="row-upper">
            <div class="separator-horizontal"></div>
            <div>发布单位：</div>
            <el-input class="input" v-model="localtable[0].FRELEASEUNIT" placeholder="请输入发布单位" :disabled="!editable" @change="checkSubmit"></el-input>
            <div class="separator-horizontal"></div>
            <div>预报值班：</div>
            <el-input class="input" v-model="localtable[0].ZHIBANTEL" placeholder="请输入值班电话" :disabled="!editable" @change="checkSubmit"></el-input>
            <div class="separator-horizontal"></div>
        </div>
        <div class="row-upper">
            <div class="separator-horizontal"></div>
            <div>发布时间：</div>
            <el-input class="input" v-model="publishdatestring" placeholder="请输入发送时间" :disabled="!editable" @change="checkSubmit"></el-input>
            <div class="separator-horizontal"></div>
            <div>预报发送：</div>
            <el-input class="input" v-model="localtable[0].SENDTEL" placeholder="请输入发送电话" :disabled="!editable" @change="checkSubmit"></el-input>
            <div class="separator-horizontal"></div>
        </div>
        <div class="reporter-block border-top">
            <div class="separator-horizontal"></div>
            <div class="reporter-column">
                <div class="reporter-row">
                    <div class="reporter-header">海浪预报员：</div>
                    <el-select class="reporter-select" v-model="localtable[0].FWAVEFORECASTER" placeholder="请选择">
                        <el-option v-for="(item, index) in reporterwavelist" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                </div>
                <div class="reporter-row">
                    <div class="reporter-header">海浪预报员电话：</div>
                    <el-input class="input" v-model="localtable[0].FWAVEFORECASTERTEL" placeholder="请输入发送电话" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
            </div>
            <div class="separator-horizontal border-right"></div>
            <div class="separator-horizontal"></div>
            <div class="reporter-column">
                <div class="reporter-row">
                    <div class="reporter-header">潮汐预报员：</div>
                    <el-select class="reporter-select" v-model="localtable[0].FTIDALFORECASTER" placeholder="请选择">
                        <el-option v-for="(item, index) in reportertidelist" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                </div>
                <div class="reporter-row">
                    <div class="reporter-header">潮汐预报员电话：</div>
                    <el-input class="input" v-model="localtable[0].FTIDALFORECASTERTEL" placeholder="请输入发送电话" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
            </div>
            <div class="separator-horizontal border-right"></div>
            <div class="separator-horizontal"></div>
            <div class="reporter-column">
                <div class="reporter-row">
                    <div class="reporter-header">水温预报员：</div>
                    <el-select class="reporter-select" v-model="localtable[0].FWATERTEMPERATUREFORECASTER" placeholder="请选择">
                        <el-option v-for="(item, index) in reportertemperaturelist" :key="index" :label="item" :value="item"></el-option>
                    </el-select>
                </div>
                <div class="reporter-row">
                    <div class="reporter-header">水温预报员电话：</div>
                    <el-input class="input" v-model="localtable[0].FWATERTEMPERATUREFORECASTERTEL" placeholder="请输入发送电话" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
            </div>
            <div class="separator-horizontal"></div>
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
import PublishInfo from '../types/publishinfo'

@Component({
    mixins: [GlobalProperties]
})
export default class PublishMetaInfo extends Vue {
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
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('publishmetainfo')
    private onPublishMetaInfoChanged(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.publishmetainfo))
        this.checkSubmit()
    }
    get publishdatestring(): string {
        this.localtable[0].PUBLISHDATE = new Date(this.localtable[0].PUBLISHDATE)
        return this.localtable[0].PUBLISHDATE.getFullYear() + '年'
            + (this.localtable[0].PUBLISHDATE.getMonth() + 1) + '月'
            + this.localtable[0].PUBLISHDATE.getDate() + '日'
            + this.localtable[0].PUBLISHHOUR + '时'
    }
    set publishdatestring(value: string) {
        const re = /^\d{4}年\d{1,2}月\d{1,2}日\d{1,2}时/
        if (value.match(re)) {
            let strarr = value.split('年')
            const yearstr = strarr[0]
            strarr = strarr[1].split('月')
            const monthstr = strarr[0]
            strarr = strarr[1].split('日')
            const daystr = strarr[0]
            strarr = strarr[1].split('时')
            const hourstr = strarr[0]
            const pubdate = new Date(yearstr + '/' + monthstr + '/' + daystr)
            if (!isNaN(Number(pubdate))) {
                this.localtable[0].PUBLISHDATE = pubdate
            }
            if (Number(hourstr) > -1 && Number(hourstr) < 24) {
                this.localtable[0].PUBLISHHOUR = hourstr
            }
        }
    }
    get editable() {
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
        this.submitdisable = this.deepEqual(this.publishmetainfo, this.localtable)
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.publishmetainfo))
        this.checkSubmit()
    }
    private submitClick() {
        this.publishmetainfo = JSON.parse(JSON.stringify(this.localtable))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.publishmetainfo))
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
