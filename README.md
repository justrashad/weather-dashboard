# Weather Dashboard

## Description
Weather Dashboard is a web application that provides users with real-time weather information. Users can search for weather data by city name, view current weather conditions, and see a 7-day forecast. The application is built using React for the frontend and Node.js with Express for the backend, with data fetched from the OpenWeatherMap API.

## Features
- User Authentication
- Location Search
- Current Weather Display
- 7-Day Forecast
- Real-Time Weather Alerts
- Responsive Design
- Dark Mode

## Technologies
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Authentication: Firebase
- Database: MongoDB
- API: OpenWeatherMap API

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- OpenWeatherMap API key
- Firebase project setup for authentication

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/justrashad/weather-dashboard.git
   ```

2. Navigate to the backend directory
   ```bash
   cd weather-dashboard/backend
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Create a `.env` file and add your MongoDB connection string and OpenWeatherMap API key
   ```bash
   touch .env
   ```

   Add the following to the `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/weather_dashboard
   WEATHER_API_KEY=YOUR_API_KEY
   ```

5. Start the backend server
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```bash
   cd ../frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file and add your OpenWeatherMap API key
   ```bash
   touch .env
   ```

   Add the following to the `.env` file:
   ```
   REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
   ```

4. Start the frontend development server
   ```bash
   npm start
   ```

## Usage
1. Open your web browser and navigate to `http://localhost:3000`
2. Enter a city name and click "Get Weather" to view the current weather conditions and forecast

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
