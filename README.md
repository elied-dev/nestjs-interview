# NestJS Interview Project

This project is a NestJS application designed to evaluate interview candidates. It contains a set of questions that assess the candidate's knowledge and skills in NodeJS, NestJS, and APIs.

## Running Project

To run this project follow those steps
```bash
# 1. Clone repository
git clone https://github.com/elied-dev/nestjs-interview

# 2. cd into the repository
cd nestjs-interview/

# 3. Install dependencies
npm install

# 4. Run project
npm run start:dev # watch mode
npm run start
```


## Interview Questions

### Question #1 (Mid-Level) - API Route Implementation

Create a basic API endpoint in NestJS that accepts a POST request at /users to add a new user. 
The user data should include a name and an email. 
Validate that the email is in the correct format using a custom validation pipe. 
Return a success message upon adding the user.

### Question #2 (High-Level) - Middleware and Error Handling

- You are tasked to create a middleware in Node.js (not specific to NestJS) to log all incoming HTTP requests. 
It should log the HTTP method, URL, and request body. 
- Additionally, implement a global error handler in a NestJS application to catch and return structured error responses for invalid routes and unexpected server errors.
- Apply those middlewares/interceptors to the route above
