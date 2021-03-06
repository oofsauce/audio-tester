
const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})