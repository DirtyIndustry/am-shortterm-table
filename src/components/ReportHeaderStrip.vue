<template>
<div class="container">
    <div class="separator-horizontal"></div>
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="checkAllChange">选择全部</el-checkbox>
    <div class="separator-horizontal"></div>
    <el-button>发布表单</el-button>
    <el-button @click="gotoHomePage">返回报表</el-button>
</div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Emit, Mixins, Vue } from 'vue-property-decorator'
import GlobalProperties from '../mixins/globalproperties'

@Component({
    mixins: [GlobalProperties]
})
export default class ReportHeaderStrip extends Vue {
    @Prop({default: true}) public checkedAll!: boolean
    @Prop({default: false}) public isIndeterminate!: boolean
    private checkAll = true
    @Watch('checkedAll')
    private onCheckedAllChanged(val: boolean, oldVal: boolean) {
        this.checkAll = val
    }
    @Emit('checkAllChange')
    private checkAllChange(val: boolean) {
        return val
    }
    private gotoHomePage() {
        const myThis = this
        myThis.$router.push('/')
    }
    private mounted() {
        console.log('checkAll: ' + this.checkAll)
    }
}
</script>

<style scoped>
.container {
    width: 800px;
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
.separator-horizontal {
    width: 10px;
}
</style>