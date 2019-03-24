import { observable, action, flow } from 'mobx'
import * as _ from 'lodash'

import {invokeRPC, notify} from './common'
import ResourceStore from './resourceStore'

export default class TagStore {
    @observable editTagModalBuffer: any = {id: "", tags: []}
    @observable editTagModalVisible: boolean = false

    rs: ResourceStore

    constructor(rs: ResourceStore) {
        this.rs = rs
    }

    @action
    showEditTagModal(id:string, tags: string[]) {
        this.editTagModalVisible = true
        this.editTagModalBuffer.id = id
        this.editTagModalBuffer.tags = tags
    }

    @action
    hideEditTagModal() {
        this.editTagModalVisible = false        
    }

    @action
    addTag(tag:string) {
        this.editTagModalBuffer.tags.push(tag)
    }
    @action
    removeTag(tag:string) {
        this.editTagModalBuffer.tags.remove(tag)
    }

    updateTags = flow(function * updateTags(id: string, tags: string[]):any {
        try {
            yield invokeRPC("updateTags", id, tags)
            notify.info("更新成功")
            let target = _.find(this.rs.resources, {id}) as any
            target.tags.replace(tags)
            // connecting elemtn only react to this.resource, not this.resource[n].tags
            // so we need this method to force update
            this.rs.resources.replace(this.rs.resources) 
        } catch(err) {
            notify.warn("更新失败")
            console.log(err)
        }
    })
}