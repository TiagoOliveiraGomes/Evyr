import { useState } from 'react'
import { ConfirmButton } from './components/commons/confirmButton'
import { Map } from './pages/map'
import { StartPage } from './pages/start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Map />
     {/* <StartPage /> */}
    </div>
  )
}

export default App
