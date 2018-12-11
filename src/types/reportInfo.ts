export default class ReportInfo {
    public reportStatus: string
    public reportTitle: string
    public reportStatusDesc: string
    public reportButtonDisable: boolean
    public datasource: number[]
    constructor() {
        this.reportStatus = 'ready'
        this.reportTitle = '预报单'
        this.reportStatusDesc = '准备就绪, 可以生成预报单'
        this.reportButtonDisable = false
        this.datasource = []
    }
}
