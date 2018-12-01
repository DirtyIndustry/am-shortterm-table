export default class AmShortInfo12 {
    public PUBLISHDATE: Date
    public FORECASTDATE: Date
    public WEATERSTATE: string
    public TEMPERATURE: string
    public WINDSPEED: string
    public WINDDIRECTION: string
    public WAVEHEIGHT: string
    constructor() {
        this.PUBLISHDATE = new Date()
        this.FORECASTDATE = new Date()
        this.WEATERSTATE = ''
        this.TEMPERATURE = ''
        this.WINDSPEED = ''
        this.WINDDIRECTION = ''
        this.WAVEHEIGHT = ''
    }
}
