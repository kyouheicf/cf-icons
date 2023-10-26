const svgServe = async ({ request, env }) => {
    const url = new URL(request.url)
    const file = url.pathname.split('/').reverse()[0]
    const filename = file.split('.').pop()
    const extension = file.split('.').reverse()[0]
    console.log(extension)

    if (extension === 'svg') {
        return fetch(`https://imagedelivery.net/${env.ACCOUNT_HASH}/${filename}/${extension}`)
    }

    return env.ASSETS.fetch(url)
}

export const onRequest = [svgServe]