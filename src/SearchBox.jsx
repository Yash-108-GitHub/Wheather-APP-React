import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

function  SearchBox({updateInfo}) {
    let [city , setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8cc6ce23892d1cbff55c74841933e731";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            return result;
        }catch(err){
            throw err;
        }
    };


    let handleChange = (event) => {
        setCity(event.target.value)
    };

    let handleSubmit = async(event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let Info = await getWeatherInfo(); //we has return the result in above
            updateInfo(Info);
        }catch(err){
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" 
                variant="outlined" required value={city}
                onChange={handleChange}/>

                <br></br>
                <br></br>

                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exist!</p>}
            </form>
        </div>
    )
}

export default SearchBox;
