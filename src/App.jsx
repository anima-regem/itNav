import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <iframe src='https://app.mappedin.com/map/65fbc2aa7c0c4fe5b4cc4683/directions?floor=m_c235d70c9e691132&location=s_fca685ba2c784ab7&departure=s_c0ed60b6daeada7c'/>
    </>
  )
}

export default App
