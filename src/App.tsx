import { useState } from 'react'
import { ConfirmButton } from './components/commons/confirmButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <ConfirmButton>Iniciar</ConfirmButton>
    </div>
  )
}

export default App
