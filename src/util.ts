/** `param`을 자동으로 처리해 `fetch`한다. URL의 `https://playentry.org/api/` 부분은 생략해서 써야한다. */
export async function basicFetch (urlStr: string, params?: Record<string, string>) {
    const url = new URL("https://playentry.org/api/" + urlStr)
    url.search = new URLSearchParams(params).toString()
    return await fetch(url).then(res => res.json())
}