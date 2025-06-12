import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{
          color: "green"
        }}>

          ReBlog

        </h1>
        <p>Rethink Rewrite & ReBlog</p>

      </div>
    </>
  )
}

export default App
