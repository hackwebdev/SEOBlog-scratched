## Starting this project

backend/
Create a .gitignore file
Create .env file

$ npm install express mongoose cookie-parser dotenv cors

$ npm install -D morgan nodemon

```
.env
	NODE_ENV=development
    APP_NAME= < database name >
    PORT=8000
    CLIENT_URL=http://localhost:3000
    DATABASE_CLOUD= '< link from mongoDB atlas >'
    DATABASE_LOCAL= '< link from mongoDB local >'
    JWT_SECRET= < any random text here >

terminal
$ Postman
GET > http://localhost:8000/api

Create signup auth routes

POST > http://localhost:8000/api/signup
Body > raw > JSON
{
"name":"sha",
"email":"sha@gmail.com",
"password":"123456"
}
Headers
- Content-Type - application/json
```

Save users in the database

Install packages for auth and blogs
$ npm install express-validator jsonwebtoken express-jwt formidable lodash slugify string-strip-html

Create a validator method
Check validation if working
Postman

- same in post signup
- just delete the values in name, email and password

Implement the hashing of the password

Generate unique user
$ mpm i shortid
Postman
POST > same in signup data > SEND
check mongodb atlas a user has been created

```
Project from
Real World SEO Web App using MERN Stack with React/Next.js for SSR by Ryan Dhungel
```
