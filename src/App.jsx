import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Main from './components/Main'
import Details from './components/Details'
function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/details/:id' element={<Details/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App