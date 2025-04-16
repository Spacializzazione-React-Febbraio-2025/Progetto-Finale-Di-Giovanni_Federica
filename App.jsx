import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CityDetail from './pages/CityDetail'
import { AuthProvider } from './context/AuthContext'
import { WeatherProvider } from './context/WeatherContext'

function App() {
  return (
    <AuthProvider>
      <WeatherProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/city/:name' element={<CityDetail />} />
          </Routes>
        </Router>
      </WeatherProvider>
    </AuthProvider>
  )
}

export default App