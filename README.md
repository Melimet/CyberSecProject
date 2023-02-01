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

Welcome to SecureApp, a not so secure app with login and logout functionalities. The stack is Typescript with React.js acting as frontend and Node.js as backend. Database is just a users.json file in the backend.  I am using the OWASP 2021 list. SecureApp reacts differently to correct username + password combinations, correct username but wrong password combination and wrong username and password combinations.

## Installation guide - Tested on Ubuntu, Mac and Windows
This project was made using Typescript so you need to have Node.js and a package manager such as npm installed.

1. **YOU CAN SKIP THIS STEP IF YOU HAVE NODE AND NPM INSTALLED** 
 Check if you have installed Node.js and npm. Type `node -v` to find out if you have node installed. If this command returns a version number, you have it installed. Check npm installation by typing `npm -v` into the console. If you have npm installed you get a version number.
In order to install Node.js and npm, follow instructions found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Clone the repo with command `git clone https://github.com/Melimet/cybersecproject.git`
If you somehow are missing git, installation instructions can be found [here](https://github.com/git-guides/install-git)

3. Go inside the cloned repo with `cd cybersecproject`.

4. Install project dependencies with `npm install`

5. Install frontend & backend dependencies via using command `npm run install`.

6. Start the project by running command `npm run start`. The app opens up in http://localhost:3000/. Backend is hosted on http://localhost:3001/.
You can now play around with the project. Usernames and passwords are stored in `.backend/src/users.json`. 


Usernames and Passwords
```
root:root
user:password
raimo1952:hunter2
ville_vastaamo:asd123
```

### FLAW 1: Security Misconfiguration - GET /api/users returns all user data including passwords and other sensitive information
EXACT LINK: https://github.com/Melimet/cybersecproject/blob/9c597471fc116d8a030b4ad3751a5833ba9ad48c/backend/src/routes/user.ts#L7

DESCRIPTION: Backend contains a flaw that allows anyone to get full access to all user data with just a simple get request. This api endpoint is supposed to be enabled only in testing and development environments but is also present in production. You can access it yourself by going to http://localhost:3001/api/users.

FIX: Make the app to check in which mode node is being executed in ( prod / test / dev ) and only expose the api endpoint if the app is not in production mode. In backend’s package.json there is installed a library called cross-env which specifies in which mode the program is being executed in. using “npm run dev” boots the program in dev mode where the api is exposed. Using “npm run prod” boots the program in production mode where the api is hidden if the comments in the code are removed. Locations for fix: https://github.com/Melimet/cybersecproject/blob/9c597471fc116d8a030b4ad3751a5833ba9ad48c/backend/src/routes/user.ts#L6
and 
https://github.com/Melimet/cybersecproject/blob/9c597471fc116d8a030b4ad3751a5833ba9ad48c/backend/package.json#L11

### FLAW 2: Insecure Design - Attempting to login with correct username but wrong password reveals the correct password

EXACT LINK: 
FRONTEND: https://github.com/Melimet/cybersecproject/blob/83ff30fbb15c0ac44349d35ddf3213aed28cea59/frontend/src/App.tsx#L28
BACKEND: 
https://github.com/Melimet/cybersecproject/blob/be449385ca998c5ea79c3e148a6a4cbb0f8d882e/backend/src/services/userService.ts#L14


DESCRIPTION: When logging in and giving a correct username but wrong password, the app very helpfully assumes that you have forgotten your password and tells the correct password for the username. So no need for password resets and all that boring hassle! This enables a malicious user to just go through different usernames and find out a password very easily if an username is guessed right.

FIX: Instead of telling the correct password for the matching username, just tell that password and/or username is incorrect. For the future, also creating a feature for resetting a user's password when the password is forgotten would be quite useful. Link to fix: https://github.com/Melimet/cybersecproject/blob/be449385ca998c5ea79c3e148a6a4cbb0f8d882e/backend/src/services/userService.ts#L13

### FLAW 3: Cryptographic Failures - Usage of extremely weak passwords

EXACT LINK: https://github.com/Melimet/cybersecproject/blob/83ff30fbb15c0ac44349d35ddf3213aed28cea59/backend/src/users.json#L21 

DESCRIPTION: The developers have failed once again. They have forgotten to remove root:root user from production code! Malicious things could be done with free access to admin rights. On top of that all the other passwords used in the database are weak and should be much more verbose.

A Finnish mental health company Vastaamo was hacked and a person acting as the hacker(not actually confirmed that he was behind it) told that the access to their server was gained using root:root username and password combination.

FIX: Change admin passwords to something much more secure. A sufficient password could be a 20 character long randomly generated password. Keep the admin access knowledge limited to a need to know basis. I can’t provide a link to the exact fix since json doesn’t support comments but a secure password could be something along the lines of H3['nX18]1\bX;87#3h!eo__18T;*kP; This password was generated using https://www.f-secure.com/en/home/free-tools/password-generator


### FLAW 4: Broken Access Control - CORS is misconfigured to allow API access from any address

EXACT LINK: https://github.com/Melimet/cybersecproject/blob/3a4075516d91288587690203ba011e30208cc188/backend/src/app.ts#L7

DESCRIPTION: CORS (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is misconfigured and it allows access from any addresses instead of only from frontend. A malicious user could abuse this badly. 

FIX: Specify cors from which addresses connections are allowed to be made. Location of fix for flaw: https://github.com/Melimet/cybersecproject/blob/3a4075516d91288587690203ba011e30208cc188/backend/src/app.ts#L6

### FLAW 5: Insufficient Logging & Monitoring - Neither logging nor monitoring is present in backend

EXACT LINK: There is no exact link since it is completely missing in the backend, but it would be missing in https://github.com/Melimet/cybersecproject/blob/main/backend/src/app.ts

DESCRIPTION: The app has no way to log or save traffic information and requests made to it. Hosts of this project would not know if someone hacked all sensitive user data secureApp contains. 

FIX: Install and configure middleware into the backend such as https://expressjs.com/en/resources/middleware/morgan.html or https://cabinjs.com/ to receive information of the traffic coming in to secureApp. Now that morgan is installed in the backend, it logs out any incoming traffic(request and its contents to the terminal, this can be easily configured to be stored in a log file somewhere. Fix link: https://github.com/Melimet/cybersecproject/blob/1b0afd32c1baef00ea372729ac1664695404153d/backend/src/app.ts#L9
