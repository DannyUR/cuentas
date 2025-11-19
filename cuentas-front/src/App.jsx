import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'
import Dashboard from './views/Dashboard'
import Users from './views/Users'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/login" element={< Login />} />
        <Route path="/admin" element={<Dashboard />} >
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}