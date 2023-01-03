import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import { BoxIconElement } from 'boxicons'

function App() {
  const [data, setData] = useState()
  // const [location, setLocation] = useState('')

  
  useEffect(() => {
   
    // if (data === 0) {
      axios.get("https://api.openweathermap.org/data/2.5/weather?lat=8.81389&lon=-74.7253&appid=fb1498a695ea5f0a691f13584fe86041&units=metric")
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
    // }
  
  
  }, [])
  const [show, setShow] = useState(true)

  const change = () => {
    setShow(!show)
  }


  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>{data?.name}, {data?.sys?.country}</h2>
      <div className="all-info">
        <div className="value">
          <box-icon name='cloud' size='lg'></box-icon>
          {
            show && <h2>{data?.main?.temp.toFixed()} °C</h2>
          }
           {
            !show && <h2>{data?.main?.temp.toFixed()} °F</h2>
          }
        </div>
        <div className="info">
          <h3>"{data?.weather[0]?.description}"</h3>
          <div>
            <box-icon name='wind' ></box-icon>
            <h2>Wind Speed: {data?.wind?.speed} m/s</h2>
          </div>
          <div>
            <box-icon name='google-cloud' type='logo' ></box-icon>
            <h2>Clouds: {data?.clouds?.all}%</h2>
          </div>
          <div>
            <box-icon name='thermometer' type='solid' ></box-icon>
            <h2>Pressure: {data?.main?.pressure} hPa</h2>
          </div>
        </div>
      </div>
      <button onClick={change}>Degrees F/C</button>
    </div>
  )
}

export default App
