const svgServe = async ({ request, env }) => {
    const url = new URL(request.url)
    const file = url.pathname.split('/').reverse()[0]
    const filename = file.split('.').pop()
    const extension = file.split('.').reverse()[0]
    console.log(`filename === ${filename}`)
    console.log(`extension === ${extension}`)

    if (extension === 'svg') {
        console.log(`Images URL === https://imagedelivery.net/${env.ACCOUNT_HASH}/${filename}/${extension}`)
        return fetch(`https://imagedelivery.net/${env.ACCOUNT_HASH}/${filename}/${extension}`)
    }

    return env.ASSETS.fetch(url)
}

export const onRequest = [svgServe]