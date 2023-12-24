import { useState,useEffect } from 'react'
import { useWeather } from "./hooks/hook";
import DisplayWeather from './components/DisplayWeather'
function App() {
  const [locanto, setLocanto] = useState({})
  const [viewFaren,setViewFaren] = useState(false)
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const success = (pos)=>{
    const crd = pos.coords
    setLocanto(crd)
    // console.log('Your current position is:')
    // console.log(`Latitude : ${crd.latitude}`)
    // console.log(`Longitude: ${crd.longitude}`)
    // console.log(`More or less ${crd.accuracy} meters.`)
  }
  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options)
    // console.log('location useEffect',locanto)
  }, [])
  const weather = useWeather(locanto.latitude,locanto.longitude)
  // console.log('got weather from hook',weather)
  // const result = 'random'
  const handleFahren = () =>{
    setViewFaren(!viewFaren)
  }
  return (
    <div className='bg-grey-100'>
      <h1 className='px-8 py-12 text-center text-3xl font-bold text-indigo-500'>Weather <span className='text-black'>App</span></h1>
    <DisplayWeather lati={locanto.latitude} long={locanto.longitude} result={weather} viewFaren={viewFaren}/>
    <div className='mx-auto w-24'>
      <button className='bg-indigo-600 hover:bg-indigo-300 hover:-translate-y-0.5 transform transition cursor-pointer p-4 rounded-3xl active:bg-indigo-900' onClick={handleFahren}>Click for {viewFaren?<>Celcius</>:<>Fahrenheit</>}</button>
    </div>
    </div>
  )
}

export default App
