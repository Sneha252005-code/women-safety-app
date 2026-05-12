const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* Home Route */

app.get('/', (req, res) => {
    res.send("Women Safety Backend Running");
});

/* MongoDB Connection */

mongoose.connect('mongodb+srv://snehambiradar25_db_user:Sneha%402025@cluster0.ohwmqud.mongodb.net/womenSafetyDB?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

/* User Schema */

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    phone: String,
    emergencyContact: String,
    password: String

});

const User = mongoose.model('User', UserSchema);

/* Alert Schema */

const AlertSchema = new mongoose.Schema({

    message: String,
    location: String,
    time: String

});

const Alert = mongoose.model('Alert', AlertSchema);

/* Register API */

app.post('/register', async(req, res) => {

    const user = new User(req.body);

    await user.save();

    res.send("User Registered Successfully");

});

/* SOS Alert API */

app.post('/alert', async(req, res) => {

    const alert = new Alert(req.body);

    await alert.save();

    res.send("Emergency Alert Sent");

});

/* Get Alerts */

app.get('/alerts', async(req, res) => {

    const data = await Alert.find();

    res.json(data);

});

/* Server */

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});