const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: "stylish"
})

// db Connect
db.connect((err) => {
  if (err) console.log(err)
  console.log('MySql Connected')
})

// upload image 
// set Storage Engine
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// init Upload
const upload = multer({ storage: fileStorage })

// routes
app.get('/', (req, res) => {
  res.render('index')
})

// upload product image
app.post('/uploadSingle', upload.single('mainImage'), (req, res) => {
  console.log(req.file)
  res.send('Single File upload success')
})

app.post('/uploadMultiple', upload.array('otherImage', 3), (req, res) => {
  console.log(req.files)
  res.send('Multiple Files upload success')
})

// create product
app.post('/createProduct', (req, res) => {
  const { title, description, price, texture, wash, place, note, story, color, size } = req.body

  const inputData = req.body
  console.log('input data: ', inputData)

  res.send('create product success')
})

app.listen(PORT, () => {
  console.log('Server running on port 3000')
})