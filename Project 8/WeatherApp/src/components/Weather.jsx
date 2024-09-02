import "./Weather.css";
import * as images from '../assets';

const Weather = () => {
    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <img src={images.searchIcon} alt="Search Icon" />
            </div>

            <img src={images.clearIcon} alt="Clear Icon" className="weather-icon" />
            <p className="temperature">16°c</p>
            <p className="location">London</p>

            <div className="weather-data">
                <div className="col">
                    <img src={images.humidityIcon} alt="Humidity Icon" />
                    <div>
                        <p>91 %</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className="col">
                    <img src={images.windIcon} alt="Wind Speed Icon" />
                    <div>
                        <p>3.5 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
