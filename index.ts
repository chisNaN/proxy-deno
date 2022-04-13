import { serve } from "https://deno.land/std@0.114.0/http/server.ts"
import cors from 'https://deno.land/x/edge_cors/src/cors.ts'
async function handler(_req: Request, options) {
  try{
console.log(Request)

    let body = JSON.stringify(data, null, 2)
   
    return cors(_req, new Response(body, {
      headers: { "content-type": "application/json; charset=utf-8" },
    }))
  }catch(error) {
    return cors(_req, new Response(JSON.stringify(error, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8" },
  }))
  }
}
