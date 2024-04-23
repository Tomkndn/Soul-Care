const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hackathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// MongoDB schema and model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Route to handle user signup
app.post('/register',  async (req, res) => {
    // console.log("Hello frontend1")
      try {
    const { username, email, password } = req.body;
    // if (password !== confirmPassword) {
    //   return res.status(400).send('Passwords do not match');
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User signed up successfully');
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).send('Internal server error');
  }
});

// Route to handle user signin
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send('Invalid password');
    }
    res.status(200).send('User signed in successfully');
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
