# Simple CRUD with Electron - HTML, CSS, JS

## Context

In this fictitious project we carried out a CRUD (Create, Read, Update, Delete) in order to manage the interventions of the Sogecore garage service.

As a bonus, authentication and a search function have been added.

Electron project with HTML, CSS and JS.

## Deployment of the project

### 1. Install node-modules

    $ npm install

### 2. Create database

In src/js/database.js, you need to change the value.

    $ 	const connection = mysql.createConnection({
    		host: "your-host",
    		user: "name-user",
    		password: "password-user",
    		database: "name-database",
    	});

### 3. Start the project

    $ npm start

### 4. Enjoy =)
