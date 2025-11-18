::: {align="center"}
# 🌤️ Weather Forecast App

### A premium, modern, and dynamic weather application built with **React + Vite**

```{=html}
<p>
```
`<img src="https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white" />`{=html}
`<img src="https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite&logoColor=white" />`{=html}
`<img src="https://img.shields.io/badge/OpenWeatherMap-API-orange?logo=cloudflare&logoColor=white" />`{=html}
`<img src="https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel" />`{=html}
`<img src="https://img.shields.io/badge/License-MIT-lightgrey" />`{=html}
```{=html}
</p>
```
:::

------------------------------------------------------------------------

## 🚀 Live Demo

👉 **https://weather-app-five-phi-82.vercel.app/**

------------------------------------------------------------------------

## 📸 Screenshots

### 🌤️ Home Screen

```{=html}
<p align="center">
```
`<img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200" width="700" />`{=html}
```{=html}
</p>
```
### 📱 Mobile View

(Add your mobile screenshot here)

    ![Mobile View](path-to-mobile-screenshot.png)

### 🎞️ Demo GIF

(Optional -- Add your demo GIF)

    ![Weather App Demo](path-to-demo.gif)

------------------------------------------------------------------------

## ✨ Features

-   🌍 Auto-detect current location\
-   🔍 Search any city globally\
-   ⚡ Real-time weather updates\
-   🎨 Dynamic backgrounds based on weather\
-   📱 Fully responsive design\
-   🌡️ Detailed metrics: Temp, Humidity, Wind, Pressure, Visibility\
-   🌅 Sunrise & Sunset times\
-   🎭 Glassmorphism UI with smooth animations

------------------------------------------------------------------------

## 🖥️ Tech Stack

  Category     Technology
  ------------ ---------------------------
  Frontend     React 18
  Build Tool   Vite
  API          OpenWeatherMap API
  Styling      CSS3, Glassmorphism
  Icons        OpenWeather Icons, Emojis
  Deployment   Vercel / Netlify

------------------------------------------------------------------------

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

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Add environment variables

Create `.env` in the root:

    VITE_API_ID=your_openweathermap_api_key

### 4️⃣ Start development server

``` bash
npm run dev
```

### 5️⃣ Build for production

``` bash
npm run build
```

------------------------------------------------------------------------

## 🌐 API Reference

### 🔵 Get weather by city

    https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}

### 🟢 Get weather by coordinates

    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}

### 🟣 Weather Icons

    https://openweathermap.org/img/wn/{icon_code}@2x.png

------------------------------------------------------------------------

## 🎨 Dynamic Background Mapping

  Weather Condition   Background   Icon Codes
  ------------------- ------------ ------------
  ☀️ Clear            Sunny        01d, 01n
  ☁️ Clouds           Cloudy       02d--04n
  🌧️ Rain             Rainy        09d--10n
  ⛈️ Thunderstorm     Stormy       11d
  ❄️ Snow             Snow         13d
  🌫️ Fog              Foggy        50d

------------------------------------------------------------------------

## 🧠 Future Improvements

-   Hourly & weekly forecast\
-   Weather alerts\
-   AQI (Air Quality Index)\
-   Save favorite cities\
-   Multi-language support

------------------------------------------------------------------------

## 🙏 Acknowledgments

-   Weather data --- **OpenWeatherMap**\
-   Background images --- **Unsplash**\
-   Icons --- **OpenWeatherMap**\
-   Built with ❤️ using **React + Vite**

------------------------------------------------------------------------

## 📜 License

This project is licensed under the **MIT License**.
