import React from 'react'
import Cuisine from './Cuisine'
import Home from './Home'
import Searched from './Searched'
import { Routes, Route, useLocation} from 'react-router-dom'
import Recepie from './Recepie'
import {AnimatePresence} from 'framer-motion'
function Pages() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes Location={location} key={location.path}>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        <Route path="/searched/:searched" element={<Searched/>} />
        <Route path="/recepie/:id" element={<Recepie/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages