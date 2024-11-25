import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutUs from "./pages/AboutUs.jsx"
import Blog from './pages/Blog.jsx'
import DefaultLayout from "./pages/DefaultLayout.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/blog' element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
