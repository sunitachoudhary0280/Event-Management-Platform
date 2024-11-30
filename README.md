# Event-Management-Platform
Event Management Platform A real-time event management application that allows users to create, update, and delete events, with the added functionality of live updates using Socket.io. This project utilizes React for the front-end, Node.js with Express for the back-end, and Socket.io for real-time communication.
 

Features
Create Events: Users can add new events with details like title, description, date, time, and location.
Update Events: Users can edit existing events to modify the details.
Delete Events: Users can remove events they no longer need.
Real-Time Updates: Using Socket.io, the event data is synchronized across all clients in real-time, ensuring that changes made by one user are immediately visible to others.



Technologies Used
Frontend:
React
CSS (for styling)
Socket.io-client (for real-time communication)

Backend:
Node.js
Express
Sequelize (for database management)
PostgreSQL (used as the database)
Socket.io (for handling real-time communication between the server and clients)

Other Tools:
npm (for package management)
Git (for version control)
Heroku (optional for deployment)

Installation
To run this project locally, follow these steps:
1. Clone the repository
git clone https://github.com/sunitachoudhary0280/event-management-platform.git
cd event-management-platform

2. Backend Setup
Navigate to the backend folder:
cd backend
Install the required dependencies:
npm install
Make sure you have PostgreSQL installed and running. Configure your database credentials in the config/database.js file.
Start the server:
node server.js
The server will now be running on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:
cd ../frontend
Install the required dependencies:
npm install
Start the frontend server:
npm start
The frontend will now be running on http://localhost:3000.

4. Access the Application
Open your browser and go to http://localhost:3000 to see the event management platform in action.
Changes made in the backend will be reflected instantly on the frontend using real-time updates via Socket.io.

How Socket.io Works
Socket.io enables real-time, bi-directional communication between the client and server. Here’s how it is used in the project:


When an event is created, updated, or deleted, the server emits an event to all connected clients with the updated list of events.
The clients listen for these updates and render the latest event data dynamically without needing to refresh the page.
Contributing

Fork this repository.
Create your feature branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Notes
Make sure to replace https://github.com/sunitachoudhary0280/event-management-platform.git with your actual GitHub repository URL.
You can add the Socket.io client and server code sections in the README as part of the "How Socket.io Works" section.
You can also add any additional setup instructions if necessary (like configuring the database or environment variables).
