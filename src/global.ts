import User from "./User.ts"
import { basicFetch } from "./util.ts"

/** 유저의 닉네임(아이디)으로 정보를 불러온다. 유저가 존재하지 않는다면 `undefined`를 반환한다. */
export async function getUserByUsername (username: string) {
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