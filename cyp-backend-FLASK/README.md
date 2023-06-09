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
#
### Handling ML model
First, you need to upload the model.pkl file on your github. As the file may exceed the limit, you need to push it using github large file system(lfs). Then using pickle you can load the saved model in the app.py file. Now you can use this model to predict the crop yield based on the values obtained from the frontend to the backend server.
Then on the post request sent by frontend, you can utilize the data and send a response which contains the predicted value. But in the server  you dont need to write the frontend url as you are just responding to a request.
###### Note:
While running server locally, you can use debug=True, but when deploying you need to erase that line and define a port number.
#
### Deploying the Server on render.com
Once you pushed your folder onto github, you can easily host your flask server on render.com. But while creating server on render, you need to put all the values as shown below:
1. You need to link your repository.
2. Then you need to type the folder name where the backend server lies.
3. put the build command as : `pip install -r requirements.txt`
4. put start command as : `gunicorn app:app` , in which 'app:' is the name of your .py file and ':app' is the name of your FLASK(__name__) instance name.
5. keep remaining settings as it is.
6. Run the latest commit and then the server successfully starts running.
7. Copy the server url : (`https://{your server name}.onrender.com`) and use it in the frontend where the post request is used.
#
### Conclusion
I conclude that the free server can't handle more traffic. you can still deploy on aws but on a charge basis. You should follow proper steps to connect the react and flask.
