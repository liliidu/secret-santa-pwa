import { useState } from 'react'
import { StartPage } from '@/pages/StartPage'
import { SecretSantaPage } from '@/pages/SecretSantaPage'

import './App.css'
function App() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <>
      {isStarted ? <SecretSantaPage/> : <StartPage onStartClick={() => setIsStarted(!isStarted)} />}
    </>
  )
}

export default App
