import { render } from 'hono/jsx/dom'
import './client.css'
import Todo, { TodoProps } from './components/Todo'

const DATA: TodoProps[] = [
  { id: 'todo-0', name: 'Eat', completed: true, key: 'todo-0' },
  { id: 'todo-1', name: 'Sleep', completed: false, key: 'todo-1' },
  { id: 'todo-2', name: 'Repeat', completed: false, key: 'todo-2' },
]

function App(props: { tasks: TodoProps[] }) {
  const taskList = props.tasks?.map(task => (
    <Todo id={task.id}  key={task.key} name={task.name} completed={task.completed} />
  ))

  return (
    <div>
      <h1>Todo App</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>

        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />

        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  )
}

render(<App tasks={DATA}/>, document.body)
