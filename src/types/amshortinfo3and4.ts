export default class AmShortInfo3and4 {
    [key: string]: Date|string
    [index: number]: string
    public PUBLISHDATE: Date
    public METEOROLOGICALREVIEW: string
    public METEOROLOGICALREVIEW24HOUR: string
    public METEOROLOGICALREVIEW7DAYS: string
    public METEOROLOGICALREVIEWCX: string
    public METEOROLOGICALREVIEW24HOURCX: string
    public METEOROLOGICALREVIEW7DAYSCX: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.METEOROLOGICALREVIEW = ''
        this.METEOROLOGICALREVIEW24HOUR = ''
        this.METEOROLOGICALREVIEW7DAYS = ''
        this.METEOROLOGICALREVIEWCX = ''
        this.METEOROLOGICALREVIEW24HOURCX = ''
        this.METEOROLOGICALREVIEW7DAYSCX = ''
    }
}
