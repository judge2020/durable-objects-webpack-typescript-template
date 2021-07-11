export { Counter } from './counter'

export default {
    async fetch(request: Request, env: DurableObjectEnv) {
        try {
            return await handleRequest(request, env)
        } catch (e) {
            return new Response(e.message)
        }
    },
}

async function handleRequest(request: Request, env: DurableObjectEnv) {
    let id = env.COUNTER.idFromName('A')
    let obj = env.COUNTER.get(id)
    let resp = await obj.fetch(request.url)
    let count = parseInt(await resp.text())
    let wasOdd = (Math.abs(count) % 2) === 1 ? 'is odd' : 'is even'

    return new Response(`${count} ${wasOdd}`)
}
