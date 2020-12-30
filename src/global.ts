import { basicFetch } from "./util.ts"
import User from "./User.ts"
import Project from "./Project.ts"

/** 스선/인작 작품 목록을 가져온다. */
export async function getRankedProjects(options: {
    type: "staff" | "best"
    rows?: number
}) {
    const res: any[] = await basicFetch("rankProject", {
        type: options.type,
        limit: String(
            options.rows || (
                options.type == "staff"
                    ? 3
                    : 9
            )
        ),
    })
    const projects = res.map(item => {
        return new Project({
            id: item.project._id,
            name: item.project.name,
            owner: new User({
                id: item.project.user._id,
                username: item.project.user.username,
            }),
            thumbURL: "https://playentry.org/" + item.project.thumb,
            visitCount: item.project.visit,
            likeCount: item.project.likeCnt,
            commentCount: item.project.comment,
        })
    })
    return projects
}