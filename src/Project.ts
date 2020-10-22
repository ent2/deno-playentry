import User from "./User.ts"

interface ProjectConstructor {
    id: string
    owner: User
    thumbURL: string
    updated: Date
    visitCount: number
    likeCount: number
    recentLikeCount: number
    commentCount: number
    childCount: number
}
export default class Project implements ProjectConstructor {
    id
    owner
    thumbURL
    updated
    visitCount
    likeCount
    recentLikeCount
    commentCount
    childCount
    constructor(info: ProjectConstructor) {
        this.id = info.id
        this.owner = info.owner
        this.thumbURL = info.thumbURL
        this.updated = info.updated
        this.visitCount = info.visitCount
        this.likeCount = info.likeCount
        this.recentLikeCount = info.recentLikeCount
        this.commentCount = info.commentCount
        this.childCount = info.childCount
    }
}