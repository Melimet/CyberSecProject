# cybersecproject
# SecureApp, course project for University of Helsinki Cyber Security Mooc

## Implemented Vulnerabilities
### 1. Security Misconfiguration - GET /api/users returns all user data including passwords and other sensitive information
### 2. Insecure Design - Attempting to login with correct username but wrong password reveals the correct password
### 3. Cryptographic Failures - Password are stored as plain text in ./backend/src/users.json 
### 4. Broken Access Control - CORS is misconfigured to allow API access from any address
### 5. Insufficient Logging & Monitoring - No logging or monitoring is present in backend

## Description
This project has 5 intentionally created vulnerabilities from OWASP top 10 list. So it actually isn't secure at all. 🤯🤯🤯

This is a very bare bones app with login and logout functionalities. The stack is Typescript with React.js as acting as frontend and Node.js as backend. Database is just a users.json file in the backend.  I am using OWASP 2021 list. SecureApp reacts differently to correct username+password combinations, correct username but wrong password combination and wrong username and password combinations.

## Installation guide
This project was made using Typescript so you need to have Node.js and a package manager such as npm installed.

1. **YOU CAN SKIP THIS STEP IF YOU HAVE NODE AND NPM INSTALLED** 
 Check if you have installed Node.js and npm. Type `node -v` to find out if you have node installed. If this command returns a version number, you have it installed. Check npm installation by typing `npm -v` into the console. If you have npm installed you get a version number.
In order to install Node.js and npm, follow instructions found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Clone the repo with command `git clone https://github.com/Melimet/cybersecproject.git`
If you somehow are missing git, installation instructions can be found [here](https://github.com/git-guides/install-git)

1. Go inside the cloned repo with `cd cybersecproject`.

2. Install dependencies via using command `npm install`.

3. Start the project by running command `npm run start`. The app opens up in http://localhost:3000/. Backend is hosted on http://localhost:3001/.

4. You can now play around with the project. Usernames and passwords are stored in `.backend/src/users.json`. 


Usernames and Passwords
```
root:root
user:password
raimo1952:hunter2
ville_vastaamo:asd123
```

