import { basicFetch } from "./util.ts"
import Project from "./Project.ts"

interface UserConstructor {
    language: string
    role: "member" | "teacher" | "admin"
    id: string
    username: string
    description: string
    avatarURL: string
}
export default class User implements UserConstructor {
    language
    role
    id
    username
    description
    avatarURL
    constructor(info: UserConstructor) {
        this.language = info.language
        this.role = info.role
        this.id = info.id
        this.username = info.username,
        this.description = info.description
        this.avatarURL = info.avatarURL
    }

    async findProjects(options?: {
        sort?: "updated" | "recent" | "complexity" | "staffPicked" | "childCnt" | "recentLikeCnt"
        rows?: number
    }) {
        const res: {
            data: any[]
        } = await basicFetch("project/find", {
            user: this.id,
            sort: options?.sort || "recent",
            rows: options?.rows?.toString() || "0",
            blamed: "false",
        })
        const projects = res.data.map(project => {
            const info = {
                id: project._id,
                owner: this,
                thumbURL: "https://playentry.org" + project.thumb,
                updated: project.updated,
                visitCount: project.visit,
                likeCount: project.likeCnt,
                recentLikeCount: project.recentLikeCnt,
                commentCount: project.comment,
                childCount: project.childCnt,
            }
            return new Project(info)
        })
        return projects
    }
}