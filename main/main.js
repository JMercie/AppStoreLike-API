const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./db')
const auth = require('./auth')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/apps/:id', auth.authenticateToken, db.getAppsByUser)
app.get('/', db.login)
app.get('/allapps/', db.getAllApps)
app.get('user/:email', auth.authenticateToken, db.getUserByName)
app.post('/signIn', db.signIn)
app.post('/apps', auth.authenticateToken, db.createApp)
app.post('/buy', auth.authenticateToken, db.buy)

app.put('/apps/:id', auth.authenticateToken, db.updateApp)

app.delete('/apps/:id', auth.authenticateToken, db.deleteApp)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})