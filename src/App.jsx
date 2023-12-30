import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from './Context'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import Profile from './pages/Profile'

function App() {
  const [url, setUrl] = useState('');

  return (
    <>
      <Context.Provider value={{url, setUrl}}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  )
}

export default App
