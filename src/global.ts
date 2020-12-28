import { basicFetch } from "./util.ts"
import User from "./User.ts"
import Project from "./Project.ts"

/** 유저의 닉네임(아이디)으로 정보를 불러온다. 유저가 존재하지 않는다면 `undefined`를 반환한다. */
export async function getUserByUsername(username: string) {
    const res = await basicFetch(`getUserByUsername/${username}`)
    if (res) {
        let info = Object.assign(res, {
            id: res._id,
            avatarURL: 
                res.avatarImage 
                    ? `https://playentry.org/uploads/profile/${res._id.substring(0, 2)}/${res._id.substring(2, 4)}/avatar_${res._id}.png`
                    : "https://playentry.org/img/assets/avatar_img.png"
        })
        return new User(info)
    }
}

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