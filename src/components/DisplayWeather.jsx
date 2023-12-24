const DisplayWeather = ({lati,long,result}) => {
    console.log('result',result)
    if(!lati || !long || !result){
        return(
        <div>
            Waiting for you to give location permission
        </div>
        )
    }
    else{
        return(
        <div>
            <h2>Our system detects that your approximate location is {result.name}</h2>
            With Latitude: {lati}
            <br/>
            With Longitude: {long}
            <br/>
            <img src = {result.weather[0].icon} alt={result.weather[0].description}></img>
            <br/>
            <h2>Here is your local weather information</h2>
            {result.main.feels_like}
            <br/>
            with a current estimated max of {result.main.temp_max} and min of {result.main.temp_min}
            <br/>
            Humidity is {result.main.humidity}
        </div>
    )
    }
}

export default DisplayWeather