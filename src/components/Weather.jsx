import React, { useEffect, useState } from 'react';
import './Weather.css';
import { useRef } from 'react';
import search_icon from '../assets/search.png';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState('');
  const [loading, setLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  const inputRef = useRef();

  // Function to set background based on weather condition
  const setWeatherBackground = (weatherCondition) => {
    const backgroundMap = {
      'Clear': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Sunny
      'Clouds': 'url("https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&w=1200")', // Cloudy
      'Rain': 'url("https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&w=1200")', // Rainy
      'Drizzle': 'url("https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&w=1200")', // Drizzle
      'Thunderstorm': 'url("https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&w=1200")', // Thunderstorm
      'Snow': 'url("https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&w=1200")', // Snowy
      'Mist': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Mist
      'Smoke': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Smoke
      'Haze': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Haze
      'Dust': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Dust
      'Fog': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Fog
      'Sand': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Sand
      'Ash': 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")', // Ash
      'Squall': 'url("https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&w=1200")', // Squall
      'Tornado': 'url("https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&w=1200")', // Tornado
    };

    const defaultBackground = 'url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200")';
    
    setBackgroundImage(backgroundMap[weatherCondition] || defaultBackground);
  };

  const search = async(city)=>{
    if(city === "") {
      alert("Enter the CITY name");
      return;
    }
    
    setLoading(true);
    
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`
      const res = await fetch(url);
      const data = await res.json();

      if(!res.ok) {
        alert(data.message);
        return;
      }

      console.log(data);

      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:Math.round((data.wind.speed)*3.6),
        temperature:Math.floor(data.main.temp),
        max_temp:Math.floor(data.main.temp_max),
        min_temp:Math.floor(data.main.temp_min),
        pressure:data.main.pressure,
        visibility:Math.floor((data.visibility)/1000),
        location:data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        condition: data.weather[0].main,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      });
      
      const iconCode = data.weather[0].icon;
      setWeatherIcon(iconCode);
      
      // Set background based on weather condition
      setWeatherBackground(data.weather[0].main);
      
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setWeatherIcon('');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocationWeather = async (lat, lon) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_API_ID}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log('Current location data:', data);

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch current location weather');
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: Math.round((data.wind.speed) * 3.6),
        temperature: Math.floor(data.main.temp),
        max_temp: Math.floor(data.main.temp_max),
        min_temp: Math.floor(data.main.temp_min),
        pressure: data.main.pressure,
        visibility: Math.floor((data.visibility) / 1000),
        location: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        condition: data.weather[0].main,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      });

      const iconCode = data.weather[0].icon;
      setWeatherIcon(iconCode);
      
      // Set background based on weather condition
      setWeatherBackground(data.weather[0].main);

    } catch (error) {
      console.error('Error fetching current location weather:', error);
      // Fallback to a default city if current location fails
      await search("London");
    } finally {
      setLoading(false);
    }
  };

  // Function to get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCurrentLocationWeather(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to default city if location access is denied
          search("London");
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      // Fallback to default city
      search("London");
    }
  };

  // Function to get icon URL
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  useEffect(() => {
    // Get current location weather when component mounts
    getCurrentLocation();
  }, []);

  return (
    <div 
      className="weather_app" 
      style={{ 
        backgroundImage: backgroundImage 
      }}
    >
      {/* Animated Background Overlay */}
      <div className="background_overlay"></div>
      
      <div className="background_animation">
        <div className="floating_circle circle_1"></div>
        <div className="floating_circle circle_2"></div>
        <div className="floating_circle circle_3"></div>
      </div>
      
      <div className="weather_container">
        {/* Header */}
        <div className="weather_header">
          <h1 className="app_title">Weather Forecast</h1>
          <div className="search_section">
            <input 
              ref={inputRef} 
              type="text" 
              placeholder='Search city...'
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  search(inputRef.current.value);
                }
              }}
            />
            <img 
              src={search_icon} 
              alt='Search' 
              className="search-icon" 
              onClick={() => search(inputRef.current.value)}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {/* Main Weather Card */}
        {weatherData && !loading ? (
          <>
            <div className="weather_hero">
              <div className="weather_main_content">
                <div className="location_section">
                  <div className="location_header">
                    <span className="location_icon">📍</span>
                    <h2 className="location_name">{weatherData.location},{weatherData.country}</h2>
                  </div>
                  <p className="weather_description">{weatherData.description}</p>
                </div>

                <div className="temperature_section">
                  <div className="weather_icon_container">
                    {weatherIcon && (
                      <img 
                        src={getWeatherIconUrl(weatherIcon)} 
                        alt={weatherData.description}
                        className="weather_main_icon"
                      />
                    )}
                    <div className="icon_glow"></div>
                  </div>
                  <div className="temperature_display">
                    <h1 className="temperature">{weatherData.temperature}°</h1>
                    <div className="temperature_variation">
                      <span className="temp_high">H: {weatherData.max_temp}°</span>
                      <span className="temp_low">L: {weatherData.min_temp}°</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Stats */}
              <div className="weather_stats">
                <div className="stat_card">
                  <div className="stat_icon_container">
                    <div className="stat_icon">💧</div>
                  </div>
                  <div className="stat_info">
                    <p className="stat_value">{weatherData.humidity}%</p>
                    <p className="stat_label">Humidity</p>
                  </div>
                </div>

                <div className="stat_card">
                  <div className="stat_icon_container">
                    <div className="stat_icon">💨</div>
                  </div>
                  <div className="stat_info">
                    <p className="stat_value">{weatherData.windSpeed} km/h</p>
                    <p className="stat_label">Wind Speed</p>
                  </div>
                </div>

                <div className="stat_card">
                  <div className="stat_icon_container">
                    <div className="stat_icon">🌡️</div>
                  </div>
                  <div className="stat_info">
                    <p className="stat_value">{weatherData.pressure} hPa</p>
                    <p className="stat_label">Pressure</p>
                  </div>
                </div>

                <div className="stat_card">
                  <div className="stat_icon_container">
                    <div className="stat_icon">👁️</div>
                  </div>
                  <div className="stat_info">
                    <p className="stat_value">{weatherData.visibility} km</p>
                    <p className="stat_label">Visibility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="additional_info">
              <div className="info_card">
                <div className="info_icon">🌅</div>
                <div className="info_content">
                  <p className="info_value">{weatherData.sunrise}</p>
                  <p className="info_label">Sunrise</p>
                </div>
              </div>
              
              <div className="info_card">
                <div className="info_icon">🌇</div>
                <div className="info_content">
                  <p className="info_value">{weatherData.sunset}</p>
                  <p className="info_label">Sunset</p>
                </div>
              </div>
            </div>
          </>
        ) : !loading ? (
          <div className="loading-message">Loading weather data...</div>
        ) : null}
      </div>
    </div>
  );
}