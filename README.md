# Statsanity: Match Predictor and Search Tool

![image](https://github.com/user-attachments/assets/361e356b-2811-4aa7-a870-93b516b31206)


## Overview

This web application provides real-time data on NBA players and teams, alongside advanced features like predicting MVPs and match winners using machine learning. By leveraging a **linear regression model**, the app can predict the likelihood of players winning the MVP award and also predict the outcomes of NBA games. The app pulls live player and team data from Basketball Reference using **web scraping** and integrates this data with machine learning models to deliver accurate predictions.

The app is built with the **MERN stack** (MongoDB, Express.js, React, Node.js), providing a dynamic, full-stack solution. The application includes **user authentication/authorization** with JWT tokens for secure login and sign-up, and password hashing using **bcrypt** to ensure that sensitive user information remains protected.

## Key Features

- **Real-time NBA data**: The app pulls live player and team statistics from **Basketball Reference** using web scraping.
- **MVP Prediction**: A linear regression model predicts the most likely MVP candidates based on current season stats.
- **Match Winner Prediction**: The app uses historical and current game data to predict the winner of upcoming NBA matches.
- **User Authentication & Authorization**: Secure sign-up, login, and protected routes using JWT tokens and bcrypt for password hashing.

## Tech Stack

- **Frontend**: React.js, Material UI (for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing user data)
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication and authorization, **bcrypt** for hashing passwords
- **Web Scraping**: BeautifulSoup (Python) to extract player and team statistics from Basketball Reference
- **Machine Learning**: Linear regression model to predict NBA MVPs and match winners

## Features in Detail

### MVP Prediction
The **linear regression model** is trained on historical data of NBA player statistics, including points, assists, rebounds, and other performance metrics. Using current season data, the app can predict which players are the most likely to win the MVP award, based on their performance relative to previous winners.

### Match Winner Prediction
The app uses a similar linear regression approach, where it analyzes historical match data, including scores, home-court advantage, player performance, and team dynamics. This model predicts the likely winner of upcoming NBA games by evaluating the statistical trends.

### Web Scraping with BeautifulSoup
To provide real-time data, the app scrapes **Basketball Reference** using **BeautifulSoup** (Python). The app extracts crucial statistics such as points per game (PPG), assists, rebounds, player efficiency ratings (PER), and other key metrics that are used to make predictions. These statistics are updated regularly to keep the app's predictions current and accurate.

### Authentication & Authorization
To secure user data and provide personalized experiences, I implemented user authentication using JWT tokens. Here's how it works:
1. **Signup**: Users can create an account by providing a username and password. The password is securely hashed using **bcrypt** before being stored in the database.
2. **Login**: Users log in by entering their credentials. The password is compared with the hashed password stored in the database. Upon successful authentication, a JWT token is issued.
3. **Protected Routes**: Routes that require user authentication (e.g., saving predictions, viewing profile) are protected by verifying the JWT token in the request headers.

#### Authentication Flow
- **JWT**: The token is sent to the client after a successful login, and it must be included in the headers for protected routes. This ensures that the user is authorized to access specific pages and functionalities.
- **Password Hashing with bcrypt**: Passwords are never stored in plain text. Instead, bcrypt hashes passwords before storing them, ensuring that even if the database is compromised, user passwords remain safe.

## Next Steps

- **Enhance the Machine Learning Model**: Improve the accuracy of predictions by experimenting with different algorithms, such as decision trees or neural networks, and by using additional data points like player injuries or team changes.
- **Expand Data Sources**: Integrate more sources for game data, such as team lineups, historical performances, or advanced player stats like true shooting percentage (TS%) or usage rate.
- **User Features**: Add user features like saving favorite players or teams, and viewing personalized predictions and reports based on user preferences.
- **Deployment**: Deploy the app to a cloud platform (e.g., AWS) and set up a CI/CD pipeline for automatic updates and deployments.

