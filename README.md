# MERN-OAuth-Boiler

A full-stack (MERN) OAuth2.0 authentication boilerplate that has a simple UI for login and allows for authentication using Google.

Users can register and login to their account through Google's OAuth2.0 API, or by registering an account through the register portal, and logging in through JWT authentication

Features a front-end web application that uses React(hooks) to design and manage the user interface, as well as Bootstrap to style and create components.

Features a back-end application using the MERN stack that utilized Google’s OAuth2.0, Passport, and MongoDB.

## Demo

### The Homepage to the OAuth2 boiler web app

![Homepage](/Assets/HomePage.JPG)

### The login page

![Signup Page](/Assets/Login.JPG)

### The Google login page

![Signup Page](/Assets/GoogleLogin.JPG)

### User profile page

![Profile Page](/Assets/Profile.JPG)

## Install

```
git clone https://github.com/Tomelinski/MERN-OAuth-Boiler.git
cd MERN-OAuth-Boiler
```

### Frontend:

```
cd Client
npm install
npm start
```

### Backend:

```
cd Server
npm install
npm start
```

## Libraries used

### Frontend

- react
- axios
- bootstrap
- react-bootstrap

### Backend

- bcryptjs
- body-parser
- cookie-session
- cors
- express
- express-validator
- jsonwebtoken
- mongoose
- passport
- passport-google-oauth2
- passport-local
- passport-local-mongoose
