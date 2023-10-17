const svgServe = async ({ request, env }) => {
    const url = new URL(request.url)
    const extension = url.split(/[#?]/)[0].split('.').pop().trim()
    console.log(extension)

    if (extension === 'svg') {
        return new Response('Ok');
    }

    return env.ASSETS.fetch(url)
}

export const onRequest = [svgServe]