//Load express module with `require` directive
const express = require('express')
const app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(8000, function () {
  console.log('app listening on port 8000 !')
})
