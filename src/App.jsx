import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import contextUrl from './contextUrl'
import Searched from './pages/Searched'
import Profile from './pages/Profile'

function App() {
  const [url, setUrl] = useState('');
  return (
    <contextUrl.Provider value={{url, setUrl}}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Searched />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </contextUrl.Provider>
  )
}

export default App
