import { observable, action, flow } from 'mobx'
import axios from 'axios'

export interface Resource {
    id: string
}

export interface Blog {
    from: string,
    title: string,
    tags: string[],
    content: string
}

export default class ResourceStore {
    @observable resources:any = []
    prevQuery: string
    offset: number
        
    reload = flow(function * (query: string):any {
        try {
            let res = yield axios.get(encodeURI(`http://localhost:8070/resources/search?q=${query}`))
            this.resources = res.data
            this.prevQuery = query
            this.offset = res.data.length
        } catch(err) {
            console.log(err)
        }
    })

    loadMore = flow(function * ():any {
        try {
            let res = yield axios.get(encodeURI(`http://localhost:8070/resources/search?q=${this.prevQuery}&offset=${this.offset}`))
            this.resources.push(...res.data)
            this.offset += res.data.length
        } catch(err) {
            console.log(err)
        }
    })

    addBlog = flow(function * (blog: Blog): any {
        try {
            let body = [blog.from, blog.title, blog.tags.join("\n"), blog.content].join("\n")
            let res = yield axios.post('http://localhost:8070/resources/blog', body)
        } catch(err) {
            console.log(err)
        }
    })

    updateTags = flow(function * (id: string, tags: string[]):any {
        try {
            let body = {id, tags}
            let res = yield axios.post('http://localhost:8070/resources/tags', body)
        } catch(err) {
            console.log(err)
        }
    })
}
