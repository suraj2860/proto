import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Models from './components/Models'
import Home from './components/Home'
import Build from './components/Build'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/models' element={<Models />}/>
          <Route path='/build' element={<Build />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
