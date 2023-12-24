import axios from 'axios'
const baseUrl = 'https://weather-proxy.freecodecamp.rocks/api/'

const getWeather = async(lati,long) => {
    const response = await axios.get(`${baseUrl}current?lat=${Number(lati)}&lon=${Number(long)}`)
    return response.data
}

export default {getWeather}