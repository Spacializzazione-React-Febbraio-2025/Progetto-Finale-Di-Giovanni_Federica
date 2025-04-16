import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchWeatherByCity } from '../services/weatherApi'

const CityDetail = () => {
  const { name } = useParams()
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchWeatherByCity(name)
      setDetails(data)
    }
    getDetails()
  }, [name])

  if (!details) return <p>Caricamento...</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Dettagli di {details.name}</h2>
      <p>Temperatura: {details.main.temp}°C</p>
      <p>Umidità: {details.main.humidity}%</p>
      <p>Vento: {details.wind.speed} m/s</p>
    </div>
  )
}

export default CityDetail