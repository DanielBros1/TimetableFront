# Timetable application

## Short description
The timetable application is a web application that allows to browse the timetable of the university. The application is divided into two parts: the frontend (Angular) and the backend (Spring Boot). The frontend part allows to browse the timetable and execute GET and POST requests to the backend. The backend part allows to get the timetable data from the database and send it to the frontend. The application uses the MariaDB database to store the timetable data.
It is also possible to perform CRUD operations on StudentGroup entities in the database.

## Technologies
- Angular 16
- TypeScript 5.4.5
- HTML
- CSS
- Spring Boot 
- Java 20
- Maven

## How to run
1. Clone both frontend and backend repositories
2. Load the database schema from the `database_schema.sql` file (in the backend repository)
    after creating a database named `timetable` (COMMAND: `mysql -u root -p timetable < database_schema.sql`)

2. Run the backend application (COMMAND: `mvn spring-boot:run`)
3. Run the frontend application (COMMAND: `ng serve`)
4. Open the browser and go to `http://localhost:4200/` (backend application runs on `http://localhost:8080/`)
