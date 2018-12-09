export default class NeedSubmitInfo {
    [key: string]: boolean
    public table1needsubmit: boolean
    public table2needsubmit: boolean
    public table3needsubmit: boolean
    public table4needsubmit: boolean
    public table5needsubmit: boolean
    public table6needsubmit: boolean
    public table7needsubmit: boolean
    public table8needsubmit: boolean
    public table9needsubmit: boolean
    public table10needsubmit: boolean
    public table11needsubmit: boolean
    public table12needsubmit: boolean
    public tablePublishMetaneedsubmit: boolean

    constructor() {
        this.table1needsubmit = false
        this.table2needsubmit = false
        this.table3needsubmit = false
        this.table4needsubmit = false
        this.table5needsubmit = false
        this.table6needsubmit = false
        this.table7needsubmit = false
        this.table8needsubmit = false
        this.table9needsubmit = false
        this.table10needsubmit = false
        this.table11needsubmit = false
        this.table12needsubmit = false
        this.tablePublishMetaneedsubmit = false
    }
    public *[Symbol.iterator](): IterableIterator<boolean> {
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                yield this[key]
            }
        }
    }
}
