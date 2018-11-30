export default class AmShortInfo1 {
    public PUBLISHDATE: Date
    public REPORTAREA: string
    public FORECASTDATE: Date
    public YRBHWWFWAVEHEIGHT: string
    public YRBHWWFWAVEDIR: string
    public YRBHWWFFLOWDIR: string
    public YRBHWWFFLOWLEVEL: string
    public YRBHWWFWATERTEMPERATURE: string
    constructor() {
        this.PUBLISHDATE = new Date()
        this.REPORTAREA = ''
        this.FORECASTDATE = new Date()
        this.YRBHWWFWAVEHEIGHT = ''
        this.YRBHWWFWAVEDIR = ''
        this.YRBHWWFFLOWDIR = ''
        this.YRBHWWFFLOWLEVEL = ''
        this.YRBHWWFWATERTEMPERATURE = ''
    }
}
