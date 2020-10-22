export const basicFetch = async (urlStr: string, params?: Record<string, string>) => {
    const url = new URL("https://playentry.org/api/" + urlStr)
    url.search = new URLSearchParams(params).toString()
    return await fetch(url).then(res => res.json())
}