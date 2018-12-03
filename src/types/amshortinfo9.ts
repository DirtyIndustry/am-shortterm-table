export default class AmShortInfo9 {
    public PUBLISHDATE: Date
    public SA24HWFBOHAIWAVEHEIGHT: string
    public SA24HWFNORTHOFYSWAVEHEIGHT: string
    public SA24HWFMIDDLEOFYSWAVEHEIGHT: string
    public SA24HWFSOUTHOFYSWAVEHEIGHT: string
    public SA24HWFOFFSHOREWAVEHEIGHT: string
    public SA24HWFOFFSHORESW: string
    constructor() {
        this.PUBLISHDATE = new Date(new Date().toLocaleDateString())
        this.SA24HWFBOHAIWAVEHEIGHT = ''
        this.SA24HWFNORTHOFYSWAVEHEIGHT = ''
        this.SA24HWFMIDDLEOFYSWAVEHEIGHT = ''
        this.SA24HWFSOUTHOFYSWAVEHEIGHT = ''
        this.SA24HWFOFFSHOREWAVEHEIGHT = ''
        this.SA24HWFOFFSHORESW = ''
    }
}
