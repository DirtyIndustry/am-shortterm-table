<template>
    <div class="container">
        <!-- <div class="info-panel"> -->
            <div class="yubaoyuan-container">
                <div class="yubaoyuan">预报员类型:</div>
                <el-select class="yubaoyuan-select" v-model="usertype" placeholder="请选择">
                    <el-option v-for="(item, index) in reportertypes" :key="index" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="pubdate-container">
                <div class="pubdate">填报日期:</div>
                <el-date-picker v-model="coltime" type="date" placeholder="选择日期" :clearable="reportdateavailable" :editable="reportdateavailable"
                    :picker-options="reportdateoption" @change="queryData"></el-date-picker>
                </div>
            <div class="pubtime-container">
                <div class="pubtime">时间:</div>
                <el-select class="pubtime-select" v-model="colhour" placeholder="请选择">
                    <el-option v-for="(item, index) in reporttimes" :key="index" :label="item" :value="item"></el-option>
                </el-select>
                <div class="pubtime-tail">时</div>
            </div>
        <!-- </div> -->
        <el-button @click="queryData">查询</el-button>
        <el-button>操作日志</el-button>
        <el-switch v-model="showalltable" active-text="显示所有" active-color="#13ce66"></el-switch>
        <el-button @click="gotoWordPage">选择模板并发布</el-button>
        <el-button :disabled="!iNeedSubmit" @click="submitAll">保存所有</el-button>
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Mixins, Vue } from 'vue-property-decorator'
    import GlobalProperties from '../mixins/globalproperties'

    @Component({
        mixins: [GlobalProperties]
    })
    export default class HeaderStrip extends Vue {
        private reportertypes = [
            {label: '潮汐', value: 'cx'},
            {label: '风、海浪', value: 'fl'},
            {label: '水温', value: 'sw'},
            {label: '无', value: ''}
        ]
        private reportdateoption = {
            disabledDate(time: Date) {
                return time.getTime() > Date.now()
            }
        }
        private reportdateavailable = false
        // private reporttime = 10
        private reporttimes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

        private get reportertype() {
            switch (this.usertype) {
                case 'fl':
                    return '风、海浪'
                case 'sw':
                    return '水温'
                case 'cx':
                    return '潮汐'
                default:
                    return '无'
            }
        }
        private get iNeedSubmit() {
            for (const value of this.needsubmit) {
                if (value === true) {
                    return true
                }
            }
            return false
        }

        private getSession(): void {
            console.log(this.reportertype)
        }
        private gotoWordPage() {
            console.log('go to word page.')
            const myThis = this
            myThis.$router.push('about')
        }
        @Emit('query')
        private queryData() {
            console.log('query ' + this.coltime)
        }
        @Emit('submitAll')
        private submitAll() {
            console.log('submit all')
        }
    }
</script>

<style scoped>
    .container {
        position: -webkit-sticky;
        position: -moz-sticky;
        position: -ms-sticky;
        position: sticky;
        top: 0;
        width: 100%;
        min-width: 800px;
        line-height: 60px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-weight: bold;
        border: 1px solid #f0f0f0;
        background-color: #f0f0f0;
        box-shadow: 0px 5px 25px gray;
        z-index: 9;
    }
    .yubaoyuan-container {
        display: flex;
        align-items: center;
    }
    .yubaoyuan {
        width: 130px;
    }
    .yubaoyuan-select {
        width: 140px;
    }
    .pubdate-container {
        display: flex;
        align-items: center;
    }
    .pubdate {
        width: 110px;
    }
    .pubtime-container {
        display: flex;
        align-items: center;
    }
    .pubtime {
        width: 80px;
    }
    .pubtime-select {
        width: 80px;
    }
    .pubtime-tail {
        width: 40px;
    }
</style>