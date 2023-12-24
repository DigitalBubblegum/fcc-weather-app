const DisplayWeather = ({lati,long,result}) => {
    console.log('result',result)
    if(!lati || !long || !result){
        return(
        <div className='text-center'>
            Waiting for you to give location permission
        </div>
        )
    }
    else{
        return(
        <div className='text-center mt-6 py-7'>
            <h3 className='text-xl text-indigo-500 font-semibold py-8'>{result.weather[0].description}</h3>
            <div className='w-24 p-8 bg-indigo-400 mx-auto rounded-3xl'>
                <img src = {result.weather[0].icon} alt={result.weather[0].main} className="scale-150"></img>
            </div>
            <h2>Our system detects that your approximate location is <span className='text-xl text-indigo-500 font-semibold'>{result.name}</span></h2>
            With Latitude: <span className='text-xl text-indigo-500 font-semibold'>{lati}</span>
            <br/>
            With Longitude: <span className='text-xl text-indigo-500 font-semibold'>{long}</span>
            <br/>
            <br/>
            <h2>Here is your local weather information</h2>
            Your temperature is an estimaded <span className='text-xl text-indigo-500 font-semibold'>{result.main.feels_like}</span>
            <br/>
            with a current estimated max of <span className='text-xl text-indigo-500 font-medium'>{result.main.temp_max}</span> and min of <span className='text-xl text-indigo-500 font-medium'>{result.main.temp_min}</span>
            <br/>
            Humidity is <span className='text-xl text-indigo-500 font-semibold'>{result.main.humidity}</span>
        </div>
    )
    }
}

export default DisplayWeather