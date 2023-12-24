import { useState,useEffect } from 'react'
import { useWeather } from "./hooks/hook";
import DisplayWeather from './components/DisplayWeather'
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
    console.log('location useEffect',locanto)
  }, [])
  const weather = useWeather(locanto.latitude,locanto.longitude)
  console.log('got weather from hook',weather)
  // const result = 'random'
  return (
    <div className='bg-grey-100'>
      <h1 className='px-8 py-12 text-center text-3xl font-bold text-indigo-500'>Weather <span className='text-black'>App</span></h1>
    <DisplayWeather lati={locanto.latitude} long={locanto.longitude} result={weather}/>
    </div>
  )
}

export default App
