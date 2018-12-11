export default class AmShortInfo11 {
    [key: string]: Date|string
    [index: number]: string
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
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.FORECASTDATE = new Date(new Date().toLocaleDateString())
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
