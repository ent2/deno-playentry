# deno-playentry
playentry.org API wrapper for deno
## Use
```ts
import { User, Project, getRankedProjects } from "https://raw.githubusercontent.com/ent2/deno-playentry/main/mod.ts"
```
### Load data
- 데이터는 생성자를 사용할 때 불러오지 않고, 각 속성을 읽을 때 불러옵니다.(Getter)  
  각 속성은 `Promise`이며, `await`를 이용해 실제 값을 불러올 수 있습니다.
- 불러온 데이터는 객체에 저장됩니다. (매번 다시 불러오지 않습니다.)
- 생성자에 이미 불러온 초기값을 제공할 수 있습니다. (데이터를 새로 불러올 때 덮어씌워질 수 있습니다.)
- `User` 생성자에는 `username`, `Project` 생성자에는 `id`가 필수로 제공되어야 합니다.
```ts
const dark = new User({username: "dark"})
console.log(await dark.id) // /api/getUserByUsername/dark 에서 데이터 불러옴
console.log(await dark.id) // 내부 값 (dark.__lw__id) 에서 데이터 불러옴
```
```ts
const project = new Project({
    id: "5d36aa5bb2206a6e4f1c687d",
    name: "3D Test", // 초기값 제공 
})
console.log(await project.recentLikeCount) // /api/project/5d36aa5bb2206a6e4f1c687d 에서 데이터 불러옴
```
## Docs (WIP)
[doc.deno.land](https://doc.deno.land/https/raw.githubusercontent.com/ent2/deno-playentry/main/mod.ts#getUserByUsername)
