# proxy-deno

https://proxy-deno.deno.dev/


```js
const o = await ( await fetch ('https://proxy-deno.deno.dev/?url=https://api.deezer.com/search?q=artist:"coldplay"')).json()
