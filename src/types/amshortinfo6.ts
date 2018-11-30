export default class AmShortInfo1 {
    public PUBLISHDATE: Date
    public TLFORECASTSTANCE: string
    public FORECASTDATE: Date
    public TLFIRSTWAVEOFTIME: string
    public TLFIRSTWAVETIDELEVEL: string
    public TLFIRSTTIMELOWTIDE: string
    public TLLOWTIDELEVELFORTHEFIRSTTIME: string
    public TLSECONDWAVEOFTIME: string
    public TLSECONDWAVETIDELEVEL: string
    public TLSECONDTIMELOWTIDE: string
    public TLLOWTIDELEVELFORTHESECONDTIME: string
    constructor() {
        this.PUBLISHDATE = new Date()
        this.TLFORECASTSTANCE = ''
        this.FORECASTDATE = new Date()
        this.TLFIRSTWAVEOFTIME = ''
        this.TLFIRSTWAVETIDELEVEL = ''
        this.TLFIRSTTIMELOWTIDE = ''
        this.TLLOWTIDELEVELFORTHEFIRSTTIME = ''
        this.TLSECONDWAVEOFTIME = ''
        this.TLSECONDWAVETIDELEVEL = ''
        this.TLSECONDTIMELOWTIDE = ''
        this.TLLOWTIDELEVELFORTHESECONDTIME = ''
    }
}
