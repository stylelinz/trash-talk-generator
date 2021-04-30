const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.render('index')
})

app.post('/', (req, res) => {
  // const  = req.body
  const trashTalk = trashTalkGenerator()
})

app.listen(port, () => console.log(`Express is listening on http://localhost:${port}`))
