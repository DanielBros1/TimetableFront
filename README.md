# Timetable application

## Short description
The timetable application is a web application that allows to browse the university timetable. The application is divided into two parts: the frontend (Angular) and the backend (Spring Boot). 
The frontend part allows to browse the timetable and execute GET and POST requests to the backend. 
The backend part allows to get the data from the database and transfer it to the frontend. The application uses the MySQL database to store the timetable data.


## Technologies
- Angular 16
- TypeScript 5.4.5
- HTML
- CSS
- Spring Boot 
- Java 20
- Maven

## Database
- MySQL

![Screenshot 2024-04-29 210822.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-04-29%20210822.png)


## Setup
- Clone the repository
- Load the database schema from the `database_schema.sql` file
- Run the backend application
- Run the frontend application
- Open the browser and go to `http://localhost:4200/` (backend application runs on `http://localhost:8080/`)

## Screenshots

![Screenshot 2024-05-03 232149.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232149.png)
![Screenshot 2024-05-03 232215.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232215.png)
![Screenshot 2024-05-03 232201.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232201.png)
![Screenshot 2024-05-03 232311.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232311.png)
![Screenshot 2024-05-03 232510.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232510.png)
![Screenshot 2024-05-03 232524.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232524.png)
![Screenshot 2024-05-03 232558.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232558.png)
![Screenshot 2024-05-03 232616.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20232616.png)
![Screenshot 2024-05-03 233009.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20233009.png)
![Screenshot 2024-05-03 233035.png](..%2F..%2F..%2FPictures%2FScreenshots%2FScreenshot%202024-05-03%20233035.png)

## How to run
1. Clone both frontend and backend repositories
2. Load the database schema from the `database_schema.sql` file (in the backend repository)
- Create a database named `timetable` in MySQL `mysql -u root -p` --> `CREATE DATABASE timetable;`
- After creating a database named `timetable` (COMMAND: `mysql -u root -p timetable < database_schema.sql`)
3. Run the backend application (COMMAND: `mvn spring-boot:run`)
4. Run the frontend application (COMMAND: `ng serve`)
5. Open the browser and go to `http://localhost:4200/` (backend application runs on `http://localhost:8080/`)
