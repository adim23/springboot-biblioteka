![Screenshot](/screenshots/1.png?raw=true "Main view")

This is a little project I had in mind to make, uses Spring Boot for backend framework with some JPA sprinkle to connect with MariaDB. Thymeleaf helps with rendering pages server-side.
Frontend is done using React and basic flux architecture, though it would probably be tons better with Redux and ReactRouter.
Stylesheets use SASS, with aid from [Skeleton](https://github.com/dhg/Skeleton) boilerplate. All that is built using gulp.

> Disclaimer: Passwords are stored in database as plain strings for testing purposes.

# Installation
1. Install JDK, gradle and MariaDB for backend,
2. Make user and database (and make sure to change properties in `./src/main/java/resources/application.properties`),
3. Import sql from `./src/main/resources/import.sql`,
4. Install node,
5. Install gulp `npm install -g gulp`,
6. Install frontend dependencies `npm install`,
7. Run `gulp` (or `gulp minify` for minified output), 
8. Run `gradle bootRun` or `java -jar ./build/libs/biblioteka.jar`.