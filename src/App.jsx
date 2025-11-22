import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LayoutMain from './layout/LayoutMain';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
