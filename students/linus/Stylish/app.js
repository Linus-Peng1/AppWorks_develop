const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const routes = require('./routes')

const app = express()
const PORT = 3000

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "stylish"
})
db.connect(err => {
  if (err) throw err;
  console.log("資料庫連線成功")
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'pug')

app.use(routes)

app.listen(PORT, () => {
  console.log('Server running on port 3000')
})