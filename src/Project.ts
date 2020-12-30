import { Lw, LwInterface } from "./deps.ts"

import User from "./User.ts"
import { basicFetch, LwProp } from "./util.ts"

interface ProjectConstructor {
    /** 작품의 식별자. 24자리의 16진수. */
    id: string
    /** 작품의 이름. */
    name?: string
    /** 작품의 제작자 */
    owner?: User
    /** 작품의 썸네일 이미지 URL */
    thumbURL?: string
    /** 작품이 마지막으로 업데이트된 시각 */
    updated?: Date
    /** 작품의 조회수 */
    visitCount?: number
    /** 작품의 좋아요 수 */
    likeCount?: number
    /** 작품의 최근(3일간) 받은 좋아요 수 */
    recentLikeCount?: number
    /** 작품의 댓글 수 */
    commentCount?: number
    /** 작품의 사본 수 */
    childCount?: number
}
type _LwProp<N extends keyof ProjectConstructor> = LwProp<ProjectConstructor, N>
/** 엔트리 작품을 나타낸다. */
export default class Project implements LwInterface<ProjectConstructor> {
    id
    @Lw("getinfo") name: _LwProp<"name">
    @Lw("getinfo") owner: _LwProp<"owner">
    @Lw("getinfo") thumbURL: _LwProp<"thumbURL">
    @Lw("getinfo") updated: _LwProp<"updated">
    @Lw("getinfo") visitCount: _LwProp<"visitCount">
    @Lw("getinfo") likeCount: _LwProp<"likeCount">
    @Lw("getinfo") recentLikeCount: _LwProp<"recentLikeCount">
    @Lw("getinfo") commentCount: _LwProp<"commentCount">
    @Lw("getinfo") childCount: _LwProp<"childCount">
    constructor(info: ProjectConstructor) {
        this.id = info.id
        this.name = info.name!
        this.owner = info.owner!
        this.thumbURL = info.thumbURL!
        this.updated = info.updated!
        this.visitCount = info.visitCount!
        this.likeCount = info.likeCount!
        this.recentLikeCount = info.recentLikeCount!
        this.commentCount = info.commentCount!
        this.childCount = info.childCount!
    }
    async getInfo() {
        const res = await basicFetch(`project/${this.id}`)
        this.name = res.name
        this.owner = new User({
            id: res.user._id,
            username: res.user.username,
        })
        this.thumbURL = "https://playentry.org/" + res.thumb
        this.updated = new Date(res.updated)
        this.visitCount = res.visit
        this.likeCount = res.likeCnt
        this.recentLikeCount = res.recent
        this.commentCount = res.comment
        this.childCount = res.childCnt
    }
}