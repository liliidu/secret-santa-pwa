import { useState } from 'react'
import './App.css'
import { SecretSantaLogo } from './components/SecretSantaLogo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SecretSantaLogo />
    </>
  )
}

export default App
