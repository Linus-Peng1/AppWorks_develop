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
  // locaol
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,

  // // EC2
  // host: process.env.RDS_HOSTNAME,
  // user: process.env.RDS_USERNAME,
  // password: process.env.RDS_PASSWORD,
  // database: process.env.RDS_DATABASE,

  multipleStatements: true
})

// db Connect
db.connect((err) => {
  if (err) console.log(err)
  console.log('MySql Connected')
})

// routes
app.get('/', (req, res) => {
  res.render('index')
})

// create product
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + path.extname(file.originalname))
  }
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter
})

const cpUpload = upload.fields([{ name: 'mainImage', maxCount: 1 }, { name: 'otherImage', maxCount: 3 }])
app.post('/createProduct', cpUpload, (req, res) => {
  let { title, description, price, texture, wash, place, note, story, color, size } = req.body
  price = parseInt(price)
  let mainImage = req.files['mainImage'][0].path
  let otherImages = []

  req.files['otherImage'].forEach(image => {
    otherImages.push('image.path', image.path)
  })

  const Productvalues = { title, description, price, texture, wash, place, note, story, main_image: mainImage }
  const Productsql = 'insert into products set ?'
  db.query(Productsql, Productvalues, (err, result) => {
    if (err) console.log(err)
    console.log(result)
  })
  res.send('done')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})