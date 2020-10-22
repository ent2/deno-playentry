import User from "./User.ts"

interface ProjectConstructor {
    id: string
    name: string
    owner: User
    thumbURL: string
    updated: Date
    visitCount: number
    likeCount: number
    recentLikeCount: number
    commentCount: number
    childCount: number
}
/** 엔트리 작품을 나타낸다. */
export default class Project implements ProjectConstructor {
    /** 작품의 식별자. 24자리의 16진수. */
    id
    /** 작품의 이름. */
    name
    /** 작품의 제작자 */
    owner
    /** 작품의 썸네일 이미지 URL */
    thumbURL
    /** 작품이 마지막으로 업데이트된 시각 */
    updated
    /** 작품의 조회수 */
    visitCount
    /** 작품의 좋아요 수 */
    likeCount
    /** 작품의 최근(3일간) 받은 좋아요 수 */
    recentLikeCount
    /** 작품의 댓글 수 */
    commentCount
    /** 작품의 사본 수 */
    childCount
    constructor(info: ProjectConstructor) {
        this.id = info.id
        this.name = info.name
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