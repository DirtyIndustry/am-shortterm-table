export default class AmShortInfo12 {
    [key: string]: Date|string
    [index: number]: string
    public PUBLISHDATE: Date
    public FORECASTDATE: Date
    public WEATERSTATE: string
    public TEMPERATURE: string
    public WINDSPEED: string
    public WINDDIRECTION: string
    public WAVEHEIGHT: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.FORECASTDATE = new Date(new Date().toLocaleDateString())
        this.WEATERSTATE = ''
        this.TEMPERATURE = ''
        this.WINDSPEED = ''
        this.WINDDIRECTION = ''
        this.WAVEHEIGHT = ''
    }
}
