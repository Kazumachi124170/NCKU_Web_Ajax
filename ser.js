const express = require('express')

const app = express()

const port = 5358

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}/dist`))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
  var a = (parseInt(req.body.input1)+parseInt(req.body.input2)).toString()
  res.send(a)
})
