# Backend of the Project using FLASK.
#
### Creating FLASK server
Now after building the frontend, we need to build a backend server and connect it with the frontend so that the post, get requests are handled. Here I used FLASK to create a server. To build a FLASK server follow these steps:
1. Create a virtual environment.
2. Install flask.
3. Activate the environment to start building server.
#
### Setting Up virtual environment and FLASK:
To obtain this you should already ready with a proper installation of python on your device.
1. create a folder seperate from frontend. 
2. Then cd into your backend folder.
3. Open terminal and type the following commands:
    ## `WINDOWS`
    #### `1. python -m venv venv`
    #### `2. venv\Scripts\activate`
    #### `3. pip install flask`
    #
    ## `macOS`
    #### `1. python3 -m venv venv`
    #### `2. source venv/bin/activate`
    #### `3. pip install flask`
 #
 By running these commands you are ready to code the server.
 #
 As we are using react in our frontend, we need to install some dependencies.
 ### `pip install flask-cors pandas numpy`
 Pandas and Numpy are used to manipulate the data. Flask-CORS is a Python package that provides Cross-Origin Resource Sharing (CORS) support for Flask web applications. CORS is a mechanism that allows web browsers to make requests to a different domain than the one from which the web page originated. This is a security feature implemented by web browsers to prevent cross-site scripting (XSS) attacks.
 #
 After setting up all the necessary libraries we can start writing the code.
 In this server side code, I made a requirements.txt file in which we need to put all the necessary installation libraries names so that during deployement it is helpful. 
 - Flask: A Python web framework for building web applications.
 - NumPy: A powerful library for numerical computing in Python.
 - Pandas: A data manipulation and analysis library.
 - Flask-CORS: An extension for Flask that simplifies Cross-Origin Resource Sharing (CORS) handling.
 - scikit-learn: A machine learning library in Python for various tasks.
 - Gunicorn: Gunicorn (Green Unicorn) is a WSGI HTTP server for Python web applications. It serves as a production-ready server that can handle multiple concurrent requests efficiently. Gunicorn is often used to deploy Flask applications to production environments.
