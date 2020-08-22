const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./db')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/apps/:id', db.getAppsByUser)
app.get('/users/', db.getUsers)
app.get('/allapps/', db.getAllApps) 

app.post('/users', db.createUser)
app.post('/apps', db.createApp)
app.post('/buy', db.buy)

app.put('/apps/:id', db.updateApp)

app.delete('/apps/:id', db.deleteApp)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})