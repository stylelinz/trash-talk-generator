const express = require('express')
const exphbs = require('express-handlebars')
const getTrashTalk = require('./trash-talk-generator')
const hbsHelpers = require('handlebars-helpers')

const app = express()
const port = 3000

const helpers = hbsHelpers()
app.engine('hbs', exphbs({
  helpers: helpers,
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.render('index')
})

app.post('/', (req, res) => {
  const { career } = req.body
  const trashTalk = getTrashTalk(career)
  return res.render('index', { trashTalk, career })
})

app.listen(port, () => console.log(`Express is listening on http://localhost:${port}`))
