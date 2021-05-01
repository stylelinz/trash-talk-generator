const express = require('express')
const exphbs = require('express-handlebars')
const getTrashTalk = require('./trash-talk-generator')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.render('index')
})

app.post('/', (req, res) => {
  const { career } = req.body
  const trashTalk = getTrashTalk(career)
  return res.render('index', { trashTalk })
})

app.listen(port, () => console.log(`Express is listening on http://localhost:${port}`))
