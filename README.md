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

![Screenshot 2024-04-29 210822](https://github.com/DanielBros1/TimetableFront/assets/112472952/ef34833d-7c75-4498-a899-12d94a8b6c11)


## Setup
- Clone the repository
- Load the database schema from the `database_schema.sql` file
- Run the backend application
- Run the frontend application
- Open the browser and go to `http://localhost:4200/` (backend application runs on `http://localhost:8080/`)

## Screenshots

<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/51de56a7-83c5-41d6-bd5b-ec2e14c00f28" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/e437fe7c-991a-4e1b-bc7d-fa112541ec34" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/44be0b52-4f36-4f0f-b8ba-1718478bd114" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/6ede0394-c30e-4bc8-8c81-f38d66034d34" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/01c80484-e62b-4c38-bfbb-37b15f69aebe" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/0cedfe32-7d86-4967-8906-0e3f4fa88443" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/3d40e75e-453f-4ee9-99e3-9c48260454ab" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/e04a2fa7-4e5b-4cc5-ae0b-a5583f0b3da6" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/7f55677d-e069-489c-9b57-5ce458e2eea0" width="400">
<img src="https://github.com/DanielBros1/TimetableFront/assets/112472952/061cebb6-bd63-45d7-b0de-db6f28859ec4" width="400">


## How to run
1. Clone both frontend and backend repositories
2. Load the database schema from the `database_schema.sql` file (in the backend repository)
- Create a database named `timetable` in MySQL `mysql -u root -p` --> `CREATE DATABASE timetable;`
- After creating a database named `timetable` (COMMAND: `mysql -u root -p timetable < database_schema.sql`)
3. Run the backend application (COMMAND: `mvn spring-boot:run`)
4. Run the frontend application (COMMAND: `ng serve`)
5. Open the browser and go to `http://localhost:4200/` (backend application runs on `http://localhost:8080/`)
