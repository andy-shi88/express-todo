# Express TODO

### Note
My initial hands on nodejs express to create simple todo API, with the following endpoints:

- GET       /tasks
- POST      /tasks
- GET       /tasks/:id
- PUT       /tasks/:id
- DELETE    /tasks/:id

*note that I did not include database migrations here, so you'll have to create the database by yourself with the table `tasks`

### setups:
- clone the repository
- create database
- create `tasks` table with `id`, `title`,  and `status`. 
- change your database connection credentials in `./database/db.js` according to your local machines.
- run `npm install`
- run `npm run start-dev` to start the server

you should be able to create, read, update and delete the tasks by accessing `http://localhost:3000` [could be another port.]