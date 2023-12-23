import axios from 'axios'
const baseUrl = 'https://weather-proxy.freecodecamp.rocks/api/'

const getWeather = async() => {
    const response = await axios.get(`${baseUrl}/`)
    return response.data
}

export default {getWeather}