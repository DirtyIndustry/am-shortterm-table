export default class PublishInfo {
    public PUBLISHDATE: Date
    public PUBLISHHOUR: string
    public FRELEASEUNIT: string
    public FTELEPHONE: string
    public FFAX: string
    public FWAVEFORECASTER: string
    public FTIDALFORECASTER: string
    public FWATERTEMPERATUREFORECASTER: string
    public FWAVEFORECASTERTEL: string
    public FTIDALFORECASTERTEL: string
    public FWATERTEMPERATUREFORECASTERTEL: string
    public ZHIBANTEL: string
    public SENDTEL: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.PUBLISHHOUR = ''
        this.FRELEASEUNIT = ''
        this.FTELEPHONE = ''
        this.FFAX = ''
        this.FWAVEFORECASTER = ''
        this.FTIDALFORECASTER = ''
        this.FWATERTEMPERATUREFORECASTER = ''
        this.FWAVEFORECASTERTEL = ''
        this.FTIDALFORECASTERTEL = ''
        this.FWATERTEMPERATUREFORECASTERTEL = ''
        this.ZHIBANTEL = ''
        this.SENDTEL = ''
    }
}
