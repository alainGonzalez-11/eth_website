import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'

function App() {

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
