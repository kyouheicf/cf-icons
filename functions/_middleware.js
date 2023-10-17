const svgServe = async ({ request, env }) => {
    const url = new URL(request.url)
    const file = url.pathname.split('/').reverse()[0]
    const filename = file.split('.')[0]
    const extension = file.split('.')[1]
    console.log(extension)

    if (extension === 'svg') {
        return fetch(`https://imagedelivery.net/${env.ACCOUNT_HASH}/${filename}/${extension}`)
    }

    return env.ASSETS.fetch(url)
}

export const onRequest = [svgServe]