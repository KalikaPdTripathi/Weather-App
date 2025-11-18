🌤️ Weather Forecast App

A sleek, modern, and responsive weather application built using React + Vite.

<p align="center"> <img src="https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite&logoColor=white" /> <img src="https://img.shields.io/badge/OpenWeatherMap-API-orange?logo=cloudflare&logoColor=white" /> <img src="https://img.shields.io/badge/Live-Demo-success?logo=vercel" /> <img src="https://img.shields.io/badge/License-MIT-lightgrey" /> </p>

🌐 Live Demo

🚀 Try it here: https://weather-app-five-phi-82.vercel.app/

📸 Screenshots
🌤️ Home Screen
<p align="center"> <img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&w=1200" width="700" /> </p>

✨ Features

🌍 Auto Location Weather (Geolocation API)

🔍 City Search with Autocomplete (optional)

🎨 Dynamic Weather-Based Backgrounds

⛅ Animated Weather Icons

📱 Responsive UI for all devices

🌡️ Detailed Weather Stats
Temperature • Humidity • Wind Speed • Pressure • Visibility

🌅 Sunrise & Sunset times

🎭 Glassmorphism UI + Soft Animations

🛠 Tech Stack
| Category   | Technology                   |
| ---------- | ---------------------------- |
| Frontend   | React 18, Vite               |
| Styling    | CSS3, Flexbox, Glassmorphism |
| API        | OpenWeatherMap API           |
| Icons      | OpenWeather Icons, Emojis    |
| Deployment | Vercel / Netlify             |

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

🚀 Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

1. Clone the repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

3. Add environment variables

Create .env in root:

VITE_API_ID=your_openweathermap_api_key

4. Start development server
npm run dev

5. Build for production
npm run build

🌐 API Reference
Get weather by city
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}

Get weather by coordinates
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}

Weather Icons
https://openweathermap.org/img/wn/{icon}@2x.png

🎨 Dynamic Background Logic

| Condition | Background      | Icon Codes |
| --------- | --------------- | ---------- |
| ☀️ Clear  | Sunny day       | 01d, 01n   |
| ☁️ Cloudy | Cloudy sky      | 02d–04n    |
| 🌧️ Rainy | Rain cityscape  | 09d–10n    |
| ⛈️ Storm  | Thunderstorm    | 11d        |
| ❄️ Snow   | Winter scene    | 13d        |
| 🌫️ Fog   | Foggy mountains | 50d        |

🤝 Contributing

Contributions, issues, and feature ideas are welcome!
Feel free to open a PR or issue.

📝 License

This project is licensed under the MIT License.

🙏 Acknowledgments

OpenWeatherMap — Weather Data

Unsplash — Background Images

React & Vite — Frontend Stack

Inspired by modern weather apps and glassmorphism UI trends