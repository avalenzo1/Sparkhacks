# PIAZZA 2
**Team**: CHARM    
**Members**: Anthony Valenzo, Rohan Jawale, Christian Penaloza, Mateo Viteri

## Introduction
This is a remake of the forum website Piazza, which has most likely give us nightmares to all of us due to its scary and confusing UI.
## Table of Contents
**[Frontend Setup](#frontend-setup)**
**[Backend Setup](#backend-setup)**
**[Running Frontend](#running-frontend)**
**[Running Backend](#running-backend)**
**[Check website](#check-website)**
**[Django and React Resources](#django-and-react-resources)**



### Frontend Setup
Use one of the terminals for the frontend, and run the following commands:

```bash
# Change directory to the `frontend` (React project)
cd frontend

# Install all dependencies
npm install
```

### Backend Setup
Use other terminal for the backend, and run the following commands:

```bash
# Change directory to the `backend` (Django project)
cd backend

# Install Python 3.12.7
pyenv install 3.12.7
# Make it a local version for the current directory
pyenv local 3.12.7

# Create a virtual environment
# NOTE: a local Pyenv version from earlier will be used instead of the system one
python -m venv venv

# Activate the virtual environment
# - macOS/Linux/WSL
source venv/bin/activate
# - Windows
source .\venv\Scripts\activate

# NOTE: to deactivate the virtual environment when you're done
# - macOS/Linux/WSL
deactivate
# - Windows
env\Scripts\deactivate.bat

# Install all dependencies
pip install -r requirements.txt

# Set up the database and apply migrations
python manage.py migrate

# Create a superuser to access the admin dashboard
python manage.py createsuperuser
```

### Running Frontend
```bash
# Start Node.js development server
npm run dev
```
Your React app is now running on `localhost:5173`. Paste it in your browser to see how the frontend looks like. Note that some features won't work unless the backend is running as well.

### Running Backend
```bash
# Start the Django server
python manage.py runserver
```
### Check website
Once both the frontend and backend are running, open your browser and go to the local host prompted in the console by npm run dev. You will be redirected to the log in / register page, where you can register a "new user" and then login to it. Although the website doesn't support user-specific pages, it still gives an idea of what the functioning UI would look like.
