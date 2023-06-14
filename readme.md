PERN Team member Selection App

This is a simple web application built using the PERN stack (PostgreSQL, Express, React, Node.js). It allows you to select a team and assign tasks to team members based on their ranks.
Features

    Select a team from the dropdown menu.
    Fetch and display team members based on the selected team.
    Enter a task for assignment.
    Submit the form to assign the task to the selected team member.
    Basic form validation to ensure all fields are filled.

Prerequisites

    Node.js and npm should be installed on your machine.
    PostgreSQL database should be set up and running.

Installation

    Clone the repository:

bash

git clone <repository-url>

    Navigate to the project directory:

bash

cd pern-team-selection-app

    Install the backend dependencies:

bash

cd backend
npm install

    Create a .env file in the backend directory and set the following environment variables:

bash

DATABASE_URL=<your-database-url>

    Run the database migrations:

bash

npm run migrate

    Start the backend server:

bash

npm start

    Install the frontend dependencies:

bash

cd ../frontend
npm install

    Start the frontend development server:

bash

npm start

    Open your web browser and navigate to http://localhost:3000 to access the application.

API Routes

    GET /teams: Fetch all teams.
    GET /teams/:id: Fetch team members for a specific team.
    POST /tasks: Create a new task assignment.

Technologies Used

    Frontend:
        React
        JavaScript
        HTML/CSS

    Backend:
        Node.js
        Express.js
        PostgreSQL

