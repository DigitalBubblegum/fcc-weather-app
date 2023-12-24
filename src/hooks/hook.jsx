import { useEffect, useState } from 'react'
import weatherService from '../services/weather'
export const useWeather = (lati,long) => {
    const [weatherData,setWeatherData] = useState(null)
    useEffect(()=>{
        // console.log('in weatherdata hook',lati,long)
        weatherService.getWeather(lati,long).then((response)=>{
            // console.log(response)
            if(!response.error){
                setWeatherData(response)
            }
            else{
                response.found = false
            }
        }).catch((e)=>{
            // console.log(e)
        })
    },[lati,long])
    return weatherData
}