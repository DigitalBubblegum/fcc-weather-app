import { useState,useEffect } from 'react'
import weatherService from './services/weather'
import DisplayWeather from './components/displayWeather'
function App() {
  const [locanto, setLocanto] = useState({})
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const success = (pos)=>{
    const crd = pos.coords
    setLocanto(crd)
    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)
  }
  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options)
    console.log(locanto)
  }, [])
  
  return (
    <>
    hello
    <DisplayWeather lati={locanto.latitude} long={locanto.longitude}/>
    </>
  )
}

export default App
