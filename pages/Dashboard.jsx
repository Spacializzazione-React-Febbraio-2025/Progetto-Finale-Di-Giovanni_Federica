import { useState } from 'react'
import { useWeather } from '../context/WeatherContext'
import { fetchWeatherByCity } from '../services/weatherApi'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [city, setCity] = useState('')
  const { weatherData, setWeatherData } = useWeather()

  const handleSearch = async () => {
    const data = await fetchWeatherByCity(city)
    setWeatherData(data)
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <input className="border p-2 mr-2" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Inserisci città" />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSearch}>Cerca</button>

      {weatherData && (
        <div className="mt-4 border p-4">
          <h3 className="text-lg font-semibold">{weatherData.name}</h3>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condizioni: {weatherData.weather[0].description}</p>
          <Link to={`/city/${weatherData.name}`} className="text-blue-600 underline">Dettagli</Link>
        </div>
      )}
    </div>
  )
}

export default Dashboard