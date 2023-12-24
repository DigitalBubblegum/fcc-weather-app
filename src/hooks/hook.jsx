import { useEffect, useState } from 'react'
import weatherService from '../services/weather'
export const useWeather = (lati,long) => {
    const [weatherData,setWeatherData] = useState(null)
    useEffect(()=>{
        console.log('in weatherdata hook')
        weatherService.getWeather(lati,long).then((response)=>{
            console.log(response)
            setWeatherData(response)
        }).catch((e)=>{
            console.log(e)
        })
    },[lati,long])
    return weatherData
}