const DisplayWeather = ({lati,long}) =>{
    return (
        <div>
            {(!lati||!long)?<>Hello weather</>:<>{lati}{long}</>}
        </div>
    )
}

export default DisplayWeather