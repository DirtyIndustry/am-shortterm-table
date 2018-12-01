export default class AmShortInfo11 {
    public PUBLISHDATE: Date
    public FORECASTDATE: Date
    public FIRSTHIGHTIME: string
    public FIRSTHIGHLEVEL: string
    public FIRSTLOWTIME: string
    public FIRSTLOWLEVEL: string
    public SECONDHIGHTIME: string
    public SECONDHIGHLEVEL: string
    public SECONDLOWTIME: string
    public SECONDLOWLEVEL: string
    constructor() {
        this.PUBLISHDATE = new Date()
        this.FORECASTDATE = new Date()
        this.FIRSTHIGHTIME = ''
        this.FIRSTHIGHLEVEL = ''
        this.FIRSTLOWTIME = ''
        this.FIRSTLOWLEVEL = ''
        this.SECONDHIGHTIME = ''
        this.SECONDHIGHLEVEL = ''
        this.SECONDLOWTIME = ''
        this.SECONDLOWLEVEL = ''
    }
}
