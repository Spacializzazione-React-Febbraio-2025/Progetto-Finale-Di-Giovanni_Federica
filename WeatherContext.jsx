import { createContext, useContext, useState } from 'react'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [favorites, setFavorites] = useState([])

  const value = { weatherData, setWeatherData, favorites, setFavorites }
  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)