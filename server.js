const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

require('./models/User');
require('./models/Event');
require('./models/Service');
require('./models/Booking');
require('./models/Notification');
require('./models/Payment');
require('./models/Review');
require('./models/Task');
require('./models/Attendee');
require('./models/EventCategory');
require('./models/ServiceCategory');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
