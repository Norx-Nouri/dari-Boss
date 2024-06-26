import {BrowserRouter , Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './page/Home'
import Login from './page/Login'
import SingUp from './page/SingUp'
import Profile from './page/Profile'
import Header from './Composant/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Sing-Up" element={<SingUp/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Profile" element={<Profile/>} />


    </Routes>
    </BrowserRouter>
  )
}
