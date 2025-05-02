import { Hono } from 'hono'
//hono is a routing engine for cloudflare workers and other serverless platforms
const app = new Hono()
//c: context which has many props as headers, req, res, json, etc
//simple middleware function that logs the request method and URL
async function authMiddleware(c:any,next:any){
  // The tsconfig.json created by tools like npm create hono@latest is usually tailored for server-side or edge environments
  // and may not include the DOM types by default. You can add them manually if needed.
  console.log(`Request method: ${c.req.method}, URL: ${c.req.url}`);
  //auth logic
  if(c.req.headers("authorization")){
    //logic
    await next();
  }else{
    return c.text('Unauthorized', 401);
  }
}
// app.use(authMiddleware);
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
