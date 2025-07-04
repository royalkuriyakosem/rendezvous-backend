const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send("API Running");
});

const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const serviceRoutes = require('./routes/services');
const bookingRoutes = require('./routes/bookings');
const notificationRoutes = require('./routes/notifications');
const attendeeRoutes = require('./routes/attendees');
const paymentRoutes = require('./routes/payments');
const reviewRoutes = require('./routes/reviews');
const taskRoutes = require('./routes/tasks');
const eventCategoryRoutes = require('./routes/eventCategories');
const serviceCategoryRoutes = require('./routes/serviceCategories');
const authRoutes = require('./routes/auth');

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/attendees', attendeeRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/eventCategories', eventCategoryRoutes);
app.use('/api/serviceCategories', serviceCategoryRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
