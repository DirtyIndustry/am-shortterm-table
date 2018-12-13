<template>
    <div class="container">
        <!-- <div class="separator-horizontal"></div> -->
        <div class="select-column">
            <el-checkbox class="checkbox" v-model="report.selected" @change="selectChanged"></el-checkbox>
        </div>
        <div class="icon-column">
            <div v-if="report.reportStatus === 'done'" class="icon fa fa-check vert"></div>
            <div v-if="report.reportStatus === 'ready'" class="icon fa fa-play bleu"></div>
            <div v-if="report.reportStatus === 'notready'" class="icon fa fa-exclamation orange"></div>
            <div v-if="report.reportStatus === 'error'" class="icon fa fa-exclamation-triangle rouge"></div>
        </div>
        <div class="separator-horizontal"></div>
        <div class="main-column">
            <div class="title-row">{{report.reportTitle}}</div>
            <div class="desc-row">{{report.reportStatusDesc}}</div>
        </div>
        <div class="separator-horizontal"></div>
        <div class="button-column">
            <el-button type="primary" circle :disabled="report.reportButtonDisable"> 
                <div class="fa fa-play"></div>
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
import Utils from '@/utils/utils'
import GlobalProperties from '../mixins/globalproperties'
import ReportInfo from '@/types/reportinfo'

@Component({
    mixins: [GlobalProperties]
})
export default class ReportItem extends Vue {
    @Prop() private report!: ReportInfo
    @Emit('selectChanged')
    private selectChanged(val: boolean) {
        return val
    }
}
</script>

<style scoped>
@import "../assets/fontawesome-free-5.5.0-web/css/all.min.css";

.container {
    border: 1px solid #000000;
    width: 800px;
    height: 60px;
    display: flex;
    flex-direction: row;
}
.select-column {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon-column {
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.main-column {
    display: flex;
    flex: 1;
    flex-direction: column;
}
.button-column {
    display: flex;
    width: 60px;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.checkbox {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon {
    font-size: 35px;
}
.icon-column >>> .fa-play:hover {
    color: blueviolet;
    cursor: pointer;
}
.icon-column >>> .fa-play:active {
    color: black;
}
.title-row {
    display: flex;
    flex: 2;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
}
.desc-row {
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 15px;
}
.separator-horizontal {
    width: 10px;
    height: 100%;
}
.border-right {
    border-right: 1px solid #000000;
}
.vert {
    color: green;
}
.bleu {
    color: darkblue;
}
.orange {
    color: orange;
}
.rouge {
    color: red;
}
</style>
