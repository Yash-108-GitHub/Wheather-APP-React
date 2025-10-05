import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "data:image/jpeg;base64,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";
    
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyveafWf0U0OWOwjKn-_8eVXY4RoBZ39_gbA&s";

    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjxsovzG0bbwYeN1wzlA4P1ETSs4mjCChmA&s";

    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_sMskdd5QLVB_NyFCMy837kK0O6HL-GLoA&s";
    

    return(
        <div className="InfoBox">
            <h1>Weather Info</h1>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL : info.temp > 15 
                            ? HOT_URL : COLD_URL
                        }

                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {
                            info.humidity > 80 
                            ? <ThunderstormIcon /> : info.temp > 15 
                            ? <SunnyIcon/> : <AcUnitIcon/>
                            
                        }
                        </Typography>

                        <Typography variant="body2" color = 'text.secondary' component={"span"}>
                            <p>Temprature = {info.temp}</p>
                            <p>tempMin = {info.tempMin}</p>
                            <p>tempMax = {info.tempMax}</p>
                            <p>humidity = {info.humidity}</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feelsLike  {info.feelsLike}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}