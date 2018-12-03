export default class AmShortInfo8 {
    public PUBLISHDATE: Date
    public HTLHARBOUR: string
    public FORECASTDATE: Date
    public HTLFIRSTWAVEOFTIME: string
    public HTLFIRSTWAVETIDELEVEL: string
    public HTLFIRSTTIMELOWTIDE: string
    public HTLLOWTIDELEVELFORTHEFIRSTTIME: string
    public HTLSECONDWAVEOFTIME: string
    public HTLSECONDWAVETIDELEVEL: string
    public HTLSECONDTIMELOWTIDE: string
    public HTLLOWTIDELEVELFORTHESECONDTIM: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.HTLHARBOUR = ''
        this.FORECASTDATE = new Date(new Date().toLocaleDateString())
        this.HTLFIRSTWAVEOFTIME = ''
        this.HTLFIRSTWAVETIDELEVEL = ''
        this.HTLFIRSTTIMELOWTIDE = ''
        this.HTLLOWTIDELEVELFORTHEFIRSTTIME = ''
        this.HTLSECONDWAVEOFTIME = ''
        this.HTLSECONDWAVETIDELEVEL = ''
        this.HTLSECONDTIMELOWTIDE = ''
        this.HTLLOWTIDELEVELFORTHESECONDTIM = ''
    }
}
