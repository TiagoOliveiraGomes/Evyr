import { useState } from 'react'
import { ConfirmButton } from './components/commons/confirmButton'
import { StartPage } from './pages/start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <StartPage />
    </div>
  )
}

export default App
