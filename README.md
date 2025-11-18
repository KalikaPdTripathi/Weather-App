# 🌤️ Weather Forecast App

A beautiful and responsive weather application built with React that provides real-time weather information for any city worldwide. Features dynamic backgrounds, smooth animations, and a modern glass-morphism UI.

![Weather App Preview](https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200)

## ✨ Features

- **🌍 Current Location Weather** - Automatically detects and displays weather for your current location
- **🔍 City Search** - Search for weather in any city worldwide
- **🎨 Dynamic Backgrounds** - Background changes based on weather conditions
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **⚡ Real-time Data** - Live weather data from OpenWeatherMap API
- **🌡️ Detailed Metrics** - Temperature, humidity, wind speed, pressure, visibility, and more
- **🌅 Sunrise/Sunset Times** - Beautifully displayed sunrise and sunset information
- **🎭 Glass Morphism UI** - Modern glass-effect design with smooth animations

## 🚀 Live Demo

[Add your live demo link here]

## 🛠️ Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. **Install dependencies** 
    ```bash
    npm install

3.**Set up environment variables**
    Create a .env file in the root directory:
    ```.env
    VITE_API_ID=your_openweathermap_api_key_here   

4.**Get your API key**
    Sign up at OpenWeatherMap
    Get your free API key
    Add it to the .env file

5.**Run the development server**
    ```bash
    npm run dev

6.**Build for production**
    npm run build

   📁 Project Structure
   weather-app/
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   └── Weather.css
│   ├── assets/
│   │   └── search.png
│   └── main.jsx
├── public/
├── .env
├── package.json
└── vite.config.js

🎨 Weather Conditions & Backgrounds
The app features dynamic backgrounds that change based on weather conditions:

Condition	            Background	                Icon
☀️ Clear/Sunny     	Bright sunny landscape	       01d/01n
☁️ Cloudy	        Cloudy sky background	       02d/02n, 03d/03n, 04d/04n
🌧️ Rainy	         Rainy cityscape	            09d/09n, 10d/10n
⛈️ Thunderstorm	    Stormy weather scene	       11d/11n
❄️ Snowy	        Winter snow landscape	       13d/13n
🌫️ Mist/Fog	     Foggy mountain view	        50d/50n


🔧 Technologies Used
Frontend Framework: React 18

Build Tool: Vite

Styling: CSS3 with Glass Morphism effects

API: OpenWeatherMap API

Icons: OpenWeatherMap Icons + Emojis

Deployment: Vercel/Netlify (recommended)

🌐 API Reference
This app uses the OpenWeatherMap API with the following endpoint:
// Current weather by city name
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}

// Current weather by coordinates
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}

Weather Icons
Icons are loaded from:
https://openweathermap.org/img/wn/{icon_code}@2x.png

🙏 Acknowledgments
Weather data provided by OpenWeatherMap
Background images from Unsplash
Icons by OpenWeatherMap
Inspired by modern weather applications