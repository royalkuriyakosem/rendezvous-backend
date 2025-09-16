# Rendezvous Backend


## Description

This is the backend for Rendezvous, a platform designed to connect event organizers, service providers, and attendees. It provides a comprehensive set of APIs for managing users, events, services, bookings, notifications, payments, reviews, and tasks.
It's built using Node.js, Express.js, and Mongoose for interacting with MongoDB. The backend includes authentication and authorization middleware to secure API endpoints.


## Technologies Used


*  Node.js
*  Express.js
*  Mongoose
*  MongoDB
*  Node.js
*  bcryptjs
*  jsonwebtoken
*  dotenv
*  cors


## API Endpoints


### Authentication


*  `POST /api/auth/register`: Register a new user.
*  `POST /api/auth/login`: Login an existing user.


### Users


*  `GET /api/users`: Get all users.
*  `GET /api/users/:id`: Get a user by ID.
*  `POST /api/users`: Create a new user.
*  `PUT /api/users/:id`: Update a user.
*  `DELETE /api/users/:id`: Delete a user.


### Events


*  `GET /api/events`: Get all events.
*  `GET /api/events/:id`: Get an event by ID.
*  `POST /api/events`: Create a new event (protected, requires authentication).
*  `PUT /api/events/:id`: Update an event (protected, requires authentication).
*  `DELETE /api/events/:id`: Delete an event (protected, requires admin role).


### Services


*  `GET /api/services`: Get all services.
*  `GET /api/services/:id`: Get a service by ID.
*  `POST /api/services`: Create a new service (protected, requires vendor role).
*  `PUT /api/services/:id`: Update a service (protected, requires vendor or admin role).
*  `DELETE /api/services/:id`: Delete a service (protected, requires admin role).


### Bookings


*  `GET /api/bookings`: Get all bookings.
*  `GET /api/bookings/:id`: Get a booking by ID.
*  `POST /api/bookings`: Create a new booking.
*  `PUT /api/bookings/:id`: Update a booking.
*  `DELETE /api/bookings/:id`: Delete a booking.


### Notifications


*  `GET /api/notifications`: Get all notifications.
*  `GET /api/notifications/:id`: Get a notification by ID.
*  `POST /api/notifications`: Create a new notification.
*  `PUT /api/notifications/:id`: Update a notification.
*  `DELETE /api/notifications/:id`: Delete a notification.


### Attendees


*  `GET /api/attendees`: Get all attendees.
*  `GET /api/attendees/:id`: Get an attendee by ID.
*  `POST /api/attendees`: Create a new attendee.
*  `PUT /api/attendees/:id`: Update an attendee.
*  `DELETE /api/attendees/:id`: Delete an attendee.


### Payments


*  `GET /api/payments`: Get all payments.
*  `GET /api/payments/:id`: Get a payment by ID.
*  `POST /api/payments`: Create a new payment.
*  `PUT /api/payments/:id`: Update a payment.
*  `DELETE /api/payments/:id`: Delete a payment.


### Reviews


*  `GET /api/reviews`: Get all reviews.
*  `GET /api/reviews/:id`: Get a review by ID.
*  `POST /api/reviews`: Create a new review.
*  `PUT /api/reviews/:id`: Update a review.
*  `DELETE /api/reviews/:id`: Delete a review.


### Tasks


*  `GET /api/tasks`: Get all tasks.
*  `GET /api/tasks/:id`: Get a task by ID.
*  `POST /api/tasks`: Create a new task.
*  `PUT /api/tasks/:id`: Update a task.
*  `DELETE /api/tasks/:id`: Delete a task.


### Event Categories


*  `GET /api/eventCategories`: Get all event categories.
*  `GET /api/eventCategories/:id`: Get an event category by ID.
*  `POST /api/eventCategories`: Create a new event category.
*  `PUT /api/eventCategories/:id`: Update an event category.
*  `DELETE /api/eventCategories/:id`: Delete an event category.


### Service Categories


*  `GET /api/serviceCategories`: Get all service categories.
*  `GET /api/serviceCategories/:id`: Get a service category by ID.
*  `POST /api/serviceCategories`: Create a new service category.
*  `PUT /api/serviceCategories/:id`: Update a service category.
*  `DELETE /api/serviceCategories/:id`: Delete a service category.


## Models


*  `User`: Represents a user with fields like name, email, password, and role.
*  `Event`: Represents an event with fields like title, date, location, and description.
*  `Service`: Represents a service with fields like `serviceName`, `description`, and `pricing`.
*  `Booking`: Represents a booking with references to Event, Service, and User.
*  `Notification`: Represents a notification with references to User.
*  `Attendee`: Represents an event attendee with fields like `eventId`, `userId`, `name`, `email`, `status`, and `registrationDate`.
*  `Payment`: Represents a payment with references to Booking and User.
*  `Review`: Represents a review for an event or service.
*  `Task`: Represents a task associated with an event.
*  `EventCategory`: Represents a category for events.
*  `ServiceCategory`: Represents a category for services.

All models use Mongoose schemas for data validation and interaction with MongoDB.

## Middleware


*  `auth.js`: Authentication middleware to protect routes based on user roles.


## Getting Started


1. Clone the repository:
```sh
git clone https://github.com/royalkuriyakosem/rendezvous-backend.git


npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

npm start
