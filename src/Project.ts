import User from "./User.ts"

interface ProjectConstructor {
    /** 작품의 식별자. 24자리의 16진수. */
    id: string
    /** 작품의 이름. */
    name: string
    /** 작품의 제작자 */
    owner: User
    /** 작품의 썸네일 이미지 URL */
    thumbURL: string
    /** 작품이 마지막으로 업데이트된 시각 */
    updated: Date
    /** 작품의 조회수 */
    visitCount: number
    /** 작품의 좋아요 수 */
    likeCount: number
    /** 작품의 최근(3일간) 받은 좋아요 수 */
    recentLikeCount: number
    /** 작품의 댓글 수 */
    commentCount: number
    /** 작품의 사본 수 */
    childCount: number
}
/** 엔트리 작품을 나타낸다. */
export default class Project implements ProjectConstructor {
    id
    name
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