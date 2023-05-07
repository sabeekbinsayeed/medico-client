import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
