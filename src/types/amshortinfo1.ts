export default class AmShortInfo1 {
    [key: string]: Date|string
    [index: number]: string
    public PUBLISHDATE: Date
    public REPORTAREA: string
    public FORECASTDATE: Date
    public YRBHWWFWAVEHEIGHT: string
    public YRBHWWFWAVEDIR: string
    public YRBHWWFFLOWDIR: string
    public YRBHWWFFLOWLEVEL: string
    public YRBHWWFWATERTEMPERATURE: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.REPORTAREA = ''
        this.FORECASTDATE = new Date(new Date().toLocaleDateString())
        this.YRBHWWFWAVEHEIGHT = ''
        this.YRBHWWFWAVEDIR = ''
        this.YRBHWWFFLOWDIR = ''
        this.YRBHWWFFLOWLEVEL = ''
        this.YRBHWWFWATERTEMPERATURE = ''
    }
}
