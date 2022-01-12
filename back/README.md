# API with Node + Express + DB using Typescript

Simple API to get contacts and edit contacts.
Changes are audited and the change history can be checked.
All endpoints requires authentication.


## ⚙️ Built with

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [JWT](https://jwt.io/)
* [MariaDB](https://mariadb.org/)


## Requirements

Install [Node.js](https://nodejs.org/en/)


## Getting Started

### Install MariaDB and SetUp

1. Option 1: Install using the main documentation [main documentation](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.6.5&os=Linux&cpu=x86_64&pkg=tar_gz&i=systemd&m=ptisp)

2. Option 2: Use [Xampp](https://www.apachefriends.org/index.html) and get the advantage of the UI (phpmyadmin)

3. Following the main commands to create the DB for mariaDB
 
<br/>

### Next Steps

1. Clone the reposity
```
git clone https://github.com/Maluzzz/contact_list.git
```
2. Move to the backend folder
```
cd back
```
3. Install the libraries

```
npm i
```
4. You need to add a `.env` in the root of back/ with your db configuration, port and a seed for the jwt token:

```
PORT=
SECRET_JWT_SEED=

DATABASE_USERNAME=
DATABASE_NAME=
DATABASE_PASSWORD=
DATABASE_HOST=
```

5. Run the app with typescript
```
``tsc --watch``
nodemon dist/App.js
```
   

## Improvements

- \[x] JWT login
- \[ ] Add DB Script Setup 
- \[ ] Improve request Object Validations
- \[ ] Remove User Account Endpoint

<br/>

## Endpoints

The application exposes a few REST endpoints. 
Here are the endpoints and how to use:

<details>
<summary> Contacts 📞 </summary>

<br/>

### `GET` /api/contacts

Get all the contacts


```jsx
const myHeaders = new Headers();
myHeaders.append("x-token", "TOKEN_JWT");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("localhost:3000/api/contacts", requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log(error));
```

### `POST` /api/contacts

Upsert endpoint: create contact if the email doesn't exist. If the email exists the endpoint will update the contact


```jsx
const myHeaders = new Headers();
myHeaders.append("x-token", "JWT_TOKEN");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({"name":"John", "email":"john@gmail.com", "phone":"+666444666", "surname":"Smith"});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/api/contacts", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
```

### `DELETE` /api/contacts/:id

Remove history and contact from id


```jsx
var myHeaders = new Headers();
myHeaders.append("x-token", "TOKEN_JWT");
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("localhost:3000/api/contacts/id", requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log(error));
```
</details>


<details>
<summary> History 🧐 </summary>

<br/>

### `GET` /api/history/:id

Get all the history saved from a contact


```jsx
var myHeaders = new Headers();
myHeaders.append("x-token", "TOKEN_JWT");
myHeaders.append("Content-Type", "application/json");


fetch("localhost:3000/api/history/:id", requestOptions)
  .then((response) => response.json())
  .catch((error) => console.log(error));
```
</details>

<details>
<summary> Auth 🙋 </summary>


<br/>

### `POST` /api/auth/login

Verify the user is correct in the db and return jwt token

```jsx
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"email":"name@gmail.com","password":"password"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/api/auth/login", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
```
<br/>

### `POST` /api/auth/signup

Register a user in the db

```jsx
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"name":"name", "email":"name@gmail.com", "password":"password"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/api/auth/signup", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
```

### `GET` /api/auth/refresh-token

Return a new token if the old token is not expired

```jsx
var myHeaders = new Headers();
myHeaders.append("x-token", "TOKEN_JWT");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("localhost:3000/api/auth/refresh-token", requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
```
</details>