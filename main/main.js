const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

require("dotenv").config();

const user = process.env.DB_USER;
const host = process.env.HOST;
const database = process.env.DB_NAME;
const password = process.env.DB_PASS;
const port1 = process.env.PORT;

const initOptions = {

    // pg-promise initialization options...

    connect(client, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to database:', cp.database);
    }

};

const pgp = require("pg-promise")(initOptions);
const db = pgp(`postgres://${user}:${password}@${host}:${port1}/${database}`);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', function (req, res){
    db.query('select * from clientes')
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.status(400).send(error);
    });
})
// app.get('/app/:id', db.getAppsById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})