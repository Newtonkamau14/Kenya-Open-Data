CREATE DATABASE IF NOT EXISTS Kenya_Open_Data;

USE Kenya_Open_Data;

CREATE TABLE counties (
    id VARCHAR(36) PRIMARY KEY,
    countyCode CHAR(3) NOT NULL,
    countyName VARCHAR(255) NOT NULL,
    size FLOAT,
    population INT,
    populationDensity INT NOT NULL,
    numberOfHouseholds INT NOT NULL,
    averageHouseholdSize INT NOT NULL,
    sexRatio INT NOT NULL,
    capital VARCHAR(255) NOT NULL,
    governor VARCHAR(255) NOT NULL,
    deputyGovernor VARCHAR(255) NOT NULL,
    womenRepresentative VARCHAR(255) NOT NULL,
    UNIQUE(countyCode, countyName)
);

CREATE TABLE economic_activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    countyId VARCHAR(36),
    activity VARCHAR(255),
    FOREIGN KEY (countyId) REFERENCES counties(id)
);

CREATE TABLE constituencies (
    id VARCHAR(36) PRIMARY KEY,
    countyId VARCHAR(36),
    constituencyCode CHAR(3) NOT NULL,
    constituencyName VARCHAR(255) NOT NULL,
    registeredVoters INT,
    FOREIGN KEY (countyId) REFERENCES counties(id)
);

CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(15),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(20)
);

ALTER TABLE
    users
ADD
    salt VARCHAR(32) NOT NULL;

ALTER TABLE
    users
ADD
    apiKey VARCHAR(36) UNIQUE;

ALTER TABLE
    users DROP COLUMN apiKey;

CREATE TABLE apiKeys (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(36) NOT NULL,
    name VARCHAR(36) NOT NULL,
    apiKey VARCHAR(36) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
);