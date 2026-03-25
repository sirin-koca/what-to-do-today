import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

{/* comment */}

function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem('tasks')
  return savedTasks
    ? JSON.parse(savedTasks)
    : []
})

const [newTask, setNewTask] = useState('')
  
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

const addTask = () => {
  if (newTask.trim() === '') return

  const task = {
    id: Date.now(),
    title: newTask,
    completed: false,
  }

  setTasks([...tasks, task])
  setNewTask('')
}

const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}



    {/*   { id: 1, title: "Study React", completed: false }, 
  
    { id: 1, title: "Work on My VITE/React Project", completed: false },
    { id: 2, title: "Complete Part3:Unit Testing IN4240-ASN1-deadline⚡"},
    { id: 3, title: "Group meeting tomorrow: Kl.12 @ SIMULA"},
    { id: 4, title: "Walk with Maya `♡´"},
    { id: 5, title: "Shopping & cooking"},
    { id: 6, title: "Prepare for the SINTEF-meeting"},
    { id: 7, title: "Cleaning"},
])
*/}

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>What To-Do Today </h1>
          <p>
            <code>· ⋆˚🐾˖° · made by sirinko · ⋆˚🐾˖° ·</code>
          </p>
        </div>

        {/*
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        */}

      </section>

      {/* TO-DO LIST STARTS HERE */}
<section id="todo">
  <h2>My Tasks</h2>

  <div className="todo-input-row">
    <input
      type="text"
      placeholder="Add a new task..."
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') addTask()
      }}
    />
    <button onClick={addTask}>Add</button>
  </div>

  {tasks.length === 0 ? (
    <p>No tasks yet.</p>
  ) : (
    tasks.map((task) => (
      <div key={task.id} className="task-card">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className={task.completed ? 'done' : ''}>
          {task.title}
        </span>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    ))
  )}
</section>

      <div className="todo-container">
        {/* your interactive list here */}
      </div>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Todays Focus</h2>
          <p>live - love - smile </p>
          <ul>
            <li>

               {/*                 
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
              */}

            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect</h2>
          <ul>
            <li>
              <a href="https://github.com/sirin-koca" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
