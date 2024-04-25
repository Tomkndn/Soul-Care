const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
// const formDataRouter = require('./user');
require("dotenv").config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection from compass
// mongoose.connect(process.env.MONGODB_URI);

// MongoDB connection from atlas
mongoose.connect(process.env.MONGODB_ATLAS_URI);

// Establishing connection to the database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// MongoDB schema and model
const userSchema = new mongoose.Schema({
    category: String,
    username: String,
    email: String,
    password: String
});
const appointmentSchema = new mongoose.Schema({
  userEmail: String,
  patientName: String,
  patientNumber: String,
  patientGender: String,
  appointmentTime: String,
  doctor: String,
  preferredMode: String
});

const User = mongoose.model('users', userSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Route to handle user signup
app.post('/register',  async (req, res) => {
  
    try {
      const { category,username, email, password } = req.body;
      uname = username.charAt(0).toUpperCase() + username.slice(1);

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ category,username :uname, email, password: hashedPassword });
      await user.save();
      res.status(201).send('User signed up successfully');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// Route to handle user signin
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send("Invalid password");
    }
    const data = {
      _id: user.id,
      category: user.category,
      username: user.username,
      email: user.email
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to handle form submission
app.post('/submit-appointment', async (req, res) => {
  try {
      const { userEmail,patientName, patientNumber, patientGender, appointmentTime,doctor,preferredMode } = req.body;
      const appointment = new Appointment({ userEmail,patientName, patientNumber, patientGender, appointmentTime,doctor, preferredMode });
      await appointment.save();
      res.status(201).send('Appointment data saved successfully');
  } catch (error) {
      console.error('Error saving appointment data:', error);
      res.status(500).send('Internal server error');
  }
});

// Route for getting all apointments
app.get('/getappointment', async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for getting all user history
app.get("/gethistory", async (req, res) => {
  try {
    const { email } = req.query;
    const data = await Appointment.find({userEmail: email});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});