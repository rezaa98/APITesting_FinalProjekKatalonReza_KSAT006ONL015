# Tambahan Final Project Testing Api menggunakan Cypress

# API Testing with Cypress
Repositori ini di buat untuk mencoba melakukan API Testing Dengan Cypress. Meskipun pada task menggunakan Tools Katalon namun, saya ingin mencoba untuk mengaplikasikan ilmu yang saya ketahui untuk melakukan testing dengan Cypress juga

## Installation
* Run the project
* Run `npm install` untuk instalasi projek nom
* run `npm install cypress --save-dev` untuk instalasi projek Cypress
* Run `node ./node_modules/cypress/bin/cypress open` untuk membuka cypress

## End Point API

1.GET `https://reqres.in/api/users` <br>
Get all user data <br>

2.GET `https://reqres.in/api/users/<id>` <br>
Get user data with specific ID <br>

3.GET `https://reqres.in/api/users?page=1` <br>
Get user data in page 1 <br>

4.GET `https://reqres.in/api/users?page=2` <br>
Get user data in page 2 <br>

5.GET `https://reqres.in/api/users?delay=3` <br>
Get user data within delay in seconds(3) <br>

6.POST `https://reqres.in/api/users` <br>
Create user <br>

7.POST `https://reqres.in/api/login` <br>
Login user, will return access token <br>

8.POST `https://reqres.in/api/register` <br>
Register user, will return access token <br>

9.PUT `https://reqres.in/api/users/2` <br>
Update data with specific ID <br>

10.DELETE `https://reqres.in/api/users/2` <br>
Delete data with specific ID <br>

11.PATCH `https://reqres.in/api/users/2` <br>
Update data with specific ID <br>