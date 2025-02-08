# UIC SparkHacks 2025: Tango with Django
**Host**: Kaito Sekiya    
**When**: Thursday, February 6th, 5-6:15 PM  
**Where**: ARC 241  

## Overview
For this workshop, we're going to use a demo of a full-stack web application built with `Django` for the backend and `React` for the frontend. It is designed to showcase commom practices in modern backend development, including APIs, databases, and frontend-backend communication.

## Prerequisites 
Before this workshop, please ensure that all the required software and tools are installed. Check the list of requirements below, and if you don't have any of them, refer to this [file](https://github.com/Givikap/sparkhacks-2025-tango-with-django/blob/main/INSTALL.md) for installation instructions. 

### Requirements 
1. **Visual Studio Code**
2. **GitHub account with an SSH key**
3. **Git**
4. **Node.js 22**
5. **Pyenv**

## Table of Contents
* **[Overview](#overview)**
* **[Prerequisites](#prerequisites)**
* **[Django and React Demo Project](#django-and-react-demo-project)**
    * **[Cloning Repository](#cloning-repository)**
    * **[Content](#content)**
    * **[VS Code Setup](#vs-code-setup)**
    * **[Frontend Setup](#frontend-setup)**
    * **[Backend Setup](#backend-setup)**
    * **[Running Frontend](#running-frontend)**
    * **[Running Backend](#running-backend)**
* **[Django and React Resources](#django-and-react-resources)**
* **[Django and React Templates](#django-and-react-templates)**

## Django and React Demo Project

### Cloning Repository
To create a local copy of the demo project on your machine follow the steps below: 

1. Open a terminal, `cd` to a directory to where you want to store it:

    ```bash
    # Example path, do not just copy/paste it 
    cd Desktop/UIC/SparkHacks
    ```
   
2. Then, clone our repository:
  
    ```bash
    git clone git@github.com:Givikap/sparkhacks-2025-tango-with-django.git
    ```

After that, you should have a local copy of the demo project stored in the folder inside of your current directory.

### Content
There are two folders, each containing a lot of files and directories:

- **frontend** - `React` project, the demo's frontend or client.
- **backend** - `Django` project, the demo's backend or server.

### VS Code Setup
To set up VS Code for running the demo project, follow these steps:

1. In VS Code, open the directory containg your copy of the demo project. 
2. Open the terminal by selecting `View` > `Terminal` from the menu bar.
3. Right click the terminal and select `Split Terminal`.

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
Your Django project is now running on `localhost:8000`. Note that it will be redirected to its admin dashboard which is not default behavior. The admin dashboard allows you to manage your app's data, create and edit models, and perform administrative tasks with nice and user-friendly interface.

## Django and React Resources

### Awesome Collections
- **[Awesome Python by Vinta Chen](https://github.com/vinta/awesome-python)**
- **[Awesome Django by Nick Raienko](https://github.com/enaqx/awesome-react)**
- **[Awesome JavaScript by Chen Cheng](https://github.com/sorrycc/awesome-javascript)**
- **[Awesome React by Will Vincent](https://github.com/wsvincent/awesome-django)**

### Cheatsheets
- **[Python Cheatsheets](https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-cheatsheets.md#python)**
- **[Django Cheatsheets](https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-cheatsheets.md#django)**
- **[JavaScript Cheatsheets](https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-cheatsheets.md#javascript)**
- **[React Cheatsheets](https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-cheatsheets.md#reactjs)**

### Videos
- **[Python Crash Course by Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9goeb7U1FXFdNszWetCmhfB)**
- **[Django Tutorial by Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iqfAag3a_BKEX1N43uJutw)**
- **[JavaScript Tutorial by Bro Code](https://www.youtube.com/playlist?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv)**
- **[ReactJS Turtorial by Code Stoic](https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)**

## Django and React Templates
If you would like to start your own Django and React project, refer to this [file](https://github.com/Givikap/sparkhacks-2025-tango-with-django/blob/main/SETUP.md) for setup instructions.