import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

{/* comment */}

function App() {
  const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([
    /*   { id: 1, title: "Study React", completed: false }, */
  
    { id: 1, title: "Work on My VITE/React Project", completed: false },
    { id: 2, title: "Complete Part3:Unit Testing og IN4240-ASN1 - deadline⚡"},
    { id: 3, title: "Group meeting tomorrow: Kl.12 @ SIMULA"},
    { id: 4, title: "Walk with Maya `♡´"},
    { id: 5, title: "Shopping & cooking"},
    { id: 6, title: "Prepare for the SINTEF-meeting"},
    { id: 7, title: "Cleaning"},
])

const toggleTask = (id) => {
  setTasks(tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  ))
}

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

  {tasks.map(task => (
    <div
      key={task.id}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        margin: "10px auto",
        maxWidth: "500px",
        borderRadius: "10px",
        background: task.completed ? "#e6f7ec" : "#ffffff",
        border: "1px solid #ddd"
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{
        textDecoration: task.completed ? "line-through" : "none",
        fontWeight: 500
      }}>
        {task.title}
      </span>
    </div>
  ))}
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
