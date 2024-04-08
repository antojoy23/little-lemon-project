import React from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import TableReservation from './TableReservation'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<HomePage />}></Route>
      <Route path="/menu" element={<HomePage />}></Route>
      <Route path="/reserve" element={<TableReservation />}></Route>
    </Routes>
  )
}
