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
        <el-form class="table-body border-left border-right border-bottom" status-icon :model="localtable[0]" :rules="rules"
            ref="form">
            <div class="body-header-column border-right">
                <div class="table-body-row border-bottom">渤海</div>
                <div class="table-body-row border-bottom">黄海北部</div>
                <div class="table-body-row border-bottom">黄海中部</div>
                <div class="table-body-row border-bottom">黄海南部</div>
                <div class="table-body-row">潍坊近海</div>
            </div>
            <div class="body-content-column border-right">
                <div class="table-body-row border-bottom">
                    <el-form-item class="el-form-item" prop="SA24HWFBOHAIWAVEHEIGHT">
                        <el-input class="input" v-model="localtable[0].SA24HWFBOHAIWAVEHEIGHT" placeholder="请输入波高"
                            :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
                <div class="table-body-row border-bottom">
                    <el-form-item class="el-form-item" prop="SA24HWFNORTHOFYSWAVEHEIGHT">
                        <el-input class="input" v-model="localtable[0].SA24HWFNORTHOFYSWAVEHEIGHT" placeholder="请输入波高"
                            :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
                <div class="table-body-row border-bottom">
                    <el-form-item class="el-form-item" prop="SA24HWFMIDDLEOFYSWAVEHEIGHT">
                        <el-input class="input" v-model="localtable[0].SA24HWFMIDDLEOFYSWAVEHEIGHT" placeholder="请输入波高"
                            :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
                <div class="table-body-row border-bottom">
                    <el-form-item class="el-form-item" prop="SA24HWFSOUTHOFYSWAVEHEIGHT">
                        <el-input class="input" v-model="localtable[0].SA24HWFSOUTHOFYSWAVEHEIGHT" placeholder="请输入波高"
                            :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
                <div class="table-body-row">
                    <el-form-item class="el-form-item" prop="SA24HWFOFFSHOREWAVEHEIGHT">
                        <el-input class="input" v-model="localtable[0].SA24HWFOFFSHOREWAVEHEIGHT" placeholder="请输入波高"
                            :disabled="!editable || !iswindwave" @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="body-content-column">
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row border-bottom"></div>
                <div class="table-body-row">
                    <el-form-item class="el-form-item" prop="SA24HWFOFFSHORESW">
                        <el-input class="input" v-model="localtable[0].SA24HWFOFFSHORESW" placeholder="请输入水温" :disabled="!editable || !istemperature"
                            @change="checkSubmit"></el-input>
                    </el-form-item>
                </div>
            </div>
        </el-form>
        <div class="button-row">
            <div class="separator-horizontal"></div>
            <el-button size="small" @click="cancelClick">取消</el-button>
            <div class="separator-horizontal"></div>
            <el-button size="small" type="primary" :disabled="!needsubmit.table9needsubmit" @click="submitClick">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Watch, Mixins, Vue } from 'vue-property-decorator'
    import Utils from '@/utils/utils'
    import GlobalProperties from '../mixins/globalproperties'
    import AmShortInfo9 from '../types/amshortinfo9'

    @Component({
        mixins: [GlobalProperties]
    })
    export default class AmShortTable9 extends Vue {
        private myThis: any = this
        private localtable = [
            new AmShortInfo9()
        ]
        private rules = {
            SA24HWFBOHAIWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
            SA24HWFNORTHOFYSWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
            SA24HWFMIDDLEOFYSWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
            SA24HWFSOUTHOFYSWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
            SA24HWFOFFSHOREWAVEHEIGHT: [{validator: this.validateWave, trigger: 'blur'}],
            SA24HWFOFFSHORESW: [{validator: this.validateTemp, trigger: 'blur'}]
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
        public submitClick() {
            if (this.needsubmit.table9needsubmit === true && this.checkValidate() === true) {
                Utils.doSubmit(9, 'AmShortTable9', this.localtable, this.checkSubmit, '上午九')
            }
        }
        @Watch('amshorttable9')
        private onAmShortTable9Changed(val: any, oldVal: any) {
            this.localtable = JSON.parse(JSON.stringify(this.amshorttable9))
            this.checkSubmit()
            this.checkValidate()
        }
        private validateWave(rule: any, value: string, callback: any) {
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
        private validateTemp(rule: any, value: string, callback: any) {
            if (this.usertype !== 'sw') {
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
            this.myThis.$refs.form.validate((valid: boolean) => {
                if (valid === false) {
                    result = false
                }
            })
            this.amshortvalid[9] = result
            return result
        }
        private checkSubmit() {
            this.needsubmit.table9needsubmit = !this.deepEqual(this.amshorttable9, this.localtable)
            if (this.amshortfakedata[9] === true) {
                this.needsubmit.table9needsubmit = true
            }
        }
        private cancelClick() {
            this.localtable = JSON.parse(JSON.stringify(this.amshorttable9))
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

    .body-header-column {
        height: 300px;
        min-width: 100px;
        flex-direction: column;
    }

    .right-column {
        flex: 1;
        height: 100%;
    }

    .content-column {
        flex: 1;
        height: 30px;
        min-width: 120px;
        flex-direction: column;
    }

    .body-content-column {
        flex: 1;
        height: 300px;
        min-width: 120px;
        flex-direction: column;
    }

    .table-body {
        display: flex;
        width: 100%;
        height: 300px;
        flex-direction: row;
    }

    .table-body-row {
        flex: 1;
        width: 100%;
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