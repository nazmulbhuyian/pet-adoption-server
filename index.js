const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const connectDB = require("./server");



const petDetailsRoutes = require('./routes/petDetailsRoutes');
const UsersRegRoutes = require('./routes/usersRoutes');
const UsersLogRoutes = require('./routes/usersLogRoutes');
const GetmeRoutes = require('./routes/getMeRoutes');
const bookingsRoutes = require('./routes/bookingsRoute');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


app.use('/petsDetails', petDetailsRoutes);
app.use('/usersReg', UsersRegRoutes);
app.use('/usersLog', UsersLogRoutes);
app.use('/getMe', GetmeRoutes);
app.use('/bookings', bookingsRoutes);


connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});



// index.js -> routes -> controllers -> services -> models.