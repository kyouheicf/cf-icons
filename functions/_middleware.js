const svgServe = async ({ request, env }) => {
    const url = new URL(request.url)
    const extension = url.pathname.split('/').reverse()[0].split('.')[1]
    console.log(extension)

    if (extension === 'svg') {
        return new Response('Ok');
    }

    return env.ASSETS.fetch(url)
}

export const onRequest = [svgServe]