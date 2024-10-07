import {resize_image} from './rustimg'

export default {
	async fetch(request, env, ctx): Promise<Response> {
		if (request.method !== 'GET') {
			return new Response('Not Found', {status: 404})
		}
		const {pathname,searchParams} = new URL(request.url)
		if (pathname === "/favicon.ico") {
			return new Response('Not Found', {status: 404})
		}
		const imgUrl = searchParams.get('url') || "https://cdn.imgwrap.com/zelda.png"
		const width = Number(searchParams.get('width')) || 100
		const height = Number(searchParams.get('height')) || 100

		const response = await fetch(imgUrl)
		const data = resize_image(new Uint8Array(await response.arrayBuffer()), width, height)
		return new Response(data,{
			headers: {
				"Content-Type": "image/webp"
			}
		});
	},
} satisfies ExportedHandler<Env>;
