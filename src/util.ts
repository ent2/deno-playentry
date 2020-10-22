import User from "./User.ts"

export const basicFetch = async (urlStr: string, params?: Record<string, string>) => {
    const url = new URL("https://playentry.org/api/" + urlStr)
    url.search = new URLSearchParams(params).toString()
    return await fetch(url).then(res => res.json())
}

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