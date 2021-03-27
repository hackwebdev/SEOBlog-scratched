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

- same in post signUp
- just delete the values in name, email and password

Implement the hashing of the password

```
Generate unique user
$ npm i shortid
Postman
POST > same in signup data > SEND
check mongodb atlas a user has been created

Implement singIn
from .env create a JWT_SECRET= < any key >
Postman
POST > http://localhost:8000/api/signin
Headers
Content - Type - application/json
Body > raw
{
    "email":"sha@gmail.com",
    "password":"123456"
}
we get a respond token and a user info

implement signOut
require singIn
Postman - singOut
GET > http://localhost:8000/api/signout > SEND
Postman - secret
GET > http://localhost:8000/api/secret > SEND > cannot access
Need to signin
POST > http://localhost:8000/api/signin
copy the token
Headers > Authorization > Bearer <TOKEN>
Access secret again
GET > http://localhost:8000/api/secret > SEND
```

protect certain routes
how those routes is accessed by users with a valid token

```
FRONTEND NextJS
$ cd frontend
$ npm init -y
$ npx create-next-app .
$ npm run dev - http://localhost:3000

```

Page Layout
components/Layout.js
wrap \_app.js with <Layout>

NOTE: npx kill-port 3000

```
bootstrap for styling
get bootstrap from cdnjs (i did not use)

$ npm install bootstrap@next
import bootstrap CSS file into the next js custom pages/_app.js

Reactstrap Navbar
https://reactstrap.github.io/
$ npm install --save reactstrap react react-dom
Go to components > Navbar

components/Header.js
- create navbar here
bring Header to Layout component

env variables with nextjs
next.config.js file
    module.exports = {
        env: {
            APP_NAME: 'SEOBLOG',
            API_DEVELOPMENT: 'http://localhost:8000/api',
            PRODUCTION: false,
        },
    }
to use: {process.env.APP_NAME} inside Header.js

Note: I skip the config.js file setup

Navigation using Link component

I've decided to drop reactstrap and bootstrap

Setup TailwindCSS
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

components/SignupComponent.js
create a signup form
use this: https://ikartik.com/dev/nextjs-email-signup-part2

https://tailwindui.com/components/application-ui/forms/form-layouts

signup connect to backend with fetch
$ npm install isomorphic-fetch - works on both client and server side

Display loading,success and error message
Make SignupComponent for form only for reuseability

Making of signin page
when signin redirects to to homepage

Saving user and token in cookie and local storage
When you signin
    console > Network > signin - data is displayed

Save the token and user info in the localStorage
    console > Application > LocalStorage > http://localhost:3000 > user
                          > Cookies > http://localhost:3000 > token
$ npm install js-cookie

Implement signout method
deletes localStorage and cookies

Redirect authenticated user from signin and signup

Show dashboard link nav based on the user role

User profile when signed in will be redirected to user dashboard

Auth and admin middlewares with their own dashboards
User profile
Postman
GET > http://localhost:8000/api/profile

Admin and user dashboard

Protecting the routes for auth and admin user

Dashboard link
```

```
Project from
Real World SEO Web App using MERN Stack with React/Next.js for SSR by Ryan Dhungel
```
