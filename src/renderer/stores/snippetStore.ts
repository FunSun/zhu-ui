import { observable, action, flow } from 'mobx'
import * as _ from 'lodash'
import BasicStore, {invokeRPC} from './basicStore'

export default class SnippetStore {
    @observable visible: boolean = false
    @observable content: string = ""
    @observable id: string = ""

    bs: BasicStore
    saved: boolean

    constructor(bs: BasicStore) {
        this.bs = bs
    }

    @action
    showSnippetModal() {
        this.visible = true
    }

    @action
    hideSnippetModal() {
        this.visible = false
        if (this.saved) {
            this.id = ""
            this.content = ""
            this.saved = false
        }
    }

    @action
    editSnippet(id:string, content:string) {
        this.visible = true
        this.id  = id
        this.content = content
    }

    submitSnippet = flow(function * addSnippet(content:string, tags: string[]): any {
        if (this.id === "") {
            try {
                let res = yield invokeRPC("addPageX", content, tags)
                this.id = res.id
                this.bs.notify("添加成功")
            } catch(err) {
                this.bs.notify("添加失败", "error")    
                console.log(err)
            }
        } else {
            try {
                yield invokeRPC("updatePageX", this.id, content, tags)
                this.bs.notify("添加成功")
            } catch(err) {
                this.bs.notify("添加失败", "error")
                console.log(err)
            }
        }
        this.saved = true
    })
}