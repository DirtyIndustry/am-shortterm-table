<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">上午十、海阳海浪、水温预报</div>
        <div class="body border-left border-right border-bottom">
            
            <div class="body-row">
                <div class="body-row-content">
                    <div class="one-word"></div>
                    <div class="four-words">有</div>
                    <el-input class="body-row-content" v-model="localtable[0].WAVELEVELONE" placeholder="请输入浪高" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="four-words">&nbsp;&nbsp;米&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;的&nbsp;&nbsp;</div>
                    <el-input class="body-row-content" v-model="localtable[0].WAVELEVELTYPE" placeholder="请输入浪高描述" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-content">
                    <div class="one-word"></div>
                    <div class="four-words">风浪向：</div>
                    <el-input class="body-row-content" v-model="localtable[0].WAVEDIRECTION" placeholder="请输入风浪向" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    <div class="one-word"></div>
                </div>
            </div>
            <div class="body-row">
                <div class="body-row-content">
                    <div class="one-word"></div>
                    <div class="four-words">日平均水温：</div>
                    <el-input class="body-row-content" v-model="localtable[0].WATERTEMPERATURE" placeholder="请输入水温" :disabled="!editable || !istemperature" @change="checkSubmit"></el-input>
                    <div class="one-word">℃</div>
                    <div class="one-word"></div>
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
import AmShortInfo10 from '../types/amshortinfo10'

@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable10 extends Vue {
    private localtable = [
        new AmShortInfo10()
    ]
    private deepEqual = require('deep-equal')
    private submitdisable: boolean = true
    @Watch('amshorttable10')
    private onAmShortTable10Changed(val: any, oldVal: any) {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable10))
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
        this.submitdisable = this.deepEqual(this.amshorttable10, this.localtable)
        if (this.amshortfakedata.AmShort10FakeData === true) {
            this.submitdisable = false
        }
    }
    private cancelClick() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable10))
        this.checkSubmit()
    }
    private submitClick() {
        this.amshorttable10 = JSON.parse(JSON.stringify(this.localtable))
        this.amshortfakedata.AmShort10FakeData = false
        this.checkSubmit()
    }
    private mounted() {
        this.localtable = JSON.parse(JSON.stringify(this.amshorttable10))
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
.body {
    width: 100%;
    height: 180px;
    flex-direction: column;
}
.body-row {
    flex: 1;
    width: 100%;
    flex-direction: row;
}
.body-row-content {
    flex: 1;
}
.one-word {
    width: 30px;
}
.four-words {
    width: 100px;
    justify-content: flex-start;
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
