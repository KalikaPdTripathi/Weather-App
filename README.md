# 🌤️ Weather Forecast App

A modern and responsive weather application built with **React +
Vite**.\
Features dynamic backgrounds, real-time weather data, and a clean
glass-morphism UI.

## 🔗 Live Demo

https://weather-app-five-phi-82.vercel.app/

## ✨ Features

-   Auto-detect current location\
-   Search weather by city\
-   Real-time data from OpenWeatherMap\
-   Dynamic backgrounds based on weather\
-   Responsive UI (mobile-friendly)\
-   Sunrise & sunset times\
-   Clean glass-morphism design

## 🖥️ Tech Stack

  Category     Technology
  ------------ ---------------------
  Frontend     React 18
  Build Tool   Vite
  API          OpenWeatherMap API
  Styling      CSS3, Glassmorphism
  Deployment   Vercel / Netlify

## 📁 Project Structure

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

## ⚙️ Installation & Setup

### 1. Clone the repository

``` bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Create a `.env` file

    VITE_API_ID=your_openweathermap_api_key

### 4. Run development server

``` bash
npm run dev
```

### 5. Build for production

``` bash
npm run build
```

## 🌐 API Reference

### Get weather by city

    https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}

### Get weather by coordinates

    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}

### Weather Icons

    https://openweathermap.org/img/wn/{icon_code}@2x.png

## 🎨 Dynamic Background Logic

  Condition   Background Style   Icon Codes
  ----------- ------------------ ------------
  Clear       Sunny background   01d, 01n
  Clouds      Cloudy sky         02d--04n
  Rain        Rainy scene        09d--10n
  Storm       Thunderstorm       11d
  Snow        Snow landscape     13d
  Fog         Foggy view         50d

## 🙏 Acknowledgments

-   OpenWeatherMap --- Weather data\
-   Unsplash --- Background images\
-   React & Vite communities
