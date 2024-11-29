import { render } from 'hono/jsx/dom'

function App() {
  return (
    <div>
      <h1>Hello Hono!!!</h1>
    </div>
  )
}

render(<App />, document.body)