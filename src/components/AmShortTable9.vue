<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午九、海区24小时海浪、水温预报</div>
        <div class="header-row border-bottom border-left border-right">
            <div class="header-column border-right"></div>
            <div class="right-column">
                <div class="content-column border-right">浪高(m)</div>
                <div class="content-column">水温</div>
            </div>
        </div>
        <div class="table-body border-left border-right border-bottom">
            <div class="header-column border-right">
                <div class="table-body-row border-bottom">渤海</div>
                <div class="table-body-row border-bottom">黄海北部</div>
                <div class="table-body-row border-bottom">黄海中部</div>
                <div class="table-body-row border-bottom">黄海南部</div>
                <div class="table-body-row">潍坊近海</div>
            </div>
            <div class="content-column border-right">
                <div class="table-body-row border-bottom">
                    <el-input class="input" v-model="localtable[0].SA24HWFBOHAIWAVEHEIGHT" placeholder="请输入波高" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
                <div class="table-body-row border-bottom">
                    <el-input class="input" v-model="localtable[0].SA24HWFNORTHOFYSWAVEHEIGHT" placeholder="请输入波高" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
                <div class="table-body-row border-bottom">
                    <el-input class="input" v-model="localtable[0].SA24HWFMIDDLEOFYSWAVEHEIGHT" placeholder="请输入波高" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
                <div class="table-body-row border-bottom">
                    <el-input class="input" v-model="localtable[0].SA24HWFSOUTHOFYSWAVEHEIGHT" placeholder="请输入波高" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
                <div class="table-body-row">
                    <el-input class="input" v-model="localtable[0].SA24HWFOFFSHOREWAVEHEIGHT" placeholder="请输入波高" :disabled="!editable" @change="checkSubmit"></el-input>
                </div>
            </div>
            <div class="content-column">
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row">
                    <el-input class="input" v-model="localtable[0].SA24HWFOFFSHORESW" placeholder="请输入水温" :disabled="!editable" @change="checkSubmit"></el-input>
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
import AmShortInfo9 from '../types/amshortinfo9'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable9 extends Vue {
    private localtable = [
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9(),
        new AmShortInfo9()
    ]
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('amshorttable9')
    private onAmShortTable1Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable9))
        this.checkSubmit()
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
        this.submitdisable = this.deepEqual(this.amshorttable9, this.localtable)
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable9))
        this.checkSubmit()
    }
    private submitClick() {
        this.amshorttable9 = JSON.parse(JSON.stringify(this.localtable))
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable9))
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
    height: 100%;
    min-width: 100px;
    flex-direction: column;
}
.right-column {
    flex: 1;
    height: 100%;
}
.content-column {
    flex: 1;
    height: 100%;
    min-width: 120px;
    flex-direction: column;
}
.table-body {
    width: 100%;
    height: 300px;
    flex-direction: row;
}
.table-body-row {
    flex: 1;
    width: 100%;
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
