export default class AmShortInfo6 {
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
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.TLFORECASTSTANCE = ''
        this.FORECASTDATE = new Date(new Date().toLocaleDateString())
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
