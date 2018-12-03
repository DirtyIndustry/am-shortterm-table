<template>
    <div class="container">
        <div class="header-row border-bottom border-top border-left border-right">{{title}}</div>
        <div class="table-body border-left border-right border-bottom">
            <div class="table-body-row border-bottom">
                <div class="table-body-row-header">海浪:</div>
                <div class="table-body-row-content">
                    <el-input type="textarea" autosize placeholder="请输入内容" v-model="localupperstring" :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                </div>
            </div>
            <div class="table-body-row">
                <div class="table-body-row-header">潮汐:</div>
                <div class="table-body-row-content">
                    <el-input type="textarea" autosize placeholder="请输入内容" v-model="locallowerstring" :disabled="!editable || !istide" @change="checkSubmit"></el-input>
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
import { Component, Prop, Watch, Emit, Mixins, Vue } from 'vue-property-decorator'
import GlobalProperties from '../mixins/globalproperties'
import AmShortInfo3and4 from '../types/amshortinfo3and4'
@Component({
    mixins: [GlobalProperties]
})
export default class AmShortTable3and4 extends Vue {
    @Prop({default: ''}) public upperstring!: string
    @Prop({default: ''}) public lowerstring!: string
    @Prop({default: ''}) public title!: string

    private localupperstring = ''
    private locallowerstring = ''
    private submitdisable: boolean = true

    @Watch('upperstring')
    private onUpperStringChanged(val: string, oldVal: string) {
        this.localupperstring = val
        this.checkSubmit()
    }
    @Watch('lowerstring')
    private onLowerStringChanged(val: string, oldVal: string) {
        this.locallowerstring = val
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

    @Emit('valueChange')
    private valueChange() {
        return [this.localupperstring, this.locallowerstring]
    }

    private checkSubmit() {
        if (this.localupperstring !== this.upperstring
            || this.locallowerstring !== this.lowerstring
            || this.amshortfakedata.AmShort3and4FakeData === true) {
            this.submitdisable = false
        } else {
            this.submitdisable = true
        }
    }
    private cancelClick() {
        this.localupperstring = this.upperstring
        this.locallowerstring = this.lowerstring
        this.checkSubmit()
    }
    private submitClick() {
        this.valueChange()
        this.amshortfakedata.AmShort3and4FakeData = false
        this.checkSubmit()
    }
    private mounted() {
        this.localupperstring = this.upperstring
        this.locallowerstring = this.lowerstring
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
.table-body {
    width: 100%;
    flex-direction: column;
}
.table-body-row {
    width: 100%;
    min-height: 40px;
    flex-direction: row;
}
.table-body-row-header {
    width: 60px;
}
.table-body-row-content {
    flex: 1;
    padding: 5px 5px 5px 0;
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
    width: 80%;
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
