import React from 'react'
import App from '../App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../views/login/Login'
import Means from '../views/means/Means'
import Lists from '../views/list/Lists'
import Register from '../views/register/Register'
import Edit from '../views/edit/Edit'

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/list" element={<Lists />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/means" element={<Means />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
)

export default BaseRouter
