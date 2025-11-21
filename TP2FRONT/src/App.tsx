import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [page, setPage] = useState<
    "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido">("start");

  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
