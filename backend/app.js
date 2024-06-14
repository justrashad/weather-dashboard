const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = 'mongodb://localhost:27017/weather_dashboard'; // Your MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const userRouter = require('./routes/user');
const weatherRouter = require('./routes/weather');
app.use('/users', userRouter);
app.use('/weather', weatherRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
