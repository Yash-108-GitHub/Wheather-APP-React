import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import  { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
            city:"Delhi",
            feelsLike: 28.92,
            humidity: 76,
            temp: 26.77,
            tempMax: 26.77,
            tempMin: 26.77,
            weather: "moderate rain"
    });

    let updateInfo = (result) =>{
        setweatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div >
    )
}
