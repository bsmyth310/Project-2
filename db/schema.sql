DROP DATABASE IF EXISTS Git_Fit_db;
CREATE DATABASE Git_Fit_db;
USE Git_Fit_db;

CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
)

CREATE TABLE IF NOT EXISTS activity (
    id INT NOT NULL AUTO_INCREMENT,
    user_ID INT NOT NULL,
    distance FLOAT  NULL
    exercise VARCHAR(50) NOT NULL,
    calories_burned FLOAT NOT NULL,
    activity_date VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
)