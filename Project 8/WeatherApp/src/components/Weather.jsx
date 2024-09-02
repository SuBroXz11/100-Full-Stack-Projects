import { useState, useEffect, useRef } from "react";
import { toast } from 'react-toastify';
import "./Weather.css";
import * as images from '../assets';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(false);
    // console.log(import.meta.env.VITE_API_KEY);
    const inputRef = useRef();

    // making enter key functional for searching
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search(inputRef.current.value);
        }
    };

    // Icon codes according to the API docs
    const allIcons = {
        "01d": images.clearIcon,
        "01n": images.clearIcon,
        "02d": images.cloudIcon,
        "02n": images.cloudIcon,
        "03d": images.cloudIcon,
        "03n": images.cloudIcon,
        "04d": images.drizzleIcon,
        "04n": images.drizzleIcon,
        "09d": images.rainIcon,
        "09n": images.rainIcon,
        "10d": images.rainIcon,
        "10n": images.rainIcon,
        "13d": images.snowIcon,
        "13n": images.snowIcon,
    }

    const search = async (city) => {
        if (city === "") {
            toast.warning('Please enter a city name!');
            return;
        }
        try {
            // adding units as metric will give the value of temp in degrees as per API docs
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                toast.error(data.message);
                return;
            }
            // console.log(data);
            const icon = allIcons[data.weather[0].icon] || images.clearIcon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp), // for removing decimal value from our temperature
                location: data.name,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false)
            toast.error('Error fetching the data from API')
        }
    }
    useEffect(() => {
        search("Kathmandu");
    }, [])
    return (
        <div className="weather">

            <div className="search-bar">
                <input type="text" placeholder="Search" ref={inputRef} onKeyDown={handleKeyDown} />
                <img src={images.searchIcon} alt="Search Icon" onClick={() => search(inputRef.current.value)} />
            </div>

            {/* Hide the details when there is some error with the API integraton */}
            {weatherData &&
                <>
                    <img src={weatherData.icon} alt="Clear Icon" className="weather-icon" />
                    <p className="temperature">{weatherData.temperature}°c</p>
                    <p className="location">{weatherData.location}</p>

                    <div className="weather-data">
                        <div className="col">
                            <img src={images.humidityIcon} alt="Humidity Icon" />
                            <div>
                                <p>{weatherData.humidity} %</p>
                                <span>Humidity</span>
                            </div>
                        </div>

                        <div className="col">
                            <img src={images.windIcon} alt="Wind Speed Icon" />
                            <div>
                                <p>{weatherData.windSpeed} Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>}

        </div>
    );
}

export default Weather;
