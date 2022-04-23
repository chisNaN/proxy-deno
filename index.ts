import { serve } from "https://deno.land/std/http/server.ts"
// import { serve } from "https://deno.land/std@0.114.0/http/server.ts"
import cors from 'https://deno.land/x/edge_cors/src/cors.ts'
async function handler(_req: Request, options) {
  try{
    
console.log('url', _req.url)
    let data = JSON.stringify({error:'Provide a valid http URL'})
    const url = new URL(_req.url)
    const api = url.searchParams.get('url')
    if(api) {
      const response = await fetch(api)
      console.log(response)
      data = await response.text()
    }
       
    return cors(_req, new Response(data, {
      headers: { "content-type": "application/json; charset=utf-8" },
    }))
  }catch(error) {
    console.log('error', error)
    return cors(_req, new Response(JSON.stringify({error:'404 NOT FOUND'}, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8" },
  }))
  }
}
serve(handler)
