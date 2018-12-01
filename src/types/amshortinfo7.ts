export default class AmShortInfo7 {
    public PUBLISHDATE: Date
    public REPORTAREA: string
    public FORECASTDATE: Date
    public YRBHWWFWAVEHEIGHT: string
    public YRBHWWFWAVEDIR: string
    public YRBHWWFFLOWDIR: string
    public YRBHWWFFLOWLEVEL: string
    constructor() {
        this.PUBLISHDATE = new Date()
        this.REPORTAREA = ''
        this.FORECASTDATE = new Date()
        this.YRBHWWFWAVEHEIGHT = ''
        this.YRBHWWFWAVEDIR = ''
        this.YRBHWWFFLOWDIR = ''
        this.YRBHWWFFLOWLEVEL = ''
    }
}