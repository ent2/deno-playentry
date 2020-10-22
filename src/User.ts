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
}