# Local
   ## Prerequisites
   - mysql (change default [config/db.yml](config/db.yml))
   - [node](https://nodejs.org/en/)
   - npm


   ## Install
     npm install
     npm start

The API will launch on [http://localhost:8000](http://localhost:8000) or you can specify port using `node app.js [port]` instead of `npm start`

Example:

`node app.js 8081`  : API will be available on [http://localhost:8081](http://localhost:8081)
# Docker
   ## Prerequisites
   - [docker](https://docs.docker.com/engine/installation/)
   - [docker-compose](https://docs.docker.com/compose/install/)
   - npm


   ## Install
```
docker-compose build
docker-compose up -d
```
