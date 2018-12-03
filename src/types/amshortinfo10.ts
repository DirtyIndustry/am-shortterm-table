export default class AmShortInfo10 {
    public PUBLISHDATE: Date
    public FORECASTDATE: Date
    public WAVELEVELONE: string
    public WAVELEVELTYPE: string
    public WAVEDIRECTION: string
    public WATERTEMPERATURE: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.FORECASTDATE = new Date(new Date().toLocaleDateString())
        this.WAVELEVELONE = ''
        this.WAVELEVELTYPE = ''
        this.WAVEDIRECTION = ''
        this.WATERTEMPERATURE = ''
    }
}
