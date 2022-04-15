import { serve } from "https://deno.land/std@0.114.0/http/server.ts"
import cors from 'https://deno.land/x/edge_cors/src/cors.ts'
async function handler(_req: Request, options) {
  try{
console.log('url', _req.url)
    let data = JSON.stringify({foo:'bar'})
    if(_req.url.includes('?')) {
      const response = await fetch(_req.url.substr(_req.url.indexOf('=') + 1))
      console.log(response)
      data = await response.text()
    }
       
    return cors(_req, new Response(data, {
      headers: { "content-type": "application/json; charset=utf-8" },
    }))
  }catch(error) {
    console.log('error', error)
    return cors(_req, new Response(JSON.stringify({error:'bug'}, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8" },
  }))
  }
}
serve(handler)
