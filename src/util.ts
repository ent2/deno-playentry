import User from "./User.ts"

/** `param`을 자동으로 처리해 `fetch`한다. URL의 `https://playentry.org/api/` 부분은 생략해서 써야한다. */
export const basicFetch = async (urlStr: string, params?: Record<string, string>) => {
    const url = new URL("https://playentry.org/api/" + urlStr)
    url.search = new URLSearchParams(params).toString()
    return await fetch(url).then(res => res.json())
}

/** 유저의 닉네임(아이디)로 정보를 불러온다. */
export const getUserByUsername = async (username: string) => {
    const res = await basicFetch(`getUserByUsername/${username}`)
    let info = Object.assign(res, {
        id: res._id,
        avatarURL: 
            res.avatarImage 
                ? `https://playentry.org/uploads/profile/${res._id.substring(0, 2)}/${res._id.substring(2, 4)}/avatar_${res._id}.png`
                : "https://playentry.org/img/assets/avatar_img.png"
    })
    return new User(info)
}