import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.use(
  '/*',
  serveStatic({
    root: './',
    rewriteRequestPath: (path) => path.replace(/\/static/, 'dist/static'),
  })
)
app.get('/', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo App</title>
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js"></script>
        ) : (
          <script type="module" src="/src/client.tsx"></script>
        )}
      </head>
      <body></body>
    </html>
  )
})

export default app
