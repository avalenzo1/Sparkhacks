# React and Django Templates Setup
**Author**: Kaito Sekiya  

## Table of Contents
* **[React](#React)**
    * **[React Project Setup](#react-project-setup)**
    * **[Running React Project](#running-react-project)**
* **[Django](#Django)**
    * **[Django Project Setup](#django-project-setup)**
    * **[Running Django Project](#running-django-project)**

## React

### React Project Setup
```bash
# Create a template React project
npm create vite@latest frontend -- --template react
cd frontend

# Install all dependencies (yes, even the template has them)
npm install
```

### Running React Project
```bash
# Start the development server
npm run dev
```
Your React app is now running on `localhost:5173`. Paste it in your browser to see how the template project looks like. 

## Django

### Django Project Setup

```bash
# Create directory for a Django project
mkdir backend
cd backend

# Install Python 3.12.7 or any other preferred version
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

# Install Django 
pip install django

# Create a Django project in the current directory
django-admin startproject backend .

# Create a Django App, for example 'api', 'dashboard', etc.
# NOTE: you need to manually add it to INSTALLED_APPS in settings.py
python manage.py startapp <app name>

# Set up the database and apply migrations
python manage.py migrate

# Create a superuser to access the admin dashboard
python manage.py createsuperuser
```

Lastly, add `.gitignore` file from [here](https://djangowaves.com/tips-tricks/gitignore-for-a-django-project/) to your Django folder to prevent pushing unnecessary files to your GitHub repository.

### Running Django Project
```bash
# Start the Django server
python manage.py runserver
```
Your Django project is now running on `localhost:8000`. Note that it will result in 404 error, as the template project doesn't implement a default page. However, you can always access the admin dashboard at `localhost:8000/admin` if you've created the superuser earlier.