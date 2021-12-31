# cybersecproject
# SecureApp, course project for University of Helsinki Cyber Security Mooc

## Implemented Vulnerabilities
### 1. Security Misconfiguration
### 2. Identification and Authentication Failures
### 3. Cryptographic Failures
### 4. Broken Access Control
### 5. Insufficient Logging & Monitoring

## Description
This project has 5 intentionally created vulnerabilities from OWASP top 10 list. So it actually isn't secure at all. 🤯🤯🤯

This is a very bare bones app with login and logout functionalities. The stack is only using react.js, no actual backend at all. In the spirit of the poor cyber security of this project, the actual source code is a horrible mess. I am using OWASP 2021 list. The app reacts differently to correct username+password combinations, correct username but wrong password combination and wrong username and password combinations.

## INSTALLATION INSTRUCTIONS:
This project was made using Javascript so you need to have Node.js and a package manager such as npm or Yarn installed.


Step 1:
Check if you have installed Node.js and npm. Type ‘node -v’ to find out if you have node installed. If this command returns a version number, you have it installed.

Check npm installation by typing ‘npm -v’ into the console. If you have npm installed you get a version number.

YOU CAN SKIP THIS STEP IF YOU HAVE NODE AND NPM INSTALLED
In order to install Node.js and npm, follow instructions found here -> https://docs.npmjs.com/downloading-and-installing-node-js-and-npm <-
to install node and npm.

Step 2: Clone the repo with command ‘git clone https://github.com/Melimet/cybersecproject.git’

If you somehow are missing git, installation instructions can be found here https://github.com/git-guides/install-git

Step 3: After cloning the repo, go inside the repo using ‘cd cybersecproject’

Step 4: When inside the repo, install dependencies via using command ‘npm install’. (This project is made for npm but migration to yarn is easy by just running command ‘yarn’)

Step 5: Start the project by running command ‘npm start’. The app should automatically open up in http://localhost:3000/. (Alternative for yarn is ‘yarn start’)

Step 6: You can now play around with the project. Usernames and passwords are stored in ./src/userinfo.json.

